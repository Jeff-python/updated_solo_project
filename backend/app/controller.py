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
import shutil
import fnmatch


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

@app.route('/api/delete', methods=["POST"])
def delete_listing():
    data = request.get_json()
    print('hello')
    print(data)
    Listing.delete(data['pk'])
    return jsonify({"status":"Success"})


# login an user
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    user_key = User.login(data['username'],data['password'])
    if user_key:
        return jsonify({"status": "success", "token": user_key})
    return jsonify({"status": "login failed", "token": None})

# @app.route('/api/id', method =["GET"])
# def get_id():
#     listings = Listing.get_id()
#     return jsonify({"data":listings["id"]})
    

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

@app.route('/api/id', methods=["GET"])
def get_id():
    listings = Listing.get_listings()
    return jsonify({"data":listings})
    

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
    print(pic)
    # print(type(new))
    # print(new)
    new = new[1]
    new = new.encode('utf-8')

   
    # a=0
    # list =[]
    # new=[]
    # for file in os.listdir('/Users/jeffreyzheng/byte_academy/phase2/p4_solo_project_final_version/frontend/public/resize_pictures'):
    #     if (fnmatch.fnmatch(file, '*.jpg')):
    #         print(file)
    #         list.append(file)
    #         a = len(list)
    #         print(a)

            # for i in list:
            #     new.append(i[0])
                # print(new)
            # new= list.split('.')
            # print(new)

    # print("hello0")
    
    # print(glob.glob('/Users/jeffreyzheng/byte_academy/phase2/p4_solo_project_final_version/frontend/public/resize_pictures/*.jpg'))
    # print("hello0")
    i=0
    if len(glob.glob('/Users/jeffreyzheng/byte_academy/phase2/p4_solo_project_final_version/frontend/public/resize_pictures/*.jpg')) ==0:
        i=1
    elif len(glob.glob('/Users/jeffreyzheng/byte_academy/phase2/p4_solo_project_final_version/frontend/public/resize_pictures/*.jpg'))>0:
        i= len(glob.glob('/Users/jeffreyzheng/byte_academy/phase2/p4_solo_project_final_version/frontend/public/resize_pictures/*.jpg'))+1
    else:
        return i+1
        
   
    with open(('{}{}{}'.format('/Users/jeffreyzheng/byte_academy/phase2/p4_solo_project_final_version/frontend/public/resize_pictures/',i, '.jpg')),'wb') as file_to_save:
    # with open('{}.jpg'.format(i+1), 'wb') as file_to_save:
        decoded_image_data = base64.decodebytes(new)
        file_to_save.write(decoded_image_data)

        basewidth = 150
        # basewidth = 28
        img =Image.open(('{}{}{}'.format('/Users/jeffreyzheng/byte_academy/phase2/p4_solo_project_final_version/frontend/public/resize_pictures/',i, '.jpg'))).convert('RGB')
        print('size: {}'.format(img.size))
        # wpercent =(basewidth / float(img.size[0]))
        hsize = int(180)
        # hsize = int(28)
        # hsize = int((float(img.size[1]) *float(wpercent)))

        img =img.resize((basewidth,hsize), Image.ANTIALIAS)
        # print('new size: {}'.format(img.size))
        img.save('{}{}{}'.format('/Users/jeffreyzheng/byte_academy/phase2/p4_solo_project_final_version/frontend/public/resize_pictures/',i,'.jpg'))
        # img.save(('{}{}{}'.format('/Users/jeffreyzheng/byte_academy/phase2/p4_solo_project_final_version/frontend/public/picture/',i,'.jpg')))




        # return function()

        # im = Image.open(('{}{}{}'.format('/Users/jeffreyzheng/byte_academy/phase2/p4_solo_project_final_version/frontend/public/resize_pictures/',i, '.jpg'))
        # im.save('{}{}{}'.format('/Users/jeffreyzheng/byte_academy/phase2/p4_solo_project_final_version/frontend/public/resize_pictures/',i, '.jpg'))
        # im.rotate(45).show()
        
        # img = Image.open(filename)
        # image = img.resize((150,180))
        # destination ='/Users/jeffreyzheng/byte_academy/phase2/p4_solo_project_final_version/frontend/public/resize_pictures'
    
    

        


        # image = image.resize((150,180))
    #     resized_images.append(image)




# import os.path
# directory = './html/'
# filename = './html/'
# file_path = os.path.join(directory, filename)
# if not os.path.isdir(directory):
#     os.mkdir(directory)
# file = open(file_path, "w")
# file.write(html)
# file.close()
     

        
    

    # image_list = []
    # resized_images = []
    # def function(i):
    #         # for filename in glob.glob('/Users/jeffreyzheng/byte_academy/phase2/p4_solo_project_final_version/frontend/public/resize_pictures/*.jpg'):
    #     for filename in glob.glob(('{}{}{}'.format('/Users/jeffreyzheng/byte_academy/phase2/p4_solo_project_final_version/frontend/public/resize_pictures/',i,'.jpg'))):
    #         # print(filename)
    #         img = Image.open(filename)
    #         image_list.append(img)

    #     for image in image_list:
    #         # image.show()
    #         image = image.resize((150,180))
    #         resized_images.append(image)

    #     for pic in resized_images:
    #         pic.show()

    #     for new in resized_images:
    #         new.save('{}{}{}'.format('/Users/jeffreyzheng/byte_academy/phase2/p4_solo_project_final_version/frontend/public/resize_pictures/',i,'.jpg'))

        







if __name__=="__main__":
    app.run(debug=True)





    

  












