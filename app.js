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

//when in mobile version, clicking in the menu icon will open and close the navigation bar

const menuIcon = document.querySelector(".menuIcon")

menuIcon.addEventListener("click", menuOpen)

function menuOpen(event) {
    document.querySelector(".navbar").classList.toggle("hidden");
}

//when user clicks envelope icon on bottom right of screen, they receive a randomized message

const openPls = document.querySelector(".envelope")

openPls.addEventListener("click", giveMessage)

function giveMessage(event) {
    document.querySelector(".envelope").classList.toggle("heart");
     document.querySelector('.message').classList.toggle('heart');
}