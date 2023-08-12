

let btn = document.querySelector(".menu-hambuguer i")


btn.addEventListener('click', ()=>{
	let menu = document.querySelector('.menu-nav')

	menu.classList.toggle('d-flex')
})




setInterval(()=>{
	let btn = document.querySelector('carousel-control-next-icon');
	
}, 500)