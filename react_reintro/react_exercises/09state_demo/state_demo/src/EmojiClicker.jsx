import { useState } from "react"
import { v4 as uuid } from "uuid";

// Adding a bonus randomizer
function randomEmoji() {
  const choices = ['😀', '🙄', '😏', '😆', '😲', '😬', '😎', '😅']
  return choices[(Math.floor(Math.random() * choices.length))];
}


function EmojiClicker() {
  const [emojis, setEmojis] = useState([{id: uuid(), emoji: randomEmoji() }])
  
// Remember, we need to make a copy to change this array!
const addEmoji = () => {
  // ...copying all existing emojis, adding new content
  // setEmojis([...emojis, "😉"]);
  //? The better, callback version of doing this:
  setEmojis((oldEmojis) => [...oldEmojis, {id: uuid(), emoji: randomEmoji()}])
};

// Unliking add an emoji, which will add one no matter what, we need to depend on an ID here to make sure we delete the specific one we click on.
const deleteEmoji = (id) => {
  setEmojis(previousEmojis => {
    // Delete the emoji with the specified id
    //? The most common way to do this is to use the filter method
    // Takes the id, filter makes a new array of emojis that do not have the specified ID
    return previousEmojis.filter(emoji => emoji.id !== id);
  })
  console.log(id);
};

const makeHearts = () => {
  setEmojis(previousEmojis => {
    // Take the old emojis, map over them, and each key-value pair, change the value of 'emoji' to the green heart.
    return previousEmojis.map(emoji => {
      return {...emoji, emoji: "💚"}
    })
  })
}

  return (
    <>
    <div>
      {emojis.map((emoji) => {
        return (
        <span 
          onClick={() => deleteEmoji(emoji.id)} 
          key={emoji.id} 
          style={{fontSize: "4rem"}}>
            {emoji.emoji}
          </span>
        )
      })}
    </div>
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={makeHearts}>Change All to Hearts</button>
    </>
  );
}
export default EmojiClicker

// This project made use of uuid to give us some unique IDs 