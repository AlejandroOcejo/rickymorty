import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { cleanup } from "@testing-library/react";



function App() {

  const [characters, setCharacters] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fetchCharacter = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchCharacter(initialUrl);
  }, [])

  return (
    <>
      <Navbar brand="Rick and Morty APP" />

      <div className="container">

      </div>
    </>
  );
}

export default App;
