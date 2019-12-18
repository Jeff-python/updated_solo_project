import sqlite3

def create_table(dbpath):
    with sqlite3.connect(dbpath) as conn:
        cur = conn.cursor()
        SQL1 = """DROP TABLE IF EXISTS users; """
        SQL2 = """DROP TABLE IF EXISTS listings; """
    cur.execute(SQL1)
    cur.execute(SQL2)


def table(dbpath):
    with sqlite3.connect(dbpath) as conn:
        cursor = conn.cursor()
        SQL = """CREATE TABLE users(
                pk INTEGER PRIMARY KEY AUTOINCREMENT,
                firstname VARCHAR(128),
                lastname VARCHAR(128),
                username VARCHAR(128),
                email VARCHAR(128),
                password VARCHAR(128),
                user_key VARCHAR(128)
            );"""
        cursor.execute(SQL)

    with sqlite3.connect(dbpath) as conn:
        cursor = conn.cursor()
        SQL = """CREATE TABLE listings(
                pk INTEGER PRIMARY KEY AUTOINCREMENT,
                description VARCHAR(128),
                discountrate INTEGER,
                retailprice FLOAT,
                reserveprice FLOAT,
                expirationdate VARCHAR(128),
                quantity INTEGER,
                contactname VARCHAR(128),
                telephonenumber INTEGER,
                pickuplocation VARCHAR(128),
                zipcode INTEGER,
                user_key VARCHAR(128)
                );"""
        cursor.execute(SQL)


if __name__ == "__main__":
    create_table("data.db")
    table("data.db")
