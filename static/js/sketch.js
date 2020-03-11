var image =  document.querySelector("div#face img");
console.log(image);
  
function changeProduct(){
    if (image.getAttribute('alt') == "blush")
    {
        image.src = "../image/blush.png";
    }else if(image.getAttribute('alt') == "foundation")
    {
        image.src = "../image/foundation.png";
    }else if(image.getAttribute('alt') == "eyeshadow"){
        image.src = "../image/eyeshadow.png";
    }else{
        image.src = "../image/eyeliner.png";
    }
}

// var tempValue = 5;
// console.log(tempValue);

// function setup(){

// }

// function draw(){

// }