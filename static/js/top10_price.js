function topPriceBlush(){
    d3.json("../makeup_data.json").then(function(data) {
        console.log(data)

        var top_blush_price = data["top10_blush_price.csv"];
        console.log(top_blush_price)

        // var foundation = d3.select("[alt='foundation']");
        // var eyeliner = d3.selectAll("[alt='eyeliner']");
        var blush = d3.selectAll("[alt='eyeliner']");
        // var eyeshadow = d3.selectAll("[alt='eyeliner']");

        var blush_price = []
        var product_name = []//"product"
        var brand_name = []

        for(const blush in top_blush_price) {
            var blush_prod_price = top_blush_price[blush]
            for(const price in blush_prod_price) {
                if (price == "price") {
                    console.log(`${price} = ${blush_prod_price[price]}`)
                    blush_price.push(blush_prod_price[price])
                }
            }
            for(const name in blush_prod_price) {
                if (name == "product") {
                    console.log(`${name} = ${blush_prod_price[name]}`)
                    product_name.push(blush_prod_price[name])
                }
            }
            for(const brand in blush_prod_price) {
                if (brand == "brand") {
                    console.log(`${brand} = ${blush_prod_price[brand]}`)
                    brand_name.push(blush_prod_price[brand])
                }
            }
        }

        var trace1 = {
            x: blush_price,
            y: brand_name,
         text: product_name,
         name: "OTUs",
         type: "bar",
         orientation: "h"
       };
 
       var chartData = [trace1]
       
       var layout = {
         title: "Top 10 Products by Price"
       };

       Plotly.restyle("top_price", "x", [x]);
       Plotly.restyle("top_price", "y", [y]);
       Plotly.restyle("top_price", "text", [text]);


})};

topPriceBlush();