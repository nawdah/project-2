//going to create a rating system based on images
//use jquery to essentially display 5 stars of product
//image if the value is less than .5 = 0 stars
//if > .5 then its 1 and so forth

var foundationRating = [];
var blushRating = [];
var eyeshadowRating = [];
var eyelinerRating = [];

d3.json("../makeup_data.json").then((data) => {

    let topFoundationRating = data["top10_foundation_rating"];

    let foundation = d3.selectAll("[alt='foundation']");
    for(const f in topFoundationRating){
        var foundationProdRating = topFoundationRating[f];
        for(const rating in foundationProdRating){
            if (rating == "rating"){
                foundationRating.push(foundationProdRating[rating]);
            };
        };
    };

});
console.log(foundationRating);

d3.json("../makeup_data.json").then((data) => {

    let topBlushRating = data["top10_blush_rating"];

    let blush = d3.selectAll("[alt='blush']");
    for(const b in topBlushRating){
        var blushProdRating = topBlushRating[b];
        for(const rating in blushProdRating){
            if (rating == "rating"){
                blushRating.push(blushProdRating[rating]);
            };
        };
    };
    

});
console.log(blushRating);

d3.json("../makeup_data.json").then((data) => {

    let topEyeshadowRating = data["top10_eyeshadow_rating"];

    let eyeshadow = d3.selectAll("[alt='eyeshdaow']");
    for(const e in topEyeshadowRating){
        var eyeshadowProdRating = topEyeshadowRating[e];
        for(const rating in eyeshadowProdRating){
            if (rating == "rating"){
                eyeshadowRating.push(eyeshadowProdRating[rating]);
            };
        };
    };
    

});
console.log(eyeshadowRating);

d3.json("../makeup_data.json").then((data) => {

    let topEyelinerRating = data["top10_eyeliner_rating"];

    let eyeliner = d3.selectAll("[alt='eyeliner']");
    for(const e in topEyelinerRating){
        var eyelinerProdRating = topEyelinerRating[e];
        for(const rating in eyelinerProdRating){
            if (rating == "rating"){
                eyelinerRating.push(eyelinerProdRating[rating]);
            };
        };
    };

});
console.log(eyelinerRating);





let foundationClick = document.querySelectorAll("[alt='foundation']");
for(var i=0; i<foundationClick.length;i++){
    foundationClick[i].addEventListener("click", function(){
        var temp = 5;
        var location = document.getElementById('product_rating')
        for (var x = 0; x < temp ; x++) {
            location.innerHTML += "<img src='../static/images/fenty_foundation.png'";
        }
        
    });
};

let blushClick = document.querySelectorAll("[alt='blush']");
for(var i=0; i<blushClick.length;i++){
    blushClick[i].addEventListener("click", function(){

    });
    
};


let eyeshadowClick = document.querySelectorAll("[alt='eyeshadow']");
for(var i=0; i<eyeshadowClick.length;i++){
    eyeshadowClick[i].addEventListener("click", function(){
        
    });
    
    
};


let eyelinerClick = document.querySelectorAll("[alt='eyeliner']");
for(var i=0; i<eyelinerClick.length;i++){
    eyelinerClick[i].addEventListener("click", function(){
        
    });
    
    
};

