import './App.css'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';
import NavBar from './Navbar';

function App() {

  return (
    <div>
      <NavBar/>
      <h1>MUI Demos</h1>
      <h2>Buttons:</h2>
      <Button variant="contained" onClick={() => alert('Hi!')} size="large">Contained</Button>
      <Button variant="text" color="error">Text</Button>
      <Button variant="outlined" color="success" size="small">Outlined</Button>

      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>

      <RatingDemo />

      <FormDemo />
    </div>
  )
}

export default App
