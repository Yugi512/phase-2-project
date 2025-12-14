import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"

function App() {
  const [onePiece, setOnePiece] = useState([])
  const [jjk, setJJK] = useState([])
  const [rimuru, setRimuru] = useState([])
  
  const url1 = "http://localhost:3000/jujutsu-kaisen";
  const url2 = "http://localhost:3000/one-piece";
  const url3 = "http://localhost:3000/t-t-i-g-r-a-a-s"

  function getCharacters(url,setterState){
    fetch(url)
      .then((r) => r.json())
      .then((characters) => setterState(characters))
      .catch(error => console.log(error))
  }

  useEffect(()=> {
      getCharacters(url1,setJJK)
      getCharacters(url2,setOnePiece)
      getCharacters(url3,setRimuru)
  },[])

function setOne(character){
  setOnePiece([...onePiece,character])
}
function setJjk(character){
  setJJK([...jjk,character])
}
function setRimu(character){
  setRimuru([...rimuru,character])
}

function updateOPLikes(updatedCharacter){
  const newArray = onePiece.map((character) => {
    if(character.id === updatedCharacter.id){
      return updatedCharacter;
    } else {return character}
  })
  setOnePiece(newArray)
}
function updateJJKLikes(updatedCharacter){
  const newArray = jjk.map((character) => {
    if(character.id === updatedCharacter.id){
      return updatedCharacter;
    } else {return character}
  })
  setJJK(newArray)
}

function updateRimLikes(updatedCharacter){
  const newArray = rimuru.map((character) => {
    if(character.id === updatedCharacter.id){
      return updatedCharacter;
    } else {return character}
  })
  setRimuru(newArray)
}


  return (
    <>
      <header>
        <Navbar />
      </header> 
      <Outlet context={{onepiece: onePiece, jjk: jjk, ttigraas: rimuru, setOne: setOne, setJjk: setJjk, setRimu: setRimu, url1: url1, url2: url2, url3: url3, updateOPLikes: updateOPLikes, updateJJKLikes: updateJJKLikes, updateRimLikes: updateRimLikes}}/>
    </>
  );


}


export default App