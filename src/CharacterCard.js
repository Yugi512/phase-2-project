import Likes from "./Likes";

function CharacterCard({characterList, updateState, urls}){
    const card = characterList.map((character, index) => <div className="card" id={index} key={index}>
        <img className="cc" src={character.imgurl} ></img>
        <h2>{character.name}</h2>
        <Likes likes={character.likes}id={character.id} url={urls} updateStates={updateState}/>
    </div>
    )

    return card
}

export default CharacterCard