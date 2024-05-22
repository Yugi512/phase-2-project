import { useEffect, useState } from "react";

function Likes({likes, id, url}){
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