import { ListItem, TextField, InputAdornment, IconButton  } from "@mui/material";
import Create from "@mui/icons-material/Create"
import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
      <TextField 
        id="outlined-basic"
        label="Add Task"
        variant="outlined"
        onChange={handleChange}
        value={text}
        InputProps = {{ 
          endAdornment: <InputAdornment position="end">
          <IconButton aria-label="create todo" edge="end" type="submit">
              <Create />
          </IconButton>
        </InputAdornment>
        }}
        />
      </form>
    </ListItem>
  )
}

{/* <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          /> */}