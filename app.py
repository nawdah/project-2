#Below Code from Web Scraping HW -- Tailor for project
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import psycopg2

# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
# mongo = PyMongo(app, uri="mongodb://localhost:27017/mars_app")
	
conn = psycopg2.connect("dbname=suppliers user=postgres password=postgres")

# Run queries and save results (This is where our top 10 filters will go)



# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Find one record of data from the mongo database
    mars = mongo.db.mars.find_one()
    # Return template and data
    return render_template("index.html", mars=mars)


# Route that will trigger the scrape function

@app.route("/scrape")
def scrape():


    mars = mongo.db.mars
    # Run the scrape function
    mars_data = scrape_marsDB.scrape_test()

    # Update the Mongo database using update and upsert=True
    mars.update({}, mars_data, upsert=True)

    # Redirect back to home page
    return redirect("/", code=302)


if __name__ == "__main__":
    app.run(debug=True)