import { useOutletContext, } from "react-router-dom";
import Form from "./Form";
import CharacterCard from "./CharacterCard";

function TTIGRAAS(){
    const { ttigraas, setRimu, url3, updateRimLikes } = useOutletContext() 
    
    return (
        <div >
            
            <div> 
                <h1 className="title"> That Time I Got Reincarnated As A Slime Characters </h1>
                <Form url={url3} setArray={setRimu}/>
                <CharacterCard characterList={ttigraas} updateState={updateRimLikes} urls={url3}/>
            </div>
        </div>
    )
}

export default TTIGRAAS;