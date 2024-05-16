import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"

function App() {
  const [americanLeague, setAmericanLeague] = useState([])
  const [nationalLeague, setNationalLeague] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/american-league")
    .then((r) => r.json())
    .then((americanTeams) => setAmericanLeague(americanTeams))
    .catch(error => console.log(error))
  },[])

  useEffect(()=> {
    fetch("http://localhost:3000/national-league")
    .then((r) => r.json())
    .then((nationalTeams) => setNationalLeague(nationalTeams))
    .catch(error => console.log(error))
  },[])


  return (
    <>
      <header>
        <Navbar />
      </header> 
      <Outlet context={{americanLeague:{americanLeague}, nationalLeague:{nationalLeague}}}/>
    </>
  );
}

export default App;
