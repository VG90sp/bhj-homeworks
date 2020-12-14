const dropdownLists = Array.from(document.getElementsByClassName('dropdown__list'));
const dropdownItem = Array.from(document.getElementsByClassName('dropdown__item'));
const dropdownValue = Array.from(document.getElementsByClassName('dropdown__value'));

const handler = function (event) {
    dropdownLists.forEach(element => element.classList.add('dropdown__list_active'));
    event.preventDefault();
};

const handler2 = function (event){
    dropdownValue.forEach(element => element.textContent = this.textContent);
    this.closest('.dropdown__list').classList.remove('dropdown__list_active');
    event.preventDefault();
};

dropdownValue.forEach(element => element.addEventListener('click', handler));
dropdownItem.forEach(element => element.addEventListener('click', handler2));