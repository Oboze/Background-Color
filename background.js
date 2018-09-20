function setBackgroundColor(){

	let colors=['#FFCE00','#0375B4','#007849','#262228','#E37222','#66B9BF','#0E0B16','#0ADFE3'];
	let randomColor=Math.floor(Math.random()*8);
	document.body.style.backgroundColor=colors[randomColor];
}

let clickBody=document.getElementById('setColor');
clickBody.addEventListener('click',setBackgroundColor,false);