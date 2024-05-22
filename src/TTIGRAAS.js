import { useOutletContext, useParams } from "react-router-dom";
import Form from "./Form";

function TTIGRAAS(){
    const { ttigraas, setRimu, url3 } = useOutletContext() 
    

    const characterCards = ttigraas.map((character, index) => <div className="card" id={index} key={index}>
        <img className="cc" src={character.imgurl} ></img>
        <h2>{character.name}</h2>
    </div>
    )

    return (
        <div >
            
            <div> 
                <h1 className="title"> That Time I Got Reincarnated As A Slime Characters </h1>
                <Form url={url3} setArray={setRimu}/>
                {characterCards}
            </div>
        </div>
    )
}

export default TTIGRAAS;