// OUR INITIAL FUNCTION WHICH WILL GENERATE THE EMPTY PAGE WITH BLANK CHARTS?

//to do this part you need to add an event listener to generate some plot so that when you click it
//it'll generate the code and everything else for it

// OUR SPEECH FUNCTION
let voice;

function setup() {
    voice = new p5.Speech();
    voice.onLoad = voiceReady;
    noLoop();
}

function voiceReady() {
    voice.listVoices();
}

function speech() {
    voice.setVoice("Google UK English Female");
	voice.speak("Please click a part of the face");
}  


// OUR INIT FUNCTION
function init() {

    //SETTING THE CATEGORIES FOR THE DROPDOWN
    // const categories = ["Foundation","Blush", "Eyeliner", "Eyeshadow"]
    // categories.forEach((obj) => {
    //         var options = d3.select("#category").append("option");
    //         options.text(`${obj}`).attr("value", `${obj}`);
    //     }) 

    //APPENDING EMPTY PRODUCTS TO THE DROPDOWN MEU
    // const products = ["","","","","","","","","",""]
    // products.forEach((obj) => {
    //     var options = d3.select("#product").append("option");
    //     options.text(`${obj}`).attr("value", `${obj}`);
    // }) 


    //DISABLING CLICK FUNCTIONALITY FOR CATEGORY UNTIL A PART OF THE FACE IS CLICKED ON    
    d3.select("#category").attr("disabled", true);
    
    //DISABLING CLICKING ON THE PRODUCT DROPDOWN PRIOR TO CLICKING ON THE FACE
    d3.select("#product").attr("disabled", true);

    //INITIALIZING THE EVENT LISTENER FOR THE BUTTON TO BE CLICKED ON
    var sound = d3.select("#sound").node()
    sound.addEventListener("click", function() {
        speech();
    })

    //BEGINNING SETUP FOR PLOTS
    // FOR TESTING PURPOSES
    // d3.json("../makeup_data.json").then((data) => {
          
        // console.log(data)

        //FOR TESTING PURPOSES ONLY
        // var top_blush = data["top10_blush_price.csv"];
        // console.log(top_blush)


        //FOR DROPDOWN MENU (WE'LL USE THIS TO GENERATE THE PRODUCTS ONCE THE FACE IS CLICKED ON)
       
        // THE FOLLOWING WAS FOR TESTING ONLY
        // for(const blush in top_blush) {
        //     // console.log(`${blush} = ${top_blush[blush]}`);
        //     var blushthings = top_blush[blush]
        //     for(const prod in blushthings) {
        //         if (prod == "product") {
        //             console.log(`${prod} = ${blushthings[prod]}`)
        //             var options = d3.select("#product").append("option");
        //             options.text(`${blushthings[prod]}`).attr("value", `${blushthings[prod]}`);
        //         }
        //     }
        // }

        //RATING VISUALIZATION PLOT
        // var trace1 = {
        //     x: [],
        //     y: [],
        //     type: "bar",
        //     name: "Empty",
        //     orientation: "h",
        //     name: "Product Rating"
        // };
        
        // // Create the data array for the plot
        // var data = [trace1];
        
        // // Define the plot layout
        // var layout = {
        //     title: "Product Rating",
        // };
        
        // // Plot the chart to a div tag with id "plot"
        // Plotly.newPlot("product_rating", data, layout);
        // d3.select("#product_rating").attr("hidden", true);

         //TOP PRICE VISUALIZATION PLOT
         var trace2 = {
            x: [],
            y: [],
         text: [],
         name: "Empty",
         type: "bar",
         orientation: "h"
       };
 
       var chartData = [trace2]
       
       var layout = {
        hovermode: "closest",
        hoverlabel: {bgcolor: "#FFF"},
        xaxis: { title: "Prices in US dollars" },
        yaxis: {showticklabels: false},
         title: "Top 10 Products by Price"
       };
        
        // Plot the chart to a div tag with id "plot"
        Plotly.newPlot("top_price", chartData, layout);
        d3.select("#top_price").attr("hidden", true);

        //TOP RATING VISUALIZATION PLOT
          var trace3 = {
            x: [],
            y: [],
         text: [],
         name: "Empty",
         type: "bar",
         orientation: "h"
       };
 
       var chartData = [trace3]
       
       var layout = {
        hovermode: "closest",
        hoverlabel:{bgcolor: "#fff" },
        xaxis: { title: "Ratings from 1 to 5" },
        yaxis: {showticklabels: false},
        title: "Top 10 Products by Rating",
        autosize: true
       }

       var config = {responsive: true}
       
        
        // Plot the chart to a div tag with id "plot"
        Plotly.newPlot("top_rating", chartData, layout, config);
        d3.select("#top_rating").attr("hidden", true);


    // }); THIS IS THE CLOSING FOR THE D3 JSON READING ONLY FOR TESTING PURPOSES
};
init();


//queryselectorall is an array so would need to do a for loop to iterate


// function foundation(){
    
// ;}

var foundationListen = document.querySelectorAll("[alt='foundation']");

for(var i=0; i < foundationListen.length; i++){
    
    foundationListen[i].addEventListener("click", function(){
        // console.log("This is working");
        // d3.json("../makeup_data.json").then((data) => {
            // console.log(data);
        // });
        var image =  document.querySelector("div#face img");
        image.src = "static/images/foundation.png";

        topPriceFoundation();
        topRatingFoundation()
        d3.select("#category").attr("disabled", null);
        d3.select("#product").attr("disabled", null);
        d3.select("#top_price").attr("hidden", null);
        d3.select("#top_rating").attr("hidden", null);

        d3.json("makeup_data.json").then((data) => {
            
            // console.log(data)

            //FOR TESTING PURPOSES ONLY
            var top_foundation = data["top10_foundation_price.csv"];
            // console.log(top_blush)


            //FOR DROPDOWN MENU (WE'LL USE THIS TO GENERATE THE PRODUCTS ONCE THE FACE IS CLICKED ON)
        d3.select("#product").selectAll("option").remove();
        //    console.log(optionsremove);
            // LOOPING THROUGH THE PRODUCTS TO ADD THEM TO THE DROPDOWN MENU
            for(const foundation in top_foundation) {
                // console.log(`${blush} = ${top_blush[blush]}`);
                var foundationthings = top_foundation[foundation]
                for(const prod in foundationthings) {
                    if (prod == "product") {
                        // console.log(`${prod} = ${foundationthings[prod]}`)
                        var options = d3.select("#product").append("option");
                        options.text(`${foundationthings[prod]}`).attr("value", `${foundationthings[prod]}`)};
                        }
                    }
            })
    });

}

// dropDownListen = document.querySelector("#category");



var blushListen = document.querySelectorAll("[alt='blush']");

for(var i=0; i < blushListen.length; i++){
    blushListen[i].addEventListener("click", function(){
        //alert(`button ${i+1} is working`)
        // console.log("This is working");
        // d3.json("../makeup_data.json").then((data) => {
            // console.log(data);
        // });
        var image =  document.querySelector("div#face img");
        image.src = "static/images/blush.png";
    
        topPriceBlush();
        topRatingBlush();
        d3.select("#category").attr("disabled", null);
        d3.select("#product").attr("disabled", null);
        d3.select("#top_price").attr("hidden", null);
        d3.select("#top_rating").attr("hidden", null);
    
        d3.json("makeup_data.json").then((data) => {
              
            // console.log(data)
    
            //FOR TESTING PURPOSES ONLY
            var top_blush = data["top10_blush_price.csv"];
            // console.log(top_blush)
    
    
            //FOR DROPDOWN MENU (WE'LL USE THIS TO GENERATE THE PRODUCTS ONCE THE FACE IS CLICKED ON)
            d3.select("#product").selectAll("option").remove();
    
            // LOOPING THROUGH THE PRODUCTS TO ADD THEM TO THE DROPDOWN
            for(const blush in top_blush) {
                // console.log(`${blush} = ${top_blush[blush]}`);
                var blushthings = top_blush[blush]
                for(const prod in blushthings) {
                    if (prod == "product") {
                        // console.log(`${prod} = ${blushthings[prod]}`)
                        var options = d3.select("#product").append("option");
                        options.text(`${blushthings[prod]}`).attr("value", `${blushthings[prod]}`);
                    }
                }
            }
        })
    });

}


// function eyeshadow(){
//     var eyeshadow = document.querySelectorAll("[alt='eyeshadow']");

// };

var eyeshadowListen = document.querySelectorAll("[alt='eyeshadow']");

for(var i=0; i < eyeshadowListen.length; i++){
    eyeshadowListen[i].addEventListener("click", function(){
        // console.log("This is working");
        // d3.json("../makeup_data.json").then((data) => {
            // console.log(data);
        // });
        var image =  document.querySelector("div#face img");
        image.src = "static/images/eyeshadow.png";
    
        topPriceEyeshadow();
        topRatingEyeshadow();
        d3.select("#category").attr("disabled", null);
        d3.select("#product").attr("disabled", null);
        d3.select("#top_price").attr("hidden", null);
        d3.select("#top_rating").attr("hidden", null);
    
        d3.json("makeup_data.json").then((data) => {
              
            // console.log(data)
    
            //FOR TESTING PURPOSES ONLY
            var top_eyeshadow = data["top10_eyeshadow_price.csv"];
            // console.log(top_blush)
    
    
            //FOR DROPDOWN MENU (WE'LL USE THIS TO GENERATE THE PRODUCTS ONCE THE FACE IS CLICKED ON)
            d3.select("#product").selectAll("option").remove();
    
            // LOOPING THROUGH THE PRODUCTS TO ADD THEM TO THE DROPDOWN MENU
            for(const eyeshadow in top_eyeshadow) {
                // console.log(`${blush} = ${top_blush[blush]}`);
                var eyeshadowthings = top_eyeshadow[eyeshadow]
                for(const prod in eyeshadowthings) {
                    if (prod == "product") {
                        // console.log(`${prod} = ${eyeshadowthings[prod]}`)
                        var options = d3.select("#product").append("option");
                        options.text(`${eyeshadowthings[prod]}`).attr("value", `${eyeshadowthings[prod]}`);
                    }
                }
            }
        })
    });
    

}


// function eyeliner(){
//     var eyeliner = document.querySelectorAll("[alt='eyeliner']");

// }

var eyelinerListen = document.querySelectorAll("[alt='eyeliner']");
// var eyelinerListen = d3.select("[alt = 'eyeliner']").node();

for(var i=0; i < eyelinerListen.length; i++){
    eyelinerListen[i].addEventListener("click", function(){
        // alert("you clicked on the eyeliner")
        // console.log("This is working");
        // d3.json("../makeup_data.json").then((data) => {
            // console.log(data);
        // });
        var image =  document.querySelector("div#face img");
        image.src = "../static/images/eyeliner.png";
    
        topPriceEyeliner();
        topRatingEyeliner();
        d3.select("#category").attr("disabled", null);
        d3.select("#product").attr("disabled", null);
        d3.select("#top_price").attr("hidden", null);
        d3.select("#top_rating").attr("hidden", null);
    
        d3.json("makeup_data.json").then((data) => {
            
            // console.log(data)
    
            //FOR TESTING PURPOSES ONLY
            var top_eyeliner = data["top10_eyeliner_price.csv"];
            // console.log(top_blush)
    
    
            //FOR DROPDOWN MENU (WE'LL USE THIS TO GENERATE THE PRODUCTS ONCE THE FACE IS CLICKED ON)
            d3.select("#product").selectAll("option").remove();
            
    
            // LOOPING THROUGH THE PRODUCTS TO ADD THEM TO THE DROPDOWN MENU
            for(const eyeliner in top_eyeliner) {
                // console.log(`${blush} = ${top_blush[blush]}`);
                var eyelinerthings = top_eyeliner[eyeliner]
                for(const prod in eyelinerthings) {
                    if (prod == "product") {
                        // console.log(`${prod} = ${eyelinerthings[prod]}`)
                        var options = d3.select("#product").append("option");
                        options.text(`${eyelinerthings[prod]}`).attr("value", `${eyelinerthings[prod]}`);
                    }
                }
            }
        })
    });

}




function optionChanged(el){

    // 

    d3.json("makeup_data.json").then((data) => {
    
        let product = d3.select("#product_name");
        d3.select("#product_name").html(" ");
        for(const e in data){
            
            var prodInfo = data[e];
            for(const info in prodInfo){
                
                var infoLabel = prodInfo[info]
                for(const tableInfo in infoLabel){
                    
                    if (infoLabel[tableInfo] == el){
                        product.append("h3").text("Product: " + infoLabel.product);
                        // product.append("br")
                        product.append("h4").text("Brand: " + infoLabel.brand); 
                        // product.append("br");
                        product.append("h4").text("Price: " + infoLabel.price);
                        // product.append("br");
                        product.append("h4").text("Rating: " + infoLabel.rating);
                        // product.append("br");
                        product.append("a").attr("href", infoLabel.url).attr("target","_blank").text("Where to buy");

                        
                        var labelRating = infoLabel.rating;
                        var location = d3.select('#product_rating')
                        location.selectAll("img").remove();
                        
                        if(infoLabel.product_type == "foundation") {
                            for (var x = 0; x < labelRating ; x++) {
                                location.append("img").attr("src",'../static/images/fenty_foundation.png' ).attr("width", 100);
                            }
                        }

                        if(infoLabel.product_type == "blush") {
                            for (var x = 0; x < labelRating ; x++) {
                                location.append("img").attr("src",'../static/images/fenty_blush.png' ).attr("width", 125);
                            }
                        }

                        if(infoLabel.product_type == "eyeliner") {
                            for (var x = 0; x < labelRating ; x++) {
                                location.append("img").attr("src",'../static/images/fenty_eyeliner.png' ).attr("height", 125);
                            }
                        }

                        if(infoLabel.product_type == "eyeshadow") {
                            for (var x = 0; x < labelRating ; x++) {
                                location.append("img").attr("src",'../static/images/fenty_eyeshadow.png' ).attr("width", 125);
                            }
                        }
                    }
                }

            };
        }
    })
};