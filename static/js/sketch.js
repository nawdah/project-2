var tempValue = 4.5;

function setup(){
    let canvas = createCanvas(100,300);
    canvas.parent('product_rating')
    background(255);
}

function draw(){

    beginShape(QUADS);
    vertex(30, 20); 
    vertex(30, 75);
    vertex(50, 75);
    vertex(50, 20);
    endShape();
    fill('red');
    // rect(0, 20, 50, 200);
    // fill('red');
    // noStroke();
    // rect(0, 20, 50, 100);

}