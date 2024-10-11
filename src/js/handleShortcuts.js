import staticShortcuts from "./DB/static-shortcuts.js";
import shortcut from "../components/shortcut.js";
const shortcutsParentElement = document.querySelector(
  "#shortcutsParentElement"
);

staticShortcuts?.forEach((item) => {
  shortcutsParentElement.insertAdjacentHTML(
    "afterbegin",
    shortcut(item?.name, item?.url, item?.icon)
  );
});
