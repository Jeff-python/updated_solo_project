from flask import Flask, jsonify, request
# from models import User
# from models import Listing
import sqlite3
from flask_cors import CORS
from .listing import Listing
from .user import User


app = Flask(__name__)
CORS(app)

# register a new user
@app.route('/api/register', methods=["POST"])
def add_user():
    data = request.get_json()
    new_user = User(data['firstname'], data['lastname'], data['username'], data['email'], data['password'])
    new_user.set_key()
    new_user.insert()
    return jsonify({"status":"Success"})

# update user login info
@app.route('/api/update', methods=["POST"])
def update_user():
    data = request.get_json()
    new_register = User(data['firstname'], data['lastname'], data['username'], data['email'], data['password'])
    new_register.insert()
    return jsonify({"status":"Success"})

# login an user
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    user_key = User.login(data['username'],data['password'])
    if user_key:
        return jsonify({"status": "success", "token": user_key})
    return jsonify({"status": "login failed", "token": None})

# add listing
@app.route('/api/add', methods=["POST"])
def add_listing():
    data = request.get_json()
    new_listing = Listing(
                data["description"],
                data["discountrate"],
                data["retailprice"],
                data["reserveprice"],
                data["expirationdate"],
                data["quantity"],
                data["contactname"],
                data["telephonenumber"],
                data["pickuplocation"],
                data["zipcode"],
                data["user_key"])
    new_listing.insert()
    return jsonify({"status":"Succes"})

@app.route('/api/buy', methods=["POST"])
def buy():
    data = request.get_json()
    account = User.authenticate(data['user_key'])
    if account:
        listing = Listing.select_one(data['item_id'])
        listing.quantity -= data['quantity']
        listing.update()
        return jsonify({"status":"success"})

@app.route('/api/get', methods=["GET"])
def return_listings():
    listings = Listing.get_listings()
    return jsonify({"data":listings})


if __name__=="__main__":
    app.run(debug=True)



    

  












