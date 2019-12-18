from data import table
import os

PATH = os.path.dirname(__file__)
DATAPATH = os.path.join(PATH, 'data', 'data.db')

table(DATAPATH)
