import sqlite3
from hashlib import sha256
from random import randint





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
        self.pk = pk

    def insert(self):
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            SQL = """INSERT INTO listings(description, discountrate, retailprice,
                    reserveprice, expirationdate, quantity, contactname,
                    telephonenumber, pickuplocation,zipcode)
                    VALUES(?,?,?,?,?,?,?,?,?);"""
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
                self.zipcode)
            cursor.execute(SQL, values)

    def update(self):
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            SQL = """UPDATE listings SET(
                description=?, discountrate =?, retailprice=?, reserveprice=?,
                expirationdate=?, quantity=?, contactname=?,
                contactname=?, telephonenumber=?, pickuplocation=?, zipcode =?)
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
                self.pk)
            cursor.execute(SQL, values)

    @classmethod
    def select(cls):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            SQL = """SELECT * FROM listings;"""
            cursor.execute(SQL)
            users = cursor.fetchall()
            return users
