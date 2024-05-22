import { useOutletContext, useParams } from "react-router-dom";
import Form from "./Form";

function JJK(){
    const { jjk, setJjk, url1 } = useOutletContext() 
    

    const characterCards = jjk.map((character, index) => <div className="card" id={index} key={index}>
        <img className="cc" src={character.imgurl} ></img>
        <h2>{character.name}</h2>
    </div>
    )


    return (
        <div >
            
            <div> 
                <h1 className="title"> Jujutsu kaisen Characters </h1>
                <Form url={url1} setArray={setJjk}/>
                {characterCards}
            </div>
        </div>
    )
}

export default JJK