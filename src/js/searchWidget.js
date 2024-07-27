const searchWidgetElement = document.querySelector("#search-widget");

const spaceToSearch = () => {
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      searchWidgetElement.focus();
    }
  });
};

function executeSearchWidgetComponents() {
  spaceToSearch();
}

export default executeSearchWidgetComponents;
