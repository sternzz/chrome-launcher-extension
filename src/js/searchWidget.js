import { isOpened } from "./handleModal.js";

const searchWidgetElement = document.querySelector("#search-widget");

let isFocused = false;

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    if (isOpened() === false) {
      searchWidgetElement.focus();
    }
    return;
  }
});

searchWidgetElement.addEventListener("focus", (e) => {
  console.log("Input is focused");
  isFocused = true;
});

searchWidgetElement.addEventListener("blur", (e) => {
  console.log("Input is blurred");
  isFocused = false;
});

window.document.addEventListener("keydown", (e) => {
  const searchQuery = String(searchWidgetElement.value);
  if (isFocused) {
    if (e.code === "Enter") {
      if (searchQuery && searchQuery.length > 1) {
        window.location.href = `https://www.google.com/search?q=${searchQuery}`;
      }
    }
  }
});
