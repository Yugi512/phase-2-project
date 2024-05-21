import { useOutletContext, useParams } from "react-router-dom";
import Form from "./Form";

function OnePiece(){
    const { onepiece } = useOutletContext() 
    const url = window.location.href
    const characterCards = onepiece.map((character, index) => <div className="card" id={index} key={index}>
        <img className="cc" src={character.imgurl} ></img>
        <h2>{character.name}</h2>
    </div>
    )

    return (
        <div>
            <Form url={url} />
            <div> 
                <h1 className="title"> One Piece Characters </h1>
                {characterCards}
            </div>
        </div>
    )
}

export default OnePiece