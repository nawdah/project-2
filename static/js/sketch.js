var imgFoundation;
var imgBlush;
var imgEyeshadow;
var imgEyeliner;
var test;

function preload(){
    imgFoundation = loadImage('../static/images/foundationTemplate.png');;
    imgBlush = loadImage('../static/images/blushTemplate.png');
    imgEyeshadow = loadImage('../static/images/eyeshadowTemplate.png');
    imgEyeliner = loadImage('../static/images/eyelinerTemplate.png');
};

function setup(){
    let foundationClick = document.querySelectorAll("[alt='foundation']");
    for(var i=0; i<foundationClick.length;i++){
        foundationClick[i].addEventListener("click", function(){
            // img = loadImage('../static/images/foundationTemplate.png');
            imgFoundation.loadPixels();
            if(imgFoundation == null){
                throw new Error("image is null")
            };
            test = "foundation"
            // function draw(){
            //     image(imgFoundation,0,0);
            // };
        });
    };
    let blushClick = document.querySelectorAll("[alt='blush']");
    for(var i=0; i<blushClick.length;i++){
        blushClick[i].addEventListener("click", function(){
            // img = loadImage('../static/images/blushTemplate.png');
            imgBlush.loadPixels()
            if(imgBlush == null){
                throw new Error("image is null")
            };
            test = "blush";

        });
        
    };
    let eyeshadowClick = document.querySelectorAll("[alt='eyeshadow']");
    for(var i=0; i<eyeshadowClick.length;i++){
        eyeshadowClick[i].addEventListener("click", function(){
            // img = loadImage('../static/images/eyeshadowTemplate.png');
            imgEyeshadow.loadPixels();
            if(imgEyeshadow == null){
                throw new Error("image is null")
            }
            test = "eyeshadow";
        });
        // function draw(){
        //     image(imgEyeshadow,0,0);
        // };
        
    };
    let eyelinerClick = document.querySelectorAll("[alt='eyeliner']");
    for(var i=0; i<eyelinerClick.length;i++){
        eyelinerClick[i].addEventListener("click", function(){
            // img = loadImage('../static/images/eyelinerTemplate.png');
            imgEyeliner.loadPixels();
            if(imgEyeliner == null){
                throw new Error("image is null")
            };
            test = "eyeliner"
            // function draw(){
            //     image(imgEyeliner,0,0);
            // };

        });
        
    };
}

function draw(){
    let canvas = createCanvas(100,300);
    canvas.position('product_rating');
    if(test == "foundation"){
        image(imgFoundation, 0, 0);
        console.log("uploaded foundation");
    }else if(test == "blush"){
        image(imgBlush, 0, 0);
    }else if(test == "eyeshadow"){
        image(imgEyeshadow, 0, 0);
    }else{
        image(imgEyeliner, 0, 0);
    };
    //image(img, 0, 0);
}
