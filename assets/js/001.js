// By: h01000110 (hi)
// github.com/h01000110

var elem = document.documentElement;

function openFullscreen() {
	if (elem.requestFullscreen) {
	  elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) { /* Safari */
	  elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { /* IE11 */
	  elem.msRequestFullscreen();
	}
  }

  function closeFullscreen() {
	if (document.exitFullscreen) {
	  document.exitFullscreen();
	} else if (document.webkitExitFullscreen) { /* Safari */
	  document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) { /* IE11 */
	  document.msExitFullscreen();
	}
  }

max.addEventListener('click', openFullscreen, false);
min.addEventListener('click', closeFullscreen, false);
