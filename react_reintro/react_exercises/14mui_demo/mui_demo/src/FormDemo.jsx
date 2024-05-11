import TextField from "@mui/material/TextField"
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { useState } from "react"


export default function FormDemo() {
  const [name, setName] = useState("");
  const [volume, setVolume] = useState(50);

  const updateName = (e) => {
    setName(e.target.value);
  }

  const changeVolume = (e, newVal) => {
    setVolume(newVal);
  }

  return (
    <Box sx={{border: '1px solid teal', p: 6, width: 300, height: 300, margin: "0 auto"}}>
      <h3>Name is: {name}</h3>
      <TextField 
        id="outlined-basic"
        placeholder="Fido" 
        label="Puppy Name"
        variant="outlined"
        value={name}
        onChange={updateName}
        />

        <h3>Volume Level: {volume}</h3>
        <Slider 
          aria-label="Volume"
          value={volume}
          onChange={changeVolume} />
    </Box>
  )
}