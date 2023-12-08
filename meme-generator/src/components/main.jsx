import { useEffect } from "react";
import { useState } from "react";
// import memesData from "../data.js";

function Main  ()  {
  const [meme, setMeme] = useState({
    topText : "",
    bottomText : "",
    imgurl : "https://i.imgflip.com/30b1gx.jpg",
  });

  const [memesArray, setMemesArray] = useState([]);



// useEffect takes a function as its parameter. If that function returns something, it needs to be a cleanup function. Otherwise,it should return nothing. 
// If we make it an async function, it
// automatically retuns a promise instead of a function or nothing.
// Therefore, if you want to use async operations inside of useEffect,
// you need to define the function separately inside of the callback
// function, as seen below:


  useEffect(() => {
    async function getallMemes() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setMemesArray(data.data.memes);
    }
    getallMemes();
    console.log(memesArray);
    //without async 
    // fetch("https://api.imgflip.com/get_memes")
    //  .then(response => response.json())
    //  .then(data => setMemesArray(data.data.memes));
    
  }, [])

  function getMeme() {

    // const memesArray = memesData.data.memes ;
    
    var random = Math.floor(Math.random() * memesArray.length);
    var newUrl = memesArray[random].url ;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        imgurl : newUrl,
      }
    });
    console.log(newUrl);
  }

  function handleChange (event) {
    const {name,value} = event.target ;
    setMeme ( prevMeme => {
      return {
        ...prevMeme,
        [name] : value
      }
    })
  }
  return(
    <main>
      {/* <p>{spanned}</p> */}
      <div className="form"> {/*This is not a form actually */}
        <input type="text" name="topText" onChange={handleChange} className="form-input" placeholder="Top text" />
        <input type="text" name="bottomText" onChange={handleChange} className="form-input" placeholder="Bottom text" />
        <button onClick={getMeme} className="form-button">Get a new meme image</button>
      </div>
            
      <div className="meme">
        <h2 className="meme-text top" >{meme.topText}</h2>
        <div className="memeimg-div">
          <img className="meme-img" alt="memeImage" src={meme.imgurl} /> 
        </div>
        <h2 className="meme-text bottom" >{meme.bottomText}</h2>
      </div>
    </main>
  );
}
export default Main;
  
// ReactDOM.render(nav,document.getElementById('root'));//the nav should have a parent wrapper and can have children
// ReactDOM.render(body,document.getElementById('root'));
 

// ARRAY AS STATE VARIABLE
//   const [things, setThings] = useState(["T1 ", "T2 "]);
//   const spanned = things.map(thing => <span>{thing}</span>)
//   function addThing() {
//     setThings(prevThings => {
//       return [...prevThings, `T${prevThings.length + 1} `]
//     })
//   }


// COMPLEX STATE OBJECT
//   const [contact, setContact] = useState({
//     fName: "John",
//     lName: "Doe",
//     email: "abcd@gmail.com",
//     isFavorite: false,
//   });
//   function toggleFavorite() {
//     setContact(prevContact => {
//       return {
//         ...prevContact,
//         isFavorite: !prevContact.isFavorite,
//       }
//     })
//   }