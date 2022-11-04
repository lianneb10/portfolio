const colorBar = document
	.querySelector('.colorBar')

//when cursor moves over the color bar
colorBar.addEventListener("mousemove", blueMove)

//blue color follows the cursor, set background position y to equal the cursor y

function blueMove(event) {
    colorBar.style.backgroundPositionY=(event.clientY-window.innerHeight/2)+"px";  
    colorBar.classList.remove("animate");
}

//when cursor leaves color bar, reanimate 
colorBar.addEventListener("mouseleave", reAnimate)

function reAnimate (event) {
    colorBar.classList.add("animate");
}