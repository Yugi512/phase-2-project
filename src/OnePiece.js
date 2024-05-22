import { useOutletContext, } from "react-router-dom";
import Form from "./Form";
import CharacterCard from "./CharacterCard";

function OnePiece(){
    const { onepiece, setOne, url2, updateOPLikes } = useOutletContext() 

    return (
        <div >
            <div> 
                <h1 className="title"> One Piece Characters </h1>
                <Form url={url2} setArray={setOne}/>
                <CharacterCard characterList={onepiece} updateState={updateOPLikes} urls={url2}/>
            </div>
        </div>
    )
}

export default OnePiece