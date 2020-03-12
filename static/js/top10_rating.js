// Top 10 Rating Fucntions //

function topRatingBlush(){
    d3.json("../makeup_data.json").then(function(data) {
        console.log(data)

        var top_blush_rating = data["top10_blush_rating.csv"];
        console.log(top_blush_rating)

        
        var blush = d3.selectAll("[alt='blush']");
        
        // Create Empty Arrays (to build chart)
        var makeup_rating = []
        var product_name = []
        var brand_name = []

        //Loop through JSON objects to extract values and append/push to empty arrays

        for(const blush in top_blush_rating) {
            var blush_prod_rating = top_blush_rating[blush]
            for(const rating in blush_prod_rating) {
                if (rating == "rating") {
                    console.log(`${rating} = ${blush_prod_rating[rating]}`)
                    makeup_rating.push(blush_prod_rating[rating])
                }
            }
            for(const name in blush_prod_rating) {
                if (name == "product") {
                    console.log(`${name} = ${blush_prod_rating[name]}`)
                    product_name.push(blush_prod_rating[name])
                }
            }
            for(const brand in blush_prod_rating) {
                if (brand == "brand") {
                    console.log(`${brand} = ${blush_prod_rating[brand]}`)
                    brand_name.push(blush_prod_rating[brand])
                }
            }
        }

        // Build Plot

        var trace1 = {
            x: makeup_rating,
            y: product_name,
         text: brand_name,
         name: "Blush",
         type: "bar",
         orientation: "h"
       };
 
       var chartData = [trace1]
       
       var layout = {
         title: "Top 10 Products by Rating"
       };

       Plotly.restyle("top_rating", "x", [x]);
       Plotly.restyle("top_rating", "y", [y]);
       Plotly.restyle("top_rating", "text", [text]);


})};

topRatingBlush();

// Top 10 Foundation by Price Function //
// Note: For some reason this is not in descending order//

function topRatingFoundation(){
    d3.json("../makeup_data.json").then(function(data) {
        console.log(data)

        var top_foundation_rating = data["top10_foundation_rating.csv"];
        console.log(top_foundation_rating)

        var foundation = d3.select("[alt='foundation']");
       
        // Create Empty Arrays (to build chart)

        var makeup_rating = []
        var product_name = []
        var brand_name = []

        //Loop through JSON objects to extract values and append/push to empty arrays

        for(const f in top_foundation_rating) {
            var foundation_prod_rating = top_foundation_rating[f]
            // console.log(foundation_prod_price)
            for(const rating in foundation_prod_rating) {
                if (rating == "rating") {
                    console.log(`${rating} = ${foundation_prod_rating[rating]}`)
                    makeup_rating.push(foundation_prod_rating[rating])
                }
            }
            for(const name in foundation_prod_rating) {
                if (name == "product") {
                    console.log(`${name} = ${foundation_prod_rating[name]}`)
                    product_name.push(foundation_prod_rating[name])
                }
            }
            for(const brand in foundation_prod_rating) {
                if (brand == "brand") {
                    console.log(`${brand} = ${foundation_prod_rating[brand]}`)
                    brand_name.push(foundation_prod_rating[brand])
                }
            }
        }

        // Build Plot

        var trace1 = {
            x: makeup_rating,
            y: product_name,
         text: brand_name,
         name: "Foundation",
         type: "bar",
         orientation: "h"
       };
 
       var chartData = [trace1]
       
       var layout = {
         title: "Top 10 Products by Rating"
       };

       Plotly.restyle("top_rating", "x", [x]);
       Plotly.restyle("top_rating", "y", [y]);
       Plotly.restyle("top_rating", "text", [text]);


})};

topRatingFoundation();

// Top 10 Eyeliner by Price Function //
// Note: For some reason this is not in descending order//


function topRatingEyeliner(){
    d3.json("../makeup_data.json").then(function(data) {
        console.log(data)

        var top_eyeliner_rating = data["top10_eyeliner_rating.csv"];
        console.log(top_eyeliner_rating)

        var eyeliner = d3.selectAll("[alt='eyeliner']");
        
        // Create Empty Arrays (to build chart)

        var makeup_rating = []
        var product_name = []
        var brand_name = []

        //Loop through JSON objects to extract values and append/push to empty arrays

        for(const el in top_eyeliner_rating) {
            var eyeliner_prod_rating = top_eyeliner_rating[el]
            // console.log(foundation_prod_price)
            for(const rating in eyeliner_prod_rating) {
                if (rating == "rating") {
                    console.log(`${rating} = ${eyeliner_prod_rating[rating]}`)
                    makeup_rating.push(eyeliner_prod_rating[rating])
                }
            }
            for(const name in eyeliner_prod_rating) {
                if (name == "product") {
                    console.log(`${name} = ${eyeliner_prod_rating[name]}`)
                    product_name.push(eyeliner_prod_rating[name])
                }
            }
            for(const brand in eyeliner_prod_rating) {
                if (brand == "brand") {
                    console.log(`${brand} = ${eyeliner_prod_rating[brand]}`)
                    brand_name.push(eyeliner_prod_rating[brand])
                }
            }
        }

        // Build Plot

        var trace1 = {
            x: makeup_rating,
            y: product_name,
         text: brand_name,
         name: "Eyeliner",
         type: "bar",
         orientation: "h"
       };
 
       var chartData = [trace1]
       
       var layout = {
         title: "Top 10 Products by Rating"
       };

       Plotly.restyle("top_rating", "x", [x]);
       Plotly.restyle("top_rating", "y", [y]);
       Plotly.restyle("top_rating", "text", [text]);


})};

topPriceEyeliner();

// Top 10 Eyeshadow by Price Function //
// Note: For some reason this is not in descending order//

function topRatingEyeshadow(){
    d3.json("../makeup_data.json").then(function(data) {
        console.log(data)

        var top_eyeshadow_rating = data["top10_eyeshadow_rating.csv"];
        console.log(top_eyeshadow_rating)

        var eyeshadow = d3.selectAll("[alt='eyeshadow']");

        // Create Empty Arrays (to build chart)   

        var makeup_rating = []
        var product_name = []
        var brand_name = []

        //Loop through JSON objects to extract values and append/push to empty arrays

        for(const es in top_eyeshadow_rating) {
            var eyeshadow_prod_rating = top_eyeshadow_rating[es]
            // console.log(foundation_prod_price)
            for(const rating in eyeshadow_prod_rating) {
                if (rating == "rating") {
                    console.log(`${rating} = ${eyeshadow_prod_rating[rating]}`)
                    makeup_rating.push(eyeshadow_prod_rating[rating])
                }
            }
            for(const name in eyeshadow_prod_rating) {
                if (name == "product") {
                    console.log(`${name} = ${eyeshadow_prod_rating[name]}`)
                    product_name.push(eyeshadow_prod_rating[name])
                }
            }
            for(const brand in eyeshadow_prod_rating) {
                if (brand == "brand") {
                    console.log(`${brand} = ${eyeshadow_prod_rating[brand]}`)
                    brand_name.push(eyeshadow_prod_rating[brand])
                }
            }
        }

        // Build Plot

        var trace1 = {
            x: makeup_rating,
            y: product_name,
         text: brand_name,
         name: "Eyeshadow",
         type: "bar",
         orientation: "h"
       };
 
       var chartData = [trace1]
       
       var layout = {
         title: "Top 10 Products by Rating"
       };

       Plotly.restyle("top_price", "x", [x]);
       Plotly.restyle("top_price", "y", [y]);
       Plotly.restyle("top_price", "text", [text]);


})};

topRatingEyeshadow();