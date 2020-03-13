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
        var trace1 = {
            x: [],
            y: [],
            type: "bar",
            name: "Empty",
            orientation: "h",
            name: "Product Rating"
        };
        
        // Create the data array for the plot
        var data = [trace1];
        
        // Define the plot layout
        var layout = {
            title: "Product Rating",
        };
        
        // Plot the chart to a div tag with id "plot"
        Plotly.newPlot("product_rating", data, layout);
        d3.select("#product_rating").attr("hidden", true);

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

var foundationListen = document.querySelector("[alt='foundation']");

foundationListen.addEventListener("click", function(){
    // console.log("This is working");
    // d3.json("../makeup_data.json").then((data) => {
        // console.log(data);
    // });
    var image =  document.querySelector("div#face img");
    image.src = "../static/images/foundation.png";

    topPriceFoundation();
    topRatingFoundation()
    d3.select("#category").attr("disabled", null);
    d3.select("#product").attr("disabled", null);
    d3.select("#top_price").attr("hidden", null);
    d3.select("#top_rating").attr("hidden", null);

    d3.json("../makeup_data.json").then((data) => {
          
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

dropDownListen = document.querySelector("#category");

// function blush(){
//     var blush = document.querySelectorAll("[alt='blush']");

//     for(const blush in top_blush) {
//         // console.log(`${blush} = ${top_blush[blush]}`);
//         var blushthings = top_blush[blush]
//         for(const prod in blushthings) {
//             if (prod == "product") {
//                 console.log(`${prod} = ${blushthings[prod]}`)
//                 var options = d3.selectAll("option");
//                 options.text(`${blushthings[prod]}`).attr("value", `${blushthings[prod]}`);
//             }
//         }
//     }
// };

var blushListen = document.querySelector("[alt='blush']");

blushListen.addEventListener("click", function(){
    // console.log("This is working");
    // d3.json("../makeup_data.json").then((data) => {
        // console.log(data);
    // });
    var image =  document.querySelector("div#face img");
    image.src = "../static/images/blush.png";

    topPriceBlush();
    topRatingBlush();
    d3.select("#category").attr("disabled", null);
    d3.select("#product").attr("disabled", null);
    d3.select("#top_price").attr("hidden", null);
    d3.select("#top_rating").attr("hidden", null);

    d3.json("../makeup_data.json").then((data) => {
          
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

function eyeshadow(){
    var eyeshadow = document.querySelectorAll("[alt='eyeshadow']");

};

var eyeshadowListen = document.querySelector("[alt='eyeshadow']");

eyeshadowListen.addEventListener("click", function(){
    // console.log("This is working");
    // d3.json("../makeup_data.json").then((data) => {
        // console.log(data);
    // });
    var image =  document.querySelector("div#face img");
    image.src = "../static/images/eyeshadow.png";

    topPriceEyeshadow();
    topRatingEyeshadow();
    d3.select("#category").attr("disabled", null);
    d3.select("#product").attr("disabled", null);
    d3.select("#top_price").attr("hidden", null);
    d3.select("#top_rating").attr("hidden", null);

    d3.json("../makeup_data.json").then((data) => {
          
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

function eyeliner(){
    var eyeliner = document.querySelectorAll("[alt='eyeliner']");

}

var eyelinerListen = document.querySelector("[alt='eyeliner']");
// var eyelinerListen = d3.select("[alt = 'eyeliner']").node();

eyelinerListen.addEventListener("click", function(){
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

    d3.json("../makeup_data.json").then((data) => {
          
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
