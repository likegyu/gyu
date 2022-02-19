// By: h01000110 (hi)
// github.com/h01000110

var max = document.getElementsByClassName("btn")[1];
var min = document.getElementsByClassName("btn")[2];

function openFullscreen() {
	if (max.requestFullscreen) {
		max.requestFullscreen();
	}
}

function closeFullscreen () {
	if (min.exitFullscreen) {
		min.exitFullscreen();
	}
}

max.addEventListener('click', maximize, false);
min.addEventListener('click', minimize, false);
