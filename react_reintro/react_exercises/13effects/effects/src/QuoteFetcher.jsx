import { useState, useEffect } from "react";

//? The purpose of this component is to display a random quote upon the page rendering, practicing useEffect.
//? Otherwise, it's the same practice of using useState to create an onClick event to get and display a new one.


const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
  // The commented out portion is fine if we want to not display anything upon initial render and only use the button to get a quote.
  // const [quote, setQuote] = useState({});
  //! Now, we'll have a quote ready to go upon load by combining useState and useEffect
  const [quote, setQuote] = useState({text: "", author: ""});
  
  //? Note: This is clunkly looking because useEffect does not take async function directly, you essentially have to wrap it in a 'normal' function and then call it to work around that limitation.
  // useEffect(() => {
  //   async function getInitialQuote() {
  //     const response = await fetch(RANDOM_QUOTE_URL);
  //     const jsonResponse = await response.json();
  //     const randomQuote = jsonResponse.quote;
  //     setQuote(randomQuote)
  //   }
  //   getInitialQuote();
  //   //? Remember, empty array brackets to only run upon initial render.
  // }, [])

  //! Because it's the same exact function as our onClick functionality...
  useEffect(() => {
    fetchQuote();
  }, [])

  async function fetchQuote() {
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);
    console.log(randomQuote);
  }

  return (
    <div>
      <h1>{quote.text}</h1>
      <h2>{quote.author}</h2>
      <button onClick={fetchQuote}>Get Quote Using Handler</button>
    </div>
  )
}