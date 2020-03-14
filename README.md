# [Beauty Discovery Tool](https://beauty-application.herokuapp.com/) 

## Project Proposal

Our group set out to create a dynamic, user-interactive beauty discovery tool. We incorporated the data from the previous [ETL project](https://github.com/nawdah/cosmetics-proj), where we webscraped Sephora and Ulta websites and created a dataframe that included the product name, brand, price, rating, ingredients, and where you can find the item. We primarily used JavaScript, specifically p5.js, d3.js, and Plotly.js to construct the interactivity of this application, a Flask component for the API, Postgres SQL for our database, and Python to clean up the dataframe. 

## Backend

Since we had performed the extraction of data prior to this project, we imported our csv files to Python and cleaned up the data so that it would be ready to load into Postgres. Once the code was loaded up, we used pg8000 to allow us to write SQL queries that would be pertinent for the performance of this application. Within these queries, we dropped products we weren't using. Given the time constraint for this project, we limited our application to just **foundation, blush, eyeshadow, and eyeliner**. Once the finalized databases were created we exported our new data into csv files that we would later call in for our Flask.

Our backend component was completed once we used Flask to convert our csv files into a json file using *jsonify*. Using the json file, called *makeup_data.json*, we were able to create the interactive components of our project. 

## Frontend 

In order to start, we needed to construct a frame work for where all of our visualizations would go. Our HTML linked our CSS and JS files together, as well as any extra dependencies, such as Bootstrap, p5, d3, and different fonts. The first row we designated for the title and description. We also attached a button that would instruct the user on how to interact with the interface. 

![voices](https://github.com/nawdah/project-2/blob/master/static/images/voice.gif)

To get a voice activated button, we used the p5 library, specifically the speak() function. 

Once the button is pressed, a voice is activated that says "Please click a part of the face." For our entertainment, we made the voice a UK female accent. If we follow instructions and click the face, the face image changes and triggers an event listener that populates the bottom of the page with some graphs. 

![faceclick](https://github.com/nawdah/project-2/blob/master/static/images/click_for_instructions.gif)

To the right we have a drop down menu that helps users pick out specific products per category. We also included a direct link to purchase the product if the user wishes. 

![dropdown](https://github.com/nawdah/project-2/blob/master/static/images/drop_down.gif)

We coded a facemap on the initial face chart so that when you click it, it'll produce info based on each product type. Here you can see the switching per category.

![faces](https://github.com/nawdah/project-2/blob/master/static/images/faces.gif)

Our plots were created used d3, plotly, and JS features across a few different JS files. Each file had it's specific purposed, given by the name of the file. 

## Final Thoughts

Given the timeframe, we had to scale back on many features. In a future update, we want to populate a column that would showcase the product ratings using a dynamic visualization. We'd also like to incorporate more products in the face chart for a wide range of selection. Finally, we'd also like the application to take in user input of allergies, skin type, and/or hair type and then give a more curated selection. 


