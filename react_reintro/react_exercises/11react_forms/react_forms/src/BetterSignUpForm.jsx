import { useState } from "react";

function BetterSignupForm() {
  const [formData, setFormData] = useState({firstName: "", lastName: "", password: ""});
  
  //? Generic handleChange function
  const handleChange = (event) => {
    const changedField = event.target.name;
    const newValue = event.target.value;
    
    //? Take the current data, whatever that may be...
    setFormData(currentData => {
      //? Update the correct field

      //! Below is NOT best practice as it mutates data
      // currentData[changedField] = newValue;
      // //? Return a copy of the object
      // return {...currentData};

      //! Instead, let's take advantage of computed property names...
      return {
        //? A copy of the current data spread into a new object
        ...currentData,
        //? The computed property name based on the changed field and set it to the new value:
        [changedField]: newValue
        //! Often, you might see [event.target.name]: event.target.value
      }
    })
  }

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <label htmlFor="firstname">First Name</label>
      <input 
        type="text" placeholder="First Name" 
        value={formData.firstName} 
        onChange={handleChange} 
        id="firstname"
        //! Match whatever the key value is in our state object
        name="firstName"
      />
      <label htmlFor="lastname"></label>
      <input 
        type="text" placeholder="Last Name" 
        value={formData.lastName} 
        onChange={handleChange} 
        id="lastname"
        name="lastName"
      />
      <label htmlFor="password"></label>
      <input 
        type="password" placeholder="Password" 
        value={formData.password} 
        onChange={handleChange} 
        id="password"
        name="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default BetterSignupForm;