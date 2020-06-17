
let insta = ["url(./images/brooklyn.png)", "url(./images/chinatown.png)", "url(./images/hometown.jpg)", 
"url(./images/indiana.png)", "url(./images/kansas.png)", "url(./images/saltlake.png)", 
"url(./images/street.png)", "url(./images/beaty.png)"];;



for(let i=0; i<insta.length; i++){
	$divs = $('.insta_img').get(i);
	$($divs).css("background-image", insta[i])
}


const navSlide = () => {
	const burger = document.querySelector('.burger');
	const navList = document.querySelector('.nav-list');
	
	burger.addEventListener("click", () => {
		navList.classList.toggle("nav-active");
		burger.classList.toggle("toggle");
	})
}
console.log("hello")

navSlide();







