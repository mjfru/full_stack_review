import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useEffect(function myEffect() {
  //! Runs every time the component is re-rendered
  //   console.log('My effect was called.')
  // })

  useEffect(function myEffect() {
    // Runs every time the component is re-rendered
    console.log('My effect was called.')
    //! Now will only run if 'count' is changed.
  }, [count])

  const increment = () => {
    setCount((c) => c + 1);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}> +1 </button>
      <p>Name: {name}</p>
      <input type="text" value={name} onChange={handleChange}/>
    </div>
  )
}