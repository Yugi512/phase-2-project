import { useOutletContext, } from "react-router-dom";
import Form from "./Form";
import CharacterCard from "./CharacterCard";
function JJK(){
    const { jjk, setJJK, url1, updateJJKLikes } = useOutletContext() 
    console.log(setJJK)
    return (
        <div >
            
            <div> 
                <h1 className="title"> Jujutsu kaisen Characters </h1>
                <Form url={url1} setArray={setJJK}/>
                <CharacterCard characterList={jjk} updateState={updateJJKLikes} urls={url1}/>
            </div>
        </div>
    )
}

export default JJK