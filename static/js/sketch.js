var image =  document.querySelector("[href='#face']");

// console.log(image);
  
function changeProduct(alt){
    if (alt == "blush"){
        image.src = "../image/blush.png";
    }else if(alt == "foundation"){
        image.src = "../image/foundation.png";
    }else if(alt == "eyeshadow"){
        image.src = "../image/eyeshadow.png";
    }else{
        image.src = "../image/eyeliner.png";
    }
}

// function changeProduct(alt) {
//     if(alt == 'blush') return;
//     image.src = `../image/${alt}.png`;
// }

// var tempValue = 4.5;


// function setup(){


// }

// function draw(){

// }