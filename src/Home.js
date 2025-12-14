import { useState } from "react";
import { Link } from "react-router-dom";
import  "./style.css" 

function Home(){
    // have a controlled form that takes in input, it should have a counter
    const [formData,setFormData] = useState("")
    const [counter, setCounter] = useState(0)

    function handleSubmit(e){
        e.preventDefault()
        
        setCounter(counter => counter + formData.length)
        setFormData("")
    }
    function handleChange(e){
        setFormData(e.target.value)
    }

    return (
        <div className="home">
            <h1 id="homepagetext" className="title">Home Page</h1>
            <main>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={formData} onChange={handleChange}/>
                    <input type="submit"/>
                </form>
                <p>{counter}</p>
                <div className="onepiece">
                    <img className="card-img" src="https://i.pinimg.com/736x/c2/6d/f8/c26df8f4a80d935075b406669cbb5e7a.jpg" alt="one-piece"></img>
                <h2>
                        <Link to="/one-piece">One Piece</Link>
                    </h2>
                </div>
                <div className="jjk">
                    <img className="card-img" src="https://a.storyblok.com/f/178900/1064x1480/80804d3052/jujutsu-kaisen-season-2-shibuya-incident-key-art-1064.png/m/filters:quality(95)format(webp)" alt="jjk"></img>
                    <h2>
                        <Link to="/jujutsu-kaisen"> Jujutsu Kaisen</Link>
                    </h2>
                </div>
                <div className="ttigraas">
                    <img className="card-img" src="https://wallpapers.com/images/hd/slime-1p6b9vhvljtqlzxp.jpg" alt="slime"></img>
                    <h2>
                        <Link to="/t-t-i-g-r-a-a-s">That Time I Got Reincarnated As A Slime</Link>
                    </h2>
                </div>
            </main>
        </div>
    )
}

export default Home;