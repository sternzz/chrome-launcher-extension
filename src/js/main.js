import runTimeNDateWidget from "./clock.js";
import handleBookmarks from "./handleBookmarks.js";
import executeSearchWidgetComponents from "./searchWidget.js";

document.addEventListener("DOMContentLoaded", () => {
  runTimeNDateWidget();
  executeSearchWidgetComponents();
  handleBookmarks();
});
