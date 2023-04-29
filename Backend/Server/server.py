from flask import Flask, jsonify
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/api/dogs')
def get_dogs():
    with open('dogs.json', 'r') as f:
        dogs_data = json.load(f)

    dogs_data['dogs'] = [dog for dog in dogs_data['dogs'] if not (
        dog.get('adopted', False) and dog.get('commented_out', False))]

    return jsonify(dogs_data)


@app.route('/api/dogs/<int:petID>')
def get_dog(petID):
    with open('dogs.json', 'r') as f:
        dogs_data = json.load(f)
    for dog in dogs_data['dogs']:
        if dog['petID'] == petID:
            return jsonify(dog)


@app.route('/api/dogs/<int:petID>/adopt', methods=["POST"])
def adopt_dog(petID):
    try:
        with open("dogs.json", 'r+') as f:
            dogs_data = json.load(f)
            for dog in dogs_data['dogs']:
                if dog["petID"] == petID:
                    dog['adopted'] = True
                    dog['commented_out'] = True
                    break
            f.seek(0)
            json.dump(dogs_data, f, indent=2)
            f.truncate()
        return jsonify({'message': 'Dog adopted successfully!'})
    except Exception as e:
        return jsonify({'message': 'An error occurred: ' + str(e)})


if __name__ == '__main__':
    app.run(debug=True)
