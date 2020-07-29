// var slideImg: [] = [document.querySelector(".slide01");
console.log(typeof(document.querySelector(".slide01")));
var imgNumber = 0;
var slideImg = new Array(
    document.querySelector(".slide01"),
    document.querySelector(".slide02"),
    document.querySelector(".slide03"),
    document.querySelector(".slide04"),
    document.querySelector(".slide05")
);
console.log(slideImg[5]);
function Next(){
    imgNumber+=1;
    exe();
}
function exe(){
    slideImg[imgNumber].classList.add("hidden");
    slideImg[imgNumber].classList.remove("hidden");
}