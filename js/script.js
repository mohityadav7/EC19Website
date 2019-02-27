document.addEventListener("DOMContentLoaded", function(event) {
	gotoslide(8, 0);

	document.querySelectorAll(".to-right").forEach(function(element) {
		element.addEventListener("click", function() {
			Reveal.right();
		});
	});

	document.querySelectorAll(".to-below").forEach(function(element) {
		element.addEventListener("click", function() {
			Reveal.down();
		});
	});

	// for navbar
	document.querySelector("#nav-btn").addEventListener("click", function() {
		var navbar = document.getElementById("navbar-links");
		if (navbar.style.height == "0px") {
			navbar.style.height = "2000px";
			navbar.style.backgroundColor = "#222";
		} else {
			navbar.style.height = "0";
			navbar.style.backgroundColor = "transparent";
		}
	});
});

function gotoslide(x, y) {
	Reveal.slide(x, y);
	var navbar = document.getElementById("navbar-links");
	navbar.style.height = "0";
	navbar.style.backgroundColor = "transparent";
}