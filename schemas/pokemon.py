from pydantic import BaseModel, validator

class pokemon(BaseModel):
 id = int
 classification = str
 name = str
 percentage_male = float
 type1 = str
 type2 = str
 generation = str
 is_legendary = bool
    


    
class pokemonResponseModel(pokemon):
 classification = str
name = str
percentage_male = float
type1 = str
type2 = str
generation = str
is_legendary = bool

class Config():
        orm_mode = True