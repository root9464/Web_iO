from sqlalchemy import Column, Integer, String, JSON
from .db import Base


class Users(Base):

    __tablename__ = 'users'

    login = Column(String, unique=True, index=True, primary_key=True)
    password = Column(String)
    email = Column(String)
   


class Items(Base):

    __tablename__ = 'items'

    id = Column(Integer, primary_key=True, index=True,  unique=True)
    name = Column(String)
    description = Column(JSON)
    price = Column(Integer)


class Orders(Base):

    __tablename__ = 'orders'

    id = Column(Integer, primary_key=True, index=True)
    item_id = Column(Integer, primary_key=True)
    amount = Column(Integer)


class Cart(Base):

    __tablename__ = 'cart'
    
    item_id = Column(Integer, primary_key=True)
    amount = Column(Integer)
