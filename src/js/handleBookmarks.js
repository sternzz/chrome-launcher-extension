import bookmarkComponent from "../components/bookmark.js";

const bookmarksParent = document.querySelector("#bookmarksParent");

const bookmarksData = [
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
];

function handleBookmarks() {
  const bookmarksToRender = bookmarksData?.forEach((bookmark) => {
    bookmarksParent.insertAdjacentHTML("afterbegin",
      bookmarkComponent(bookmark?.name, bookmark?.url, bookmark?.icon)
    );
  });
}

export default handleBookmarks;
