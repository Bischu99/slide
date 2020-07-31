var imgIndex = 0;
var slideImg = new Array(
    document.querySelector(".slide01"),
    document.querySelector(".slide02"),
    document.querySelector(".slide03"),
    document.querySelector(".slide04"),
    document.querySelector(".slide05")
);


function Next(){    
    // this should not happen
    if (slideImg.length == 0)
        return;

    var last = imgIndex;
    imgIndex = Math.abs(imgIndex + 1) % slideImg.length;

    slideImage(imgIndex, last);
}

function prev(){
    // this should not happen
    if (slideImg.length == 0)
        return;

    var last = imgIndex;
    imgIndex = imgIndex == 0 ? slideImg.length - 1 : imgIndex - 1;
    slideImage(imgIndex, last);
}

function slideImage(index, lastIndex) {
    console.log(index);
    slideImg[lastIndex].classList.add("hidden");
    slideImg[index].classList.remove("hidden");
}

function loadSlide() {
    slideImg[imgIndex].classList.remove("hidden");
}

// var imgIndex = 0;
// var last = 0;
// var slideImg = new Array(
//     document.querySelector(".slide01"),
//     document.querySelector(".slide02"),
//     document.querySelector(".slide03"),
//     document.querySelector(".slide04"),
//     document.querySelector(".slide05")
// );
// var count = slideImg.length;

// function Next()// this should not happen
// {    
//     if (imgIndex == count)
//     {
//         slideImg[last+1].classList.add("hidden");
//         imgIndex = 0;
//         return Next();
//     }
//     imgIndex == 0 ? last=imgIndex + 1 : last = imgIndex - 1 ;
//     imgIndex = imgIndex + 1 % slideImg.length;
//     slideImage(imgIndex-1,last);
// }
// function prev()// this should not happen
// {
//     last = imgIndex;
//     imgIndex != 0 ? imgIndex = imgIndex -1% count : imgIndex = count -1 ;
//     slideImage(imgIndex, last);
// }
// function slideImage(lastIndex,index)
// {
//     slideImg[lastIndex].classList.remove("hidden");
//     slideImg[index].classList.add("hidden");
// }


// var imgNumber= 0;
// var slideImg = new Array(
//     document.querySelector(".slide01"),
//     document.querySelector(".slide02"),
//     document.querySelector(".slide03"),
//     document.querySelector(".slide04"),
//     document.querySelector(".slide05")
// );
// var count = slideImg.length -1;
// function Next(){    
//     if (imgNumber -1 == count)
//     {
//         console.log("if 1 ");
//         slideImg[imgNumber-1].classList.remove("hidden");
//         slideImg[imgNumber-1].classList.add("hidden");
//         imgNumber = 0 ;
//     }
//     if (imgNumber != 0)
//     {
//         console.log("if 2");
//         slideImg[imgNumber].classList.remove("hidden");
//         slideImg[imgNumber-1].classList.add("hidden");
//         imgNumber = imgNumber +1 % count;
//     }
//     else
//     {   
//         console.log("else");
//         slideImg[imgNumber].classList.remove("hidden");
//         imgNumber = imgNumber +1 % count;
//     }
// }
// function prev(){
//     if (imgNumber != 0)
//     {
//         imgNumber = imgNumber -1 % count;
//         slideImg[imgNumber].classList.remove("hidden");
//         slideImg[imgNumber+1].classList.add("hidden");
//     }
//     else 
//     {
//         imgNumber = count;
//         slideImg[0].classList.add("hidden");
//         slideImg[imgNumber-1].classList.add("hidden");
//         slideImg[imgNumber].classList.remove("hidden");
//     }
//     if (imgNumber == count)
//     {
//         console.log(imgNumber+1);
//         slideImg[imgNumber+1].classList.remove("hidden");
//         slideImg[imgNumber+1].classList.add("hidden");
//         imgNumber = 0 ;
//     }
//     if (imgNumber != 0)
//     {   
//         slideImg[imgNumber].classList.remove("hidden");
//         slideImg[imgNumber+1].classList.add("hidden");
        
//         imgNumber = -1*(imgNumber -1 % count);
//         console.log(-1*(imgNumber -1 % count));
//     }
//     else
//     {
//         slideImg[imgNumber].classList.remove("hidden");
//         imgNumber = imgNumber -1 % count;
//         console.log(imgNumber);
//     }  
// }