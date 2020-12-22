const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

hasTooltip.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        showTooltip(event);
    });
})

function showTooltip(event) {
    tooltip.classList.add('tooltip_active');
    if (tooltip.innerText === event.target.title) {
        tooltip.classList.remove('tooltip_active');
        return;
    }
    const position = event.target.getBoundingClientRect();
    tooltip.style.top = position.top + 20 + "px";
    tooltip.style.left = position.left + 5 + "px";
    tooltip.innerText = event.target.title;
    event.target.after(tooltip);
}

window.addEventListener('scroll', (event) => {
    tooltip.classList.remove('tooltip_active');
});