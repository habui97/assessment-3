console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function handleSubmit(){
	alert('form has been submitted sucessully')
}

// let image = document.getElementById('img')
// let text=document.getElementById('text')
// text.onmouseover=function(img)
// 	text.innerHTML='Hi!'

// function setNewImage(){
// 	document.getElementById("image").src ="https://static01.nyt.com/images/2021/11/23/business/00cutecats-disinfo-promo/00cutecats-disinfo-promo-facebookJumbo.png'"
// }
// alert();

// let img = (selectedElement) => {
// 	return window.AnimationEvent(selectedElement).img
// }
// let image = document.getElementById('img');
// img.addEventListener('mouseover',() => {
// 	handleSubmit.style.background = alert;
// })
