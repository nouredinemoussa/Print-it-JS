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
	}
]
const bannerImg = document.querySelector(".banner-img");
const leftClick = document.querySelector(".arrow_left");
const rightClick = document.querySelector(".arrow_right");
const bulletPoints = document.querySelector(".dot");
const tagLine = document.querySelector("#banner p");

const imgDot = () => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === bannerIndex);
    });
};

let bannerIndex = 0;

bannerImg.setAttribute ("src", slides[bannerIndex].image);
tagLine.innerHTML = slides[bannerIndex].tagLine;

const nextImage = () => {
	bannerIndex = (bannerIndex + 1) % slides.length;
	bannerImg.setAttribute ("src", slides[bannerIndex].image);
	tagLine.innerHTML = slides[bannerIndex].tagLine;
	imgDot();
}
const previousImage = () => {
	bannerIndex = (bannerIndex - 1) % slides.length;
	bannerImg.setAttribute ("src", slides[bannerIndex].image);
	tagLine.innerHTML = slides[bannerIndex].tagLine;
	imgDot();
}
leftClick.addEventListener ('click', previousImage);
console.log (leftClick);
rightClick.addEventListener ('click',nextImage);
console.log (rightClick);

