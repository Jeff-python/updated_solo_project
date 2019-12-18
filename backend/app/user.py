import sqlite3
from hashlib import sha256
from random import randint

class User:
    dbpath = "data/data.db"

    def __init__(
            self,
            firstname,
            lastname,
            username,
            email,
            password,
            user_key=None
            ):
        self.firstname = firstname
        self.lastname = lastname
        self.username = username
        self.email = email
        self.password = password
        self.user_key = user_key

    def insert(self):
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            SQL = """INSERT INTO users(
                    firstname, lastname,
                    username, email, password, user_key)
                    VALUES(?,?,?,?,?,?);"""
            values = (
                self.firstname,
                self.lastname,
                self.username,
                self.email,
                self.password,
                self.user_key)
            cursor.execute(SQL, values)
    
    def set_key(self):
        random_string = str(randint(10000000000,99999999999))
        new_key = sha256(random_string.encode()).hexdigest()
        self.user_key = new_key

    @classmethod
    def login(cls, username, password):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            SQL = "SELECT * FROM users WHERE username =? AND password =?;"
            values = (username, password)
            cursor.execute(SQL, values)
            data = cursor.fetchone()
            if data:
                return data[6]
            else:
                return None

    @classmethod
    def authenticate(cls, user_key):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            SQL = "SELECT * FROM users WHERE user_key =?;"
            values = (user_key,)
            cursor.execute(SQL, values)
            data = cursor.fetchone()
            if data:
                return cls(data[1],data[2],data[3],data[4],data[5])
            else:
                return None

    def update(self):
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            SQL = """UPDATE users SET(
                firstname=?, lastname=?,
                username=?, email=?, password=?)
                WHERE user_key=?;"""
            values = (
                self.firstname,
                self.lastname,
                self.username,
                self.email,
                self.password,
                self.user_key)
            cursor.execute(SQL, values)

    @classmethod
    def select(cls):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            SQL = """SELECT * FROM users;"""
            cursor.execute(SQL)
            users = cursor.fetchall()
            return users

    @classmethod
    def delete(cls, pk):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            SQL = """DELETE FROM users WHERE pk=?"""
            cursor.execute(SQL, (pk,))


"""
curl -d '{"firstname":"jeff", "lastname":"zheng", "username":"jeffrey", "email":"jz079770@gmail.com", "password":"jeffrey" }' -H "Content-Type: application/json" -X POST http://localhost:5000/api/register
"""