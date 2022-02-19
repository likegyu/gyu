// By: h01000110 (hi)
// github.com/h01000110

var max = document.documentElement;
var min = document.documentElement;

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

max.addEventListener('click', openFullscreen, false);
min.addEventListener('click', closeFullscreen, false);
