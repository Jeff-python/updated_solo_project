from flask import Flask, jsonify, request
import requests
# from models import User
# from models import Listing
import sqlite3
from flask_cors import CORS
from .listing import Listing
from .user import User
import os
import base64   
from PIL import Image
import glob


app = Flask(__name__)
APP_ROOT = os.path.dirname(os.path.abspath(__file__))
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
                data["user_key"],
                data["imagepath"])
    new_listing.insert()
    return jsonify({"status":"Succes"})

@app.route('/api/buy', methods=["POST"])
def buy():
    data = request.get_json()
    account = User.authenticate(data['user_key'])
    print(data)
    if account:
        listing = Listing.select_one(data['item_id'])
        listing.quantity -= data['quantity']
        print(listing.pk, listing.quantity, listing.expirationdate)
        listing.update()
        return jsonify({"status":"success"})

# @app.route('/api/get', methods=["GET"])
# def return_listings():
#     listings = Listing.get_listings()
#     data = request.get_json()
#     account = User.authenticate(data['user_key'])
#     if account:
#         return jsonify({"data":listings})

# @app.route('/api/get', methods=["GET"])
# def return_listings():
#     listings = Listing.get_listings()
#     return jsonify({"data":listings})

@app.route('/api/listings/<user_key>', methods=["GET"])
def return_listings(user_key):
   
    listings = Listing.select(user_key)
    print(user_key)
    return jsonify({"data":listings})

@app.route('/api/getitems', methods=["GET"])
def get_listings():
    listings = Listing.get_listings()
    return jsonify({"data":listings})
    


# @app.route('/<ticker>', methods=["GET"])
# def quote(ticker):
#     url = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol={}'
#     response = requests.get(url.format(ticker))
#     data = response.json()
   
    # return jsonify({"price":data['LastPrice'], "name":data["Name"], "symbol":data["Symbol"]}





@app.route("/upload", methods=['POST'])
def upload():
    # target = os.path.join(APP_ROOT, 'file_images')
    # print(target)
    # print(request.data)
    # print(type(request.data))
    # print(request.files)
    pic = str(request.data)
    new = pic.split(',')
    # print(type(new))
    # print(new)
    new = new[1]
    new = new.encode('utf-8')
    
    i = 0
    print(glob.glob('/Users/jeffreyzheng/byte_academy/phase2/p4_0/backend/*.png'))
    if len(glob.glob('/Users/jeffreyzheng/byte_academy/phase2/p4_0/backend/*.png')) > 0:
        

    # if '{}.png'.format(i+1) in glob.glob('/Users/jeffreyzheng/byte_academy/phase2/p10_material_ui/backend/*.png'):
        i= len(glob.glob('/Users/jeffreyzheng/byte_academy/phase2/p4_0/backend/*.png'))+1
        print(len(glob.glob('/Users/jeffreyzheng/byte_academy/phase2/p4_0/backend/*.png')))
    else:
        i=0
   
    with open('{}.png'.format(i+1), 'wb') as file_to_save:
        decoded_image_data = base64.decodebytes(new)
        # destination = "/".join([target, decoded_image_data])
        # decoded_image_data.save(destination)
        file_to_save.write(decoded_image_data)
     

    return myfunction()
    

def myfunction():
    new_images = []
    for filename in glob.glob('/Users/jeffreyzheng/byte_academy/phase2/p4_0/backend/*.png'):
        img = Image.open(filename)
        new_images.append(img)

    for imag in new_images:
        imag.show()

    for (i,new) in enumerate(new_images):
        new.save('{}{}{}'.format('/Users/jeffreyzheng/byte_academy/phase2/p4_0/frontend/public/picture/',i+1, '.png'))


    

    







if __name__=="__main__":
    app.run(debug=True)



    

  












