import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterDetailPage from "../pages/CharacterDetailPage";


interface CharacterDetailData {
    id: number;
    name: string;
    imageUrl: string;
    films: string[];
}

const CharacterDetail: React.FC = () => {
    const [characterDetail, setCharacterDetail] = useState<CharacterDetailData[]>([]);
    const params = useParams<{id: string}>();

    const fetchCharacterDetail = async () => {
        const json = await (
            await (await fetch(`https://disney_api.nomadcoders.workers.dev/characters/${params.id}`)).json()
        )

        setCharacterDetail(json);
    }

    useEffect(() => {
        fetchCharacterDetail();
    }, [])

    console.log(characterDetail)

    return (
        <CharacterDetailPage 
            key={characterDetail.id}
            id={characterDetail.id}
            name={characterDetail.name}
            imageUrl={characterDetail.imageUrl}
            films={characterDetail.films}
        />
    )
}

export default CharacterDetail