import { useState, useEffect } from "react";

function Form({url, setArray}){
    const [newCharacter, setCharacter] = useState({
        name: "",
        imgurl: "",
        likes: 0
    });
    console.log(url)

    function handleChange(event){
        setCharacter({
          ...newCharacter,
          [event.target.id]: event.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`${url}`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCharacter)
        })
        .then((r) => r.json())
        .then((character) => setArray(character) )
    }
    

    return (
        <div className="form"> 
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    id="name"
                    value={newCharacter.name}
                    placeholder="enter characters name"
                    className="input-text"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    id="imgurl"
                    value={newCharacter.imgurl}
                    placeholder="enter a img url"
                    className="input-text"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="submit"
                    name="submit"
                    value="add a character"
                    className="submit"
                />
            </form>
        </div>
    )
}

export default Form