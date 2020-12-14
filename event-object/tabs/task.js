const menu = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".tab__content")

for (let i = 0; i < menu.length; i++) {    
    menu[i].addEventListener("click", function() {
        for (let j = 0; j < menu.length; j++) {
            menu[j].classList.remove("tab_active");
            content[j].classList.remove("tab__content_active");
        };
        menu[i].classList.add("tab_active");
        content[i].classList.add("tab__content_active");
    })
}