function setup(){


    //OKAY SORTA WORKING???? JUST NOT ON THE FACE ???
    var faceClick = createA("#face", "face");

    var face = document.querySelector("#face");
    face.addEventListener("click", function(){
        createCanvas(500,500);
        background(0);

    })

    faceClick.class("face");



    // var face = document.querySelector("#face");
    // face.addEventListener("click", function(){
    //     createCanvas(500,500);

    //     background(0);
    // })

    // face.class(".float-right");
    
    
}

