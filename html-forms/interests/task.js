const checkboxes = document.querySelectorAll('.interest__check');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', (event) => {
        const clickedBox = event.currentTarget;
        const parent = clickedBox.closest('.interest');
        const childBoxes = parent.querySelectorAll('.interest__check');
        childBoxes.forEach((box) => box.checked = clickedBox.checked);
    });
});