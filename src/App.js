import headshot from './headshot.jpg';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img width='300px' style={{ borderRadius: '50%' }} src={headshot} className="headshot" alt="headshot" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained">Hello World Button!</Button>
      </header>
    </div>
  );
}

export default App;
