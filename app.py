from flask import Flask, jsonify
import csv
import json
import os


app = Flask(__name__)

#Access the Production Data directory (prod_data)
prod_path = os.listdir("prod_data")
file_names = []

#Loop through prod_data directory and append CSV name to empty list
for filename in prod_path:
    if filename.endswith(".csv"):
        file_names.append(filename)
print(file_names)

#Create JSON file which will hold all data from CSVs
json_makeupdata = "makeup_data.json"

#Create empty dictionary which will store all of the (key, value) data from the CSVs
data = {}

#For loop which loops through file name list, each CSV file + rows, writes to JSON file
for x in file_names:
    csvpath = (f'prod_data/{x}')

    data[x] = {}

#Loop through each CSV    
    with open(csvpath, newline='') as csvfile:
        csvreader = csv.DictReader(csvfile)
        for rows in csvreader:
            id = rows['index']
            data[x][id] = rows
            # print(rows)
            # print(data)

#Write CSV data to consolidated JSON file
    with open(json_makeupdata,'w') as json1:
        json1.write(json.dumps(data,indent=4))

print(data)

@app.route("/")
def home():
    return "Hi mannn"


@app.route("/normal")
def normal():
    return hello_dict


@app.route("/jsonified")
def jsonified():
    return jsonify(hello_dict)


if __name__ == "__main__":
    app.run(debug=True)