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

    const categories = ["Foundation","Blush", "Eyeliner", "Eyeshadow"]

    categories.forEach((obj) => {
            var options = d3.select("#category").append("option");
            options.text(`${obj}`).attr("value", `${obj}`);
        }) 

    var sound = d3.select("#sound").node()
    sound.addEventListener("click", function() {
        speech();
    })

    d3.json("../makeup_data.json").then((data) => {
        
        
        // console.log(data)
        //FOR DROPDOWN MENU (WE'LL USE THIS TO GENERATE THE CATEGORIES ONCE THE FACE IS CLICKED ON)
        var top_blush = data["top10_blush_price.csv"];
        // console.log(top_blush)
        var bottom_blush = data[2];
        var top_blush_rating = data[9];


        //FOR DROPDOWN MENU (WE'LL USE THIS TO GENERATE THE PRODUCTS ONCE THE FACE IS CLICKED ON)
        for(const blush in top_blush) {
            // console.log(`${blush} = ${top_blush[blush]}`);
            var blushthings = top_blush[blush]
            for(const prod in blushthings) {
                if (prod == "product") {
                    console.log(`${prod} = ${blushthings[prod]}`)
                    var options = d3.select("#product").append("option");
                    options.text(`${blushthings[prod]}`).attr("value", `${blushthings[prod]}`);
                }
            }
        }

        //RATING VISUALIZATION PLOT
        var trace1 = {
            x: [],
            y: [],
            type: "bar",
            orientation: "h",
            name: "Product Rating"
        };
        
        // Create the data array for the plot
        var data = [trace1];
        
        // Define the plot layout
        var layout = {
            title: "Product Rating",
            xaxis: { title: "Rating" },
        };
        
        // Plot the chart to a div tag with id "plot"
        Plotly.newPlot("product_rating", data, layout);
        d3.select("#product_rating").attr("hidden", true);

         //TOP PRICE VISUALIZATION PLOT
         var trace2 = {
            x: [],
            y: [],
         text: [],
         name: "OTUs",
         type: "bar",
         orientation: "h"
       };
 
       var chartData = [trace2]
       
       var layout = {
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
         name: "OTUs",
         type: "bar",
         orientation: "h"
       };
 
       var chartData = [trace3]
       
       var layout = {
         title: "Top 10 Products by Rating"
       };
        
        // Plot the chart to a div tag with id "plot"
        Plotly.newPlot("top_rating", chartData, layout);
        d3.select("#top_rating").attr("hidden", true);


    });
    // speech();
};
init();

// speech();
// init();

//queryselectorall is an array so would need to do a for loop to iterate

function foundation(){
    var foundation = document.querySelector("[alt='foundation']");

    foundation.addEventListener("click", function(){
        d3.json('../makeup_data.json', function(data){
            console.log(data);
        });

    })

;}

function blush(){
    var blush = document.querySelectorAll("[alt='blush']");

    for(const blush in top_blush) {
        // console.log(`${blush} = ${top_blush[blush]}`);
        var blushthings = top_blush[blush]
        for(const prod in blushthings) {
            if (prod == "product") {
                console.log(`${prod} = ${blushthings[prod]}`)
                var options = d3.selectAll("option");
                options.text(`${blushthings[prod]}`).attr("value", `${blushthings[prod]}`);
            }
        }
    }
    

};

function eyeshadow(){
    var eyeshadow = document.querySelectorAll("[alt='eyeshadow']");

};

function eyeliner(){
    var eyeliner = document.querySelectorAll("[alt='eyeliner']");

}
