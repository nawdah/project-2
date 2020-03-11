var image =  document.querySelector("div#face img");
  
function changeProduct(areaElem){
    const alt = areaElem.getAttribute('alt');
    if (alt == "blush"){
        image.src = "../image/blush.png";
    }else if(alt == "foundation"){
        image.src = "../image/foundation.png";
    }else if(alt == "eyeshadow"){
        image.src = "../image/eyeshadow.png";
    }else{
        image.src = "../image/eyeliner.png";
    }
    console.log(alt)
}

var tempValue = 4.5;

function setup(){
    let canvas = createCanvas(100,100);
    canvas.parent('product_rating')
    background(255, 0, 200);

// function draw(){

// }