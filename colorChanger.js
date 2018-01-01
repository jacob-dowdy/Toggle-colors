var button = document.querySelector("button");
// var isPurple = false;

// A long way to toggle the color
// button.addEventListener("click", function(){
// 	if(isPurple){
// 		document.body.style.background = "white";
// 	}  else{
// 		document.body.style.background = "purple";
// 	}
// 	isPurple = !isPurple;
// });


// A shorter way to toggle the color
button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});