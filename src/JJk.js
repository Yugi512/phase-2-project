import { useOutletContext, } from "react-router-dom";
import Form from "./Form";
import CharacterCard from "./CharacterCard";
function JJK(){
    const { jjk, setJjk, url1, updateJJKLikes } = useOutletContext() 
   
    return (
        <div >
            
            <div> 
                <h1 className="title"> Jujutsu kaisen Characters </h1>
                <Form url={url1} setArray={setJjk}/>
                <CharacterCard characterList={jjk} updateState={updateJJKLikes} urls={url1}/>
            </div>
        </div>
    )
}

export default JJK