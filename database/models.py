from sqlalchemy import Column, Integer, String, Float, ForeignKey, Boolean
from sqlalchemy.orm import relationship

from database.connection import Base


# uselist = False
# class User(Base):
#     __tablename__ = "users"

#     id = Column(Integer, primary_key=True, index=True)
#     name = Column(String)
#     email = Column(String, unique=True, index=True)
#     hashed_password = Column(String)

#     drums = relationship("Drum", backref="owner")


# class Drum(Base):
#     __tablename__ = "drums"

#     id = Column(Integer, primary_key=True, index=True)
#     title = Column(String, index=True)
#     description = Column(String, index=True)
#     owner_id = Column(Integer, ForeignKey("users.id"))

# class User(Base):
#     __tablename__ = "users"

# id = Column(Integer, primary_key=True, index=True)
# name = Column(String)
# email = Column(String, unique=True, index=True)
# hashed_password = Column(String)

# pokemons = relationship("Pokemon", backref="owner")


class pokemons(Base):
    __tablename__ = "pokemons"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    classification = Column(String)
    name = Column(String)
    percentage_male = Column(Float)
    type1 = Column(String)
    type2 = Column(String)
    generation = Column(Integer)
    is_legendary = Column(Boolean)
    stats = relationship("pokemonStats", backref="pokemon", uselist=False)

class pokemonStats(Base):
    __tablename__ = "pokemon_stats"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    pokemon_id = Column(Integer, ForeignKey("pokemons.id"))
    height_m = Column(Float, nullable=True)
    weight_kg = Column(Float, nullable=True)
    attack = Column(Integer, nullable=True)
    defense = Column(Integer, nullable=True)
    hp = Column(Integer, nullable=True)
    speed = Column(Integer, nullable=True)

        
    
    

    