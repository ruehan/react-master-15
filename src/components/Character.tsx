
import { useEffect, useState } from "react";
import CharacterPage from "../pages/CharacterPage";


interface CharacterData  {
    id: number;
    name: string;
    imageUrl: string
}

const Character: React.FC = () => {
    const [characters, setCharacters] = useState<CharacterData[]>([]);

    const fetchCharacters = async () => {
      const json = await (
        await (await fetch('https://disney_api.nomadcoders.workers.dev/characters')).json()
          
      )

      setCharacters(json);
  }  

    useEffect(() => {
        fetchCharacters();
    }, [])

    return (
        <div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          marginTop: "20px",
        }}>
          {characters.map(character => (
            character.id > 100 && character.id < 300 ? 
            <CharacterPage
              key={character.id}
              id={character.id}
              name={character.name}
              imageUrl={character.imageUrl}
            /> : ""
          ))}
        </div>
      </div>
    )
}

export default Character;