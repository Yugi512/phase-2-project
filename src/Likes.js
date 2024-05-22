import { useEffect, useState } from "react";

function Likes({likes, id, url, updateStates}){
    const [like, setLike] = useState(likes)

    function likeButton(){
        setLike(like + 1)
    }
    function disLikeButton(){
        setLike(like - 1)
    }

    
    useEffect(() => {
        fetch(`${url}/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
            likes: (like),
            })
        })
        .then((r) => r.json())
        .then((updatedCharacter) => updateStates(updatedCharacter))
        .catch((error) => console.log(error))
    },[like])

    return (
        <div className="likes"> 
        <button onClick={e => disLikeButton()}> dislike 💔</button>
        {like}
        <button onClick={e => likeButton()}> like ❤️</button>
        </div>
    )
}

export default Likes;