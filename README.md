# [Beauty Discovery Tool](https://beauty-application.herokuapp.com/) 

## Project Proposal

Our group set out to create a dynamic, user-interactive beauty discovery tool. We incorporated the data from the previous [ETL project](https://github.com/nawdah/cosmetics-proj), where we webscraped Sephora and Ulta websites and created a dataframe that included the product name, brand, price, rating, ingredients, and where you can find the item. We primarily used JavaScript, specifically p5.js, d3.js, and Plotly.js to construct the interactivity of this application, a Flask component for the API, Postgres SQL for our database, and Python to clean up the dataframe. 

## Backend

Since we had performed the extraction of data prior to this project, we imported our csv files to Python and cleaned up the data so that it would be ready to load into Postgres. Once the code was loaded up, we used pg8000 to allow us to write SQL queries that would be pertinent for the performance of this application. Within these queries, we dropped products we weren't using. Given the time constraint for this project, we limited our application to just **foundation, blush, eyeshadow, and eyeliner**. Once the finalized databases were created we exported our new data into csv files that we would later call in for our Flask.

Our backend component was completed once we used Flask to convert our csv files into a json file using *jsonify*. Using the json file, called *makeup_data.json*, we were able to create the interactive components of our project. 

## Frontend 

In order to start, we needed to construct a frame work for where all of our visualizations would go. Our HTML linked our CSS and JS files together, as well as any extra dependencies, such as Bootstrap, p5, d3, and different fonts. The first row we designated for the title and description. We also attached a button that would instruct the user on how to interact with the interface. 


