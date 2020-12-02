let menuLink = Array.from(document.getElementsByClassName('menu__link'));

for (let link of menuLink) {
    link.onclick = function() {
      if (link.parentElement.querySelector(".menu_sub")) {
          if (link.closest(".menu_main").querySelector(".menu_active")) {
                link.closest(".menu_main").querySelector(".menu_active").classList.remove("menu_active");
            }
            link.parentElement.querySelector(".menu_sub").classList.add("menu_active");
            return false;
        }
    }
}