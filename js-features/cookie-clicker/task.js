let counter = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');

cookie.onclick = function(){
    if(cookie.width === 200) {
		cookie.width = 250;
	} else {
		cookie.width = 200;
	}
	
	counter.textContent ++;
}