import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/characters";
import Pagination from "./components/Pagination";



function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fetchCharacter = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .catch(error => console.log(error))
  }

  const onPrevious = () =>{
    fetchCharacter(info.prev)
  }

  const onNext = () =>{
    fetchCharacter(info.next)
  }

  useEffect(() => {
    fetchCharacter(initialUrl);
  }, [])

  return (
    <>
      <Navbar brand="Rick and Morty APP" />

      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onNext={onNext} onPrevious={onPrevious}/>
        <Characters characters={characters} />
        <Pagination />
      </div>
    </>
  );
}

export default App;
