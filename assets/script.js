const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]
const bannerImg = document.querySelector(".banner-img");
const leftClick = document.querySelector(".arrow_left");
const rightClick = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const tagLine = document.querySelector("#banner p");
let bannerIndex = 0;

slides.forEach((slide, index) => {
	const bulletPoints = document.createElement("div");
	bulletPoints.classList.add("dot");
	if (index === bannerIndex){
		bulletPoints.classList.add("dot_selected");
	}
	dotsContainer.appendChild(bulletPoints);
});
const imgDot = () => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === bannerIndex);
    });
};

const nextImage = () => {
	if (bannerIndex === slides.length - 1) {
        bannerIndex = 0;
    } else {
        bannerIndex++;
    }
    bannerImg.setAttribute("src", slides[bannerIndex].image);
    tagLine.innerHTML = slides[bannerIndex].tagLine;
    imgDot();
	console.log (rightClick);
}
const previousImage = () => {
    if (bannerIndex === 0) {
        bannerIndex = slides.length - 1;
    } else {
        bannerIndex--;
    }
    bannerImg.setAttribute("src", slides[bannerIndex].image);
    tagLine.innerHTML = slides[bannerIndex].tagLine;
    imgDot();
	console.log (leftClick);
}

rightClick.addEventListener ('click',nextImage);
leftClick.addEventListener ('click', previousImage);

