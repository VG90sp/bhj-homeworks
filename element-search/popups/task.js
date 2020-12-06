const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.getElementsByClassName('modal__close');
const showSuccess = document.getElementsByClassName('show-success')[0];

modalMain.classList.add('modal_active');

showSuccess.addEventListener('click', () => {
    modalSuccess.classList.add('modal_active');
});

for (let i = 0; i < modalClose.length; i++) {
    modalClose.item(i).addEventListener('click', function() {
        const modal = this.closest('.modal');
        if (modal) {
            modal.classList.remove('modal_active');
        }
    });
}