const modalCloseBtn = document.querySelector("#modal-close-btn");
const modal = document.querySelector("#modal");

class ModalController {
  static open() {
    modal.classList.add("isopen");
  }
  static close() {
    modal.classList.remove("isopen");
  }
  static isOpened(){
    return modal.classList.contains("isopen") ? true : false;
  }
}

modalCloseBtn.addEventListener("click", ModalController.close);

export const { open, close, isOpened } = ModalController;
