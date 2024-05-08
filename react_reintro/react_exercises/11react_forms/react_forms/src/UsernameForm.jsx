import { useState } from "react";

function UsernameForm() {
  const [username, setUsername] = useState("");
  const updateUsername = (e) => {
    // console.log('Changed!');
    // console.log(e.target.value);
    setUsername(e.target.value);
  }
  return (
    <div>
      <input type="text" placeholder="username" value={username} onChange={updateUsername}/>
      <button>Submit</button>
    </div>
  )
}

export default UsernameForm;