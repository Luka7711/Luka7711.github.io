let a = $(".project_image");
a.on("mouseover", function() {
	$(".description1").css({"visibility":"visible", "opacity":"1", 
		background: "linear-gradient(to-right, rgba(0, 0, 255, 0.3), rgba(10, 60, 180, 0.3))"})
}).mouseout(function(){
 	$(".description1").css({"visibility":"hidden", "opacity":"0"})
 });

$(".project_image2").on("mouseover", function() {
	$(".description2").css({"visibility":"visible", "opacity":"1", "color":"black"})
}).mouseout(function(){
 	$(".description2").css({"visibility":"hidden", "opacity":"0"})
 })


$(".project_image3").on("mouseover", function() {
	$(".description3").css({"visibility":"visible", "opacity":"1"})
}).mouseout(function(){
 	$(".description3").css({"visibility":"hidden", "opacity":"0"})
 })

$(".project_image4").on("mouseover", function() {
	$(".description4").css({"visibility":"visible", "opacity":"1"})
}).mouseout(function(){
 	$(".description4").css({"visibility":"hidden", "opacity":"0"})
 })

let insta = ["url(./images/brooklyn.png)", "url(./images/chinatown.png)", "url(./images/hometown.jpg)", 
"url(./images/indiana.png)", "url(./images/kansas.png)", "url(./images/saltlake.png)", 
"url(./images/street.png)", "url(./images/beaty.png)"];;



for(let i=0; i<insta.length; i++){
	$divs = $('.insta_img').get(i);
	$($divs).css("background-image", insta[i])
}


// when div element is hovered add div after and 
// set 
// backgorund linear gradient
// add span element with zoom icon





