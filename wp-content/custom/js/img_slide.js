let currentIndex = 0;
function moveSlide(step) {
	const slides = document.querySelector('.slides');
	const totalSlides = document.querySelectorAll('.slide').length;
	currentIndex = (currentIndex + step + totalSlides) % totalSlides;
	slides.style.transform = `translateX(${-currentIndex * 100}%)`;
	updateDots();
}
function setSlide(index) {
	currentIndex = index;
	document.querySelector('.slides').style.transform = `translateX(${-index * 100}%)`;
	updateDots();
}
function updateDots() {
	document.querySelectorAll('.dot').forEach((dot, i) => {
		dot.classList.toggle('active', i === currentIndex);
	});
}
setInterval(() => moveSlide(1), 5000);

function openFullscreen(src) {
	document.getElementById('fullscreenImage').src = src;
	document.getElementById('fullscreenOverlay').classList.add('active');
	document.body.style.overflow = 'hidden';
}
function closeFullscreen() {
	document.getElementById('fullscreenOverlay').classList.remove('active');
	document.body.style.overflow = 'auto';
}
document.querySelectorAll('.slide img').forEach(img => {
	img.addEventListener('click', function(event) {
		event.stopPropagation();
		openFullscreen(this.src);
	});
});


document.addEventListener("DOMContentLoaded", function () {
	const slides = document.querySelectorAll(".slide");
	const dotsContainer = document.querySelector(".dots");
	
	// Generate dots dynamically
	slides.forEach((_, index) => {
		const dot = document.createElement("span");
		dot.classList.add("dot");
		dot.addEventListener("click", () => setSlide(index));
		dotsContainer.appendChild(dot);
	});

	updateDots(); // Set active dot initially
});