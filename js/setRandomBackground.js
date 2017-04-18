function getRandomRGB() {

	var r = Math.round(Math.random() * 255);
	var g = Math.round(Math.random() * 255);
	var b = Math.round(Math.random() * 255);
	var opacity = Math.random();

	var rgb = "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";

	return rgb

}

function setRandomBackground(elementId) {

	var element = document.getElementById(elementId);
	element.style.background = getRandomRGB();

}
