import { useState } from "react";

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const updateFirstName = (e) => {
    // console.log('Changed!');
    // console.log(e.target.value);
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = () => {
    console.log(firstName, lastName)
  };

  return (
    <div>
      <label htmlFor="firstname">First Name</label>
      <input 
        type="text" placeholder="First Name" 
        value={firstName} 
        onChange={updateFirstName} id="firstname"
      />
      <label htmlFor="lastname"></label>
      <input 
        type="text" placeholder="Last Name" 
        value={lastName} 
        onChange={updateLastName} id="lastname"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default SignupForm;