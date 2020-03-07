from flask import Flask, jsonify
import csv
import json
import os


app = Flask(__name__)

prod_path = os.listdir("prod_data")
file_names = []

for filename in prod_path:
    if filename.endswith(".csv"):
        file_names.append(filename)
print(file_names)

j_test = "test.json"
data = {}
for x in file_names:
    csvpath = (f'prod_data/{x}')
    # jsonfile = open('file.json', 'w')
    # j_test = "test.json"

    data[x] = {}
    # data = []
    with open(csvpath, newline='') as csvfile:
        csvreader = csv.DictReader(csvfile)
        for rows in csvreader:
            id = rows['index']
            # data.append(rows)
            data[x][id] = rows
            # print(rows)
            # print(data)

    with open(j_test,'w') as json1:
        json1.write(json.dumps(data,indent=4))

print(data)

# reader = csv.DictReader(csv,fields)
# for row in reader:
#     json.dump(row,jsonFile)
#     jsonfile.write('\n')

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