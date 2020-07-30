var imgIndex = 0;
var slideImg = new Array(
    document.querySelector(".slide01"),
    document.querySelector(".slide02"),
    document.querySelector(".slide03"),
    document.querySelector(".slide04"),
    document.querySelector(".slide05")
);
var count = slideImg.length -1;
console.log(count);

function Next(){    
    // this should not happen
    if (slideImg.length == 0)
        return;

    var last = imgIndex;
    imgIndex = Math.abs(imgIndex + 1 )% slideImg.length;

    slideImage(imgIndex, last);
}
function prev(){
    // this should not happen
    if (slideImg.length == 0)
        return;

    var last = imgIndex;
    imgIndex = Math.abs(imgIndex - 1 )% slideImg.length;
    slideImage(imgIndex, last);
}

function slideImage(index, lastIndex) {
    console.log(lastIndex);
    slideImage[lastIndex].classList.remove("hidden");
    slideImage[index].classList.add("hidden");
}
// var slideImg: [] = [document.querySelector(".slide01");
// console.log(typeof(document.querySelector(".slide01")));
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
//         console.log(imgNumber-1);
//         slideImg[imgNumber-1].classList.remove("hidden");
//         slideImg[imgNumber-1].classList.add("hidden");
//         imgNumber = 0 ;
//     }
//     if (imgNumber != 0)
//     {
//         slideImg[imgNumber].classList.remove("hidden");
//         slideImg[imgNumber-1].classList.add("hidden");
//         imgNumber = imgNumber +1 % count;
//     }
//     else
//     {   
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
//     // if (imgNumber == count)
//     // {
//     //     console.log(imgNumber+1);
//     //     slideImg[imgNumber+1].classList.remove("hidden");
//     //     slideImg[imgNumber+1].classList.add("hidden");
//     //     imgNumber = 0 ;
//     // }
//     // if (imgNumber != 0)
//     // {   
//     //     slideImg[imgNumber].classList.remove("hidden");
//     //     slideImg[imgNumber+1].classList.add("hidden");
        
//     //     imgNumber = -1*(imgNumber -1 % count);
//     //     console.log(-1*(imgNumber -1 % count));
//     // }
//     // else
//     // {
//     //     slideImg[imgNumber].classList.remove("hidden");
//     //     imgNumber = imgNumber -1 % count;
//     //     console.log(imgNumber);
//     // }  
// }