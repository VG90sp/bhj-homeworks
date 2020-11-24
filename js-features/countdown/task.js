
const countDown = function(){
    const timer = document.getElementById("timer");
    timer.textContent = timer.textContent - 1;
    if (timer.textContent == 0 ){
        clearInterval(time);
        alert("Вы победили в конкурсе");
    }
}

const time = setInterval(countDown, 1000);
