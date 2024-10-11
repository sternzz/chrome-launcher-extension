import manageBookmarkCard from "../components/manageBookmarkCard.js";
import { findAll, deleteOne } from "./DB/BookmarksDB.js";
import { renderBookmarks as reRenderBookmarks } from "./handleBookmarks.js";

const manageBookmarksParentElement = document.querySelector(
  "#manageBookmarksParentElement"
);

const manageBookmarkPopover = document.querySelector("#manageBookmarksPopover");
const manageBookmarksBtn = document.querySelector("#manageBookmarksBtn");
const manageBookmarksCloseBtn = document.querySelector(
  "#manageBookmarksCloseBtn"
);

manageBookmarksBtn.addEventListener("click", (e) => {
  manageBookmarkPopover.classList.toggle("isOpen");
});

manageBookmarksCloseBtn.addEventListener("click", (e) => {
  manageBookmarkPopover.classList.remove("isOpen");
});

manageBookmarksParentElement.addEventListener("click", async (e) => {
  if (e.target.dataset.action === "deleteBookmark") {
    const currentBookmarkId = e.target.dataset.uid;
    try {
      await deleteOne(currentBookmarkId);
    } catch (error) {
      console.log(error);
    }
  }
});

const renderBookmarks = async () => {
  const savedBookmarks = await findAll();
  savedBookmarks?.forEach((bookmark) => {
    manageBookmarksParentElement.insertAdjacentHTML(
      "afterbegin",
      manageBookmarkCard(bookmark?.name, bookmark?.url, bookmark?.icon)
    );
  });
};

renderBookmarks();
