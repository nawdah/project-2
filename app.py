from flask import Flask, jsonify
import csv
import json


app = Flask(__name__)

hello_dict = {"Hello": "World!"}

csvpath = ("prod_data/bottom10_blush_price.csv")
jsonfile = open('file.json', 'w')
j_test = "test.json"
data = {}
with open(csvpath, newline='') as csvfile:
    # # CSV reader specifies delimiter and variable that holds contents
    # csvreader = csv.reader(csvfile, delimiter=',')
    # print(csvreader)
    # # Read the header row first (skip this step if there is now header)
    # csv_header = next(csvreader)
    # print(f"CSV Header: {csv_header}")
    # # Read each row of data after the header
    csvreader = csv.DictReader(csvfile)
    for rows in csvreader:
        id = rows['id']
        data[id]=rows
        # json.dump(row, jsonfile)
        # jsonfile.write('\n')
with open(j_test,'w') as json1:
    json1.write(json.dumps(data,indent=4))


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