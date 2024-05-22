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

  useEffect(()=> {
      fetch(url1)
      .then((r) => r.json())
      .then((character) => setJJK(character))
      .catch(error => console.log(error))
  },[])
  
  useEffect(()=> {
      fetch(url2)
      .then((r) => r.json())
      .then((character) => setOnePiece(character))
      .catch(error => console.log(error))
  },[])
  useEffect(()=> {
    fetch(url3)
    .then((r) => r.json())
    .then((character) => setRimuru(character))
    .catch(error => console.log(error))
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


  return (
    <>
      <header>
        <Navbar />
      </header> 
      <Outlet context={{onepiece: onePiece, jjk: jjk, ttigraas: rimuru, setOne: setOne, setJjK: setJjk, setRimu: setRimu, url1: url1, url2: url2, url3: url3}}/>
    </>
  );
}

export default App;
