import csv
from fastapi import FastAPI, APIRouter, Depends, File, UploadFile
from fastapi.responses import HTMLResponse
from schemas.pokemon import pokemonResponseModel, BaseModel, pokemon
from database.connection import get_db, engine
from database.models import pokemons as pokemonTableModel, pokemonStats as pokemonStatsModel, Base
from sqlalchemy.orm import Session, relationship
from database.dataset import pokemonsDataBase, pokemonStatsBase



router = APIRouter(prefix="/pokemon", tags=["pokemon"])
app = FastAPI()

@router.get("/")
def getpokemon(db: Session = Depends(get_db)):
    item = db.query(pokemonTableModel).all()
    return item

@router.get("/{pokemon_name}")
def get_specific_pokemon(pokemon_name: str, db:Session = Depends(get_db)):
    item = db.query(pokemonTableModel).filter(pokemonTableModel.name.ilike(f"%{pokemon_name}%")).first()
    if item:
        stats = item.stats
        return item
    return {"Message" : "Nothing Found"}

@router.post("/pokemons/")
def uploadCSVFileToPokemonDatabase(file:UploadFile, db:Session = Depends(get_db)):
    fileContent = file.file.read().decode("utf-8")
    rows = csv.reader(fileContent.splitlines(), delimiter=",")
    next(rows)
    for row in rows: 
        pokemonData = pokemonTableModel(id = row[0], classification=row[1], name=row[3], percentage_male=float(row[4]) if row[4] else None, type1=row[5], type2=row[6], generation=row[7], is_legendary=False if row [8]=='0' else True)
        db.add(pokemonData)
        db.commit()

@router.post("/pokemon_stats/")
def uploadCSVFileToPokemonStatsDatabase(file:UploadFile, db:Session = Depends(get_db)):
    fileContent = file.file.read().decode("utf-8")
    rows = csv.reader(fileContent.splitlines(), delimiter=",")
    next(rows)
    for row in rows: 
        pokemonStatsData = pokemonStatsModel(pokemon_id=row[0], height_m=row[26] if row [26] else None, weight_kg=row[31] if row[31] else None, attack=row[19], defense=row[24], hp=row[27],speed=row[30])
        db.add(pokemonStatsData)
        db.commit()


# @router.post("/")
# def add_pokemon():        

#         db.refresh(pokemonData)
#         return(pokemonData)
        
  




# @router.delete("/{drumId}")
# def deleteDrum(drumId: int):
#     # for drum in drumDataBase:
#     #     if drum["id"] == drumId:
#     #         drumDataBase.remove(drum)
#     #         return {"data": drumDataBase}
#     # ! =
#     newSet = [drum for drum in drumDataBase if drum["id"] != drumId]
#     return {"data": newSet}


# @router.get("/{drumName}")
# def getSpecificDrum(drumName: str, db: Session = Depends(get_db)):
#     drum = db.query(DrumTableModel).filter(DrumTableModel.title.ilike(f"%{drumName}%")).first()
#     if drum:
#         return {"data": drum}        
#     return {"message": "Found nothing"}