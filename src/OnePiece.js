import { useOutletContext, } from "react-router-dom";
import Form from "./Form";

function OnePiece(){
    const { onepiece, setOne, url2 } = useOutletContext() 
    

    const characterCards = onepiece.map((character, index) => <div className="card" id={index} key={index}>
        <img className="cc" src={character.imgurl} ></img>
        <h2>{character.name}</h2>
    </div>
    )


    return (
        <div >
            
            <div> 
                <h1 className="title"> One Piece Characters </h1>
                <Form url={url2} setArray={setOne}/>
                {characterCards}
            </div>
        </div>
    )
}

export default OnePiece