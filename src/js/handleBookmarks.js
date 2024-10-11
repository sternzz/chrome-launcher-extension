import bookmarkComponent from "../components/bookmark.js";
import { create, findAll } from "./DB/BookmarksDB.js";

import { open, close } from "./handleModal.js";

const bookmarksParent = document.querySelector("#bookmarksParent");

const addNewBookmarkBtn = document.querySelector("#addNewBookmarkBtn");

addNewBookmarkBtn.addEventListener("click", open);




const addBookmarkForm = document.querySelector("#addBookmarkForm");



function validateFormData(data) {
  const { name, url, icon } = data;
  console.log("Validation is in force");

  if (!name || name.trim().length === 0) {
    return { status: false, message: "Name cannot be empty." };
  }

  if (!url || url.trim().length === 0) {
    return { status: false, message: "URL cannot be empty." };
  }

  if (!icon || icon.trim().length === 0) {
    return { status: false, message: "Icon cannot be empty." };
  }

  return { status: true, mmessage: "Validation was successful" };
}


addBookmarkForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(addBookmarkForm);

  const name = formData.get("name");
  const url = formData.get("url");
  const icon = formData.get("icon");

  try {
    const validate = validateFormData({ name, url, icon });
    if (validate.status === false) {
      throw new Error(validate.message);
    }
    await create(name, url, icon);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
});



// Manage Bookmarks

async function renderBookmarks() {

  console.log("Re-Rendering...")
  
  const bookmarks = await findAll();

  bookmarks?.forEach((bookmark) => {
    bookmarksParent.insertAdjacentHTML(
      "afterbegin",
      bookmarkComponent(bookmark?.name, bookmark?.url, bookmark?.icon)
    );
  });

}

async function reRenderBookmarks() {
  const bb = bookmarksParent.querySelectorAll(".bookmark");
  bb.forEach((bookmark) => bookmarksParent.removeChild(bookmark));



}

renderBookmarks();

export { renderBookmarks }