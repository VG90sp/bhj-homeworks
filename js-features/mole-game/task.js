for (let i = 1; i < 10; i++) {
    const hole = document.getElementById(`hole${i}`);

    hole.onclick = () => {
        if (hole.classList.contains("hole_has-mole")) {            
            dead.textContent++;
            if (dead.textContent == 10) {
                alert("Вы победили!");
                dead.textContent = 0;
                lost.textContent = 0;
            }            
        } else {
            lost.textContent++;
            if (lost.textContent == 5) {
                alert("Вы проиграли");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    }    
}