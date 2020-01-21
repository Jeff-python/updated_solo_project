

import sqlite3

class Listing:
    dbpath = "data/data.db"

    def __init__(
            self,
            description,
            discountrate,
            retailprice,
            reserveprice,
            expirationdate,
            quantity,
            contactname,
            telephonenumber,
            pickuplocation,
            zipcode,
            user_key,
            imagepath,
            pk=None):
        self.description = description
        self.discountrate = discountrate
        self.retailprice = retailprice
        self.reserveprice = reserveprice
        self.expirationdate = expirationdate
        self.quantity = quantity
        self.contactname = contactname
        self.telephonenumber = telephonenumber
        self.pickuplocation = pickuplocation
        self.zipcode = zipcode
        self.user_key = user_key
        self.imagepath = imagepath
        self.pk = pk

    def insert(self):
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            SQL = """INSERT INTO listings(description, discountrate, retailprice,
                    reserveprice, expirationdate, quantity, contactname,
                    telephonenumber, pickuplocation, zipcode, user_key, imagepath)
                    VALUES(?,?,?,?,?,?,?,?,?,?,?,?);"""
            values = (
                self.description,
                self.discountrate,
                self.retailprice,
                self.reserveprice,
                self.expirationdate,
                self.quantity,
                self.contactname,
                self.telephonenumber,
                self.pickuplocation,
                self.zipcode,
                self.user_key,
                self.imagepath)
            cursor.execute(SQL, values)



    def update(self):
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            SQL = """UPDATE listings SET
                description=?, discountrate=?, retailprice=?, reserveprice=?,
                expirationdate=?, quantity=?, contactname=?,
                telephonenumber=?, pickuplocation=?, zipcode=?, imagepath=?
                WHERE pk=?;"""
            values = (
                self.description,
                self.discountrate,
                self.retailprice,
                self.reserveprice,
                self.expirationdate,
                self.quantity,
                self.contactname,
                self.telephonenumber,
                self.pickuplocation,
                self.zipcode,
                self.imagepath,
                self.pk)
            cursor.execute(SQL, values)

    @classmethod
    def select(cls, user_key):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            SQL = """SELECT * FROM listings WHERE user_key=?;"""
            cursor.execute(SQL, (user_key,))
            users = cursor.fetchall()
            return users

    @classmethod
    def get_listings(cls):
        with sqlite3.connect('data/data.db') as conn:
            cursor = conn.cursor()
            SQL = "SELECT * FROM listings;"
            cursor.execute(SQL)
            data = cursor.fetchall()
        return data
    
    @classmethod
    def select_one(cls, pk):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            SQL = "SELECT * FROM listings WHERE pk =?;"
            values = (pk,)
            cursor.execute(SQL, values)
            data = cursor.fetchone()
            if data:
                return cls(
                    data[1],
                    data[2],
                    data[3],
                    data[4],
                    data[5],
                    data[6],
                    data[7],
                    data[8],
                    data[9],
                    data[10],
                    data[11],
                    data[12],
                    data[0])
            return None

"""curl -d '{"description":"Jeff", "discountrate":20, "retailprice":100, "reserveprice":"80", "expirationdate":"05/01/2020", "quantity": 5, "contactname" :"jeff", "telephonenumber":"7189026127", "pickuplocation":"queens", "zipcode":"11354", "user_key":12345}' -H "Content-Type: application/json" -X POST http://localhost:5000/api/add"""
