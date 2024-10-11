const DB_NAME = "HomicDB";
const STORE_NAME = "HomicBKM";

const dummyData = [
  {
    name: "twitch",
    url: "https://www.twitch.tv",
    icon: "https://assets.twitch.tv/assets/favicon-32-e29e246c157142c94346.png",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com",
    icon: "https://www.youtube.com/s/desktop/780e45f1/img/favicon_32x32.png",
  },
  {
    name: "chatGPT",
    url: "https://chatgpt.com/",
    icon: "https://cdn.oaistatic.com/_next/static/media/favicon-32x32.630a2b99.png",
  },
];

const DB = new Promise((resolve, reject) => {
  const request = indexedDB.open(DB_NAME, 1);

  request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore(STORE_NAME, { keyPath: "url" });
  };

  request.onsuccess = function (event) {
    resolve(event.target.result);
  };

  request.onerror = function (event) {
    reject("Database error: " + event.target.errorCode);
  };
});

function create(name, url, icon) {
  return new Promise((resolve, reject) => {
    DB.then((db) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const objectStore = transaction.objectStore(STORE_NAME);
      const request = objectStore.add({ name, url, icon });

      request.onsuccess = function () {
        resolve("Data added", { name, url, icon });
        console.log("Data added successfully");
      };

      request.onerror = function (event) {
        reject("Data rejected");
        console.error("Error adding data:", event.target);
      };
    }).catch(console.error);
  });
}

function findOne(id) {
  DB.then((db) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const objectStore = transaction.objectStore(STORE_NAME);
    const request = objectStore.get(id);

    request.onsuccess = function () {
      console.log("Data retrieved:", request.result);
    };

    request.onerror = function (event) {
      console.error("Error retrieving data: ", event.target.errorCode);
    };
  }).catch(console.error);
}

// getData(1);

function findAll() {
  return new Promise((resolve, reject) => {
    DB.then((db) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const objectStore = transaction.objectStore(STORE_NAME);
      const request = objectStore.openCursor();
      const data = [];

      request.onsuccess = function (event) {
        const cursor = event.target.result;
        if (cursor) {
          data.push(cursor.value); // Add the data to the array
          cursor.continue(); // Move to the next entry
        } else {
          // console.log("All data retrieved:", data);
          resolve(data); // Resolve the promise with the data
        }
      };

      request.onerror = function (event) {
        console.error("Error retrieving data: ", event.target.errorCode);
        reject(event.target.errorCode); // Reject the promise on error
      };
    }).catch(reject); // Handle errors from DB
  });
}

function deleteOne(id) {
  return new Promise((resolve, reject) => {
    DB.then((db) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const objectStore = transaction.objectStore(STORE_NAME);
      const request = objectStore.delete(id);

      request.onsuccess = function () {
        resolve("Data deleted successfully");
        console.log("Data deleted successfully");
      };

      request.onerror = function (event) {
        reject("Error deleting data");
        console.error("Error deleting data:", event.target.errorCode);
      };
    }).catch(console.error);
  });
}

// deleteOne()

export { create, findAll, findOne, deleteOne };

// Testing

// Fetch All Data
const fetchData = async () => {
  const data = await getAllData();
  console.log(data);
};
// fetchData();

// Populate DB with data

// dummyData?.forEach((bookmark) => {
//   create(bookmark?.name, bookmark?.url, bookmark?.icon);
// });  
