const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.getElementsByClassName('modal__close');

modalMain.classList.add('modal_active');

modalClose.item(0).onclick = function () {
    modalMain.classList.remove('modal_active');
}

modalClose.item(1).onclick = function () {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}

modalClose.item(2).onclick = function () {
    modalSuccess.classList.remove('modal_active');
}
