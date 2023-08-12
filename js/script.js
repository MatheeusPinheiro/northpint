

let btn = document.querySelector(".menu-hambuguer i")


btn.addEventListener('click', ()=>{
	let menu = document.querySelector('.menu-nav')

	menu.classList.toggle('d-flex')
})






let whatsapp = document.querySelector('.icon-whatsapp a i');
let timeout

whatsapp.addEventListener('mouseover', ()=>{
	clearTimeout(timeout);
	setTimeout(() => {
		document.querySelector('.msg').style.display = 'flex'
	}, 300);
	
})

whatsapp.addEventListener('mouseout', ()=>{
	clearTimeout(timeout);
	setTimeout(() => {
		document.querySelector('.msg').style.display = 'none'
	}, 300);
})