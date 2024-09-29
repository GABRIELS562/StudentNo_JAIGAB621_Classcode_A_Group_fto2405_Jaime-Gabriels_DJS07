import React from "react"//This line imports the React library so you can use React’s features, such as components, hooks 
//(useState, useEffect), and JSX syntax.


export default function Meme() {
    const [meme, setMeme] = React.useState({//	useState is a React hook that allows you to add state to a functional component.
        topText: "",
        bottomText: "",//The meme state object holds three properties: topText, bottomText, and randomImage.
        randomImage: "http://i.imgflip.com/1bij.jpg" //randomImage is set to a default meme image URL (http://i.imgflip.com/1bij.jpg).
    })//	setMeme is a function that will be used to update the meme state.


    const [allMemes, setAllMemes] = React.useState([])//This creates another state, allMemes, which is an empty array initially.
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    // useEffect is a hook that runs side effects in React components. This one runs once when the component first renders, because the dependency array ([]) is empty.
	// It fetches data from the imgflip meme API (https://api.imgflip.com/get_memes).
    // Once the data is fetched and converted to JSON, the API response contains a list of memes, which is then passed to setAllMemes to update the allMemes state with the fetched meme data.
    
    
    function getMemeImage() {//	getMemeImage is a function that generates a random meme image.
        const randomNumber = Math.floor(Math.random() * allMemes.length)//It first generates a random index (randomNumber) based on the length of the allMemes array.
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange(event) {//handleChange handles changes in the text inputs for topText and bottomText.
        const {name, value} = event.target//event.target contains information about the input field where the change occurred:
        setMeme(prevMeme => ({//	name refers to the name attribute of the input field (topText or bottomText).value is the current value of the input.
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}