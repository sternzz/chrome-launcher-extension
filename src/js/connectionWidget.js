const statusOffline = `
<div title="You seem to be offline" class=" p-1 rounded-full">
            <img
              width="20"
              height="20"
              src="./assets/icons/internet-status/offline.svg"
              alt=""
            />
          </div>
          `;

const statusOnline = `
          <div title="You are connected to the internet" class="p-1 rounded-full">
            <img
              width="20"
              height="20"
              src="./assets/icons/internet-status/online.svg"
              alt=""
            />
          </div>`;

const internetStatusWidgetElement = document.querySelector(
  "#internetStatusWidgetElement"
);

const updateInternetStatus = () => {
  const checkStatus = navigator.onLine;
  if (checkStatus) {
    internetStatusWidgetElement.innerHTML = statusOnline;
  } else {
    internetStatusWidgetElement.innerHTML = statusOffline;
  }
};

window.addEventListener("online", updateInternetStatus);
window.addEventListener("offline", updateInternetStatus);

export default updateInternetStatus;
