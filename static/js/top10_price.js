// Top 10 Blush by Price Function //

function topPriceBlush(){
    d3.json("../makeup_data.json").then(function(data) {
        // console.log(data)

        var top_blush_price = data["top10_blush_price.csv"];
        // console.log(top_blush_price)

        
        var blush = d3.selectAll("[alt='blush']");
        
        // Create Empty Arrays (to build chart)
        var makeup_price = []
        var product_name = []
        var brand_name = []

        //Loop through JSON objects to extract values and append/push to empty arrays

        for(const blush in top_blush_price) {
            var blush_prod_price = top_blush_price[blush]
            for(const price in blush_prod_price) {
                if (price == "price") {
                    // console.log(`${price} = ${blush_prod_price[price]}`)
                    makeup_price.push(blush_prod_price[price])
                }
            }
            for(const name in blush_prod_price) {
                if (name == "product") {
                    // console.log(`${name} = ${blush_prod_price[name]}`)
                    product_name.push(blush_prod_price[name])
                }
            }
            for(const brand in blush_prod_price) {
                if (brand == "brand") {
                    // console.log(`${brand} = ${blush_prod_price[brand]}`)
                    brand_name.push(blush_prod_price[brand])
                }
            }
        }

        // Build Plot
//     var trace1 = {
    //         x: makeup_price,
    //         y: product_name,
    //      text: brand_name,
    //      name: "Eyeshadow",
    //      type: "bar",
    //      orientation: "h"
    //    };
 
    //    var chartData = [trace1]
       
    //    var layout = {
    //      title: "Top 10 Products by Rating"
    //    };

       Plotly.restyle("top_price", "x", [makeup_price]);
       Plotly.restyle("top_price", "y", [product_name]);
       Plotly.restyle("top_price", "text", [brand_name]);
       Plotly.restyle("top_price", "name", "Blush");


})};

topPriceBlush();

// Top 10 Foundation by Price Function //

function topPriceFoundation(){
    d3.json("../makeup_data.json").then(function(data) {
        // console.log(data)

        var top_foundation_price = data["top10_foundation_price.csv"];
        // console.log(top_foundation_price)

        var foundation = document.querySelector("[alt='foundation']");
       
        // Create Empty Arrays (to build chart)

        var makeup_price = []
        var product_name = []
        var brand_name = []

        //Loop through JSON objects to extract values and append/push to empty arrays

        for(const f in top_foundation_price) {
            var foundation_prod_price = top_foundation_price[f]
            // console.log(foundation_prod_price)
            for(const price in foundation_prod_price) {
                if (price == "price") {
                    // console.log(`${price} = ${foundation_prod_price[price]}`)
                    makeup_price.push(foundation_prod_price[price])
                }
            }
            for(const name in foundation_prod_price) {
                if (name == "product") {
                    // console.log(`${name} = ${foundation_prod_price[name]}`)
                    product_name.push(foundation_prod_price[name])
                }
            }
            for(const brand in foundation_prod_price) {
                if (brand == "brand") {
                    // console.log(`${brand} = ${foundation_prod_price[brand]}`)
                    brand_name.push(foundation_prod_price[brand])
                }
            }
        }

        // Build Plot

    //     var trace1 = {
    //         x: makeup_price,
    //         y: product_name,
    //      text: brand_name,
    //      name: "Eyeshadow",
    //      type: "bar",
    //      orientation: "h"
    //    };
 
    //    var chartData = [trace1]
       
    //    var layout = {
    //      title: "Top 10 Products by Rating"
    //    };

       Plotly.restyle("top_price", "x", [makeup_price]);
       Plotly.restyle("top_price", "y", [product_name]);
       Plotly.restyle("top_price", "text", [brand_name]);
       Plotly.restyle("top_price", "name", "Foundation");


})};

topPriceFoundation();

// Top 10 Eyeliner by Price Function //

function topPriceEyeliner(){
    d3.json("../makeup_data.json").then(function(data) {
        // console.log(data)

        var top_eyeliner_price = data["top10_eyeliner_price.csv"];
        // console.log(top_eyeliner_price)

        var eyeliner = d3.selectAll("[alt='eyeliner']");
        
        // Create Empty Arrays (to build chart)

        var makeup_price = []
        var product_name = []
        var brand_name = []

        //Loop through JSON objects to extract values and append/push to empty arrays

        for(const el in top_eyeliner_price) {
            var eyeliner_prod_price = top_eyeliner_price[el]
            // console.log(foundation_prod_price)
            for(const price in eyeliner_prod_price) {
                if (price == "price") {
                    // console.log(`${price} = ${eyeliner_prod_price[price]}`)
                    makeup_price.push(eyeliner_prod_price[price])
                }
            }
            for(const name in eyeliner_prod_price) {
                if (name == "product") {
                    // console.log(`${name} = ${eyeliner_prod_price[name]}`)
                    product_name.push(eyeliner_prod_price[name])
                }
            }
            for(const brand in eyeliner_prod_price) {
                if (brand == "brand") {
                    // console.log(`${brand} = ${eyeliner_prod_price[brand]}`)
                    brand_name.push(eyeliner_prod_price[brand])
                }
            }
        }

        // Build Plot

            //     var trace1 = {
    //         x: makeup_price,
    //         y: product_name,
    //      text: brand_name,
    //      name: "Eyeshadow",
    //      type: "bar",
    //      orientation: "h"
    //    };
 
    //    var chartData = [trace1]
       
    //    var layout = {
    //      title: "Top 10 Products by Rating"
    //    };

       Plotly.restyle("top_price", "x", [makeup_price]);
       Plotly.restyle("top_price", "y", [product_name]);
       Plotly.restyle("top_price", "text", [brand_name]);
       Plotly.restyle("top_price", "name", "Eyeliner");


})};

topPriceEyeliner();

// Top 10 Eyeshadow by Price Function //

function topPriceEyeshadow(){
    d3.json("../makeup_data.json").then(function(data) {
        // console.log(data)

        var top_eyeshadow_price = data["top10_eyeshadow_price.csv"];
        // console.log(top_eyeshadow_price)

        var eyeshadow = d3.selectAll("[alt='eyeshadow']");

        // Create Empty Arrays (to build chart)   

        var makeup_price = []
        var product_name = []
        var brand_name = []

        //Loop through JSON objects to extract values and append/push to empty arrays

        for(const es in top_eyeshadow_price) {
            var eyeshadow_prod_price = top_eyeshadow_price[es]
            // console.log(foundation_prod_price)
            for(const price in eyeshadow_prod_price) {
                if (price == "price") {
                    // console.log(`${price} = ${eyeshadow_prod_price[price]}`)
                    makeup_price.push(eyeshadow_prod_price[price])
                }
            }
            for(const name in eyeshadow_prod_price) {
                if (name == "product") {
                    // console.log(`${name} = ${eyeshadow_prod_price[name]}`)
                    product_name.push(eyeshadow_prod_price[name])
                }
            }
            for(const brand in eyeshadow_prod_price) {
                if (brand == "brand") {
                    // console.log(`${brand} = ${eyeshadow_prod_price[brand]}`)
                    brand_name.push(eyeshadow_prod_price[brand])
                }
            }
        }

        // Build Plot

    //     var trace1 = {
    //         x: makeup_price,
    //         y: product_name,
    //      text: brand_name,
    //      name: "Eyeshadow",
    //      type: "bar",
    //      orientation: "h"
    //    };
 
    //    var chartData = [trace1]
       
    //    var layout = {
    //      title: "Top 10 Products by Rating"
    //    };

       Plotly.restyle("top_price", "x", [makeup_price]);
       Plotly.restyle("top_price", "y", [product_name]);
       Plotly.restyle("top_price", "text", [brand_name]);
       Plotly.restyle("top_price", "name", "Eyeshadow");


})};

topPriceEyeshadow();