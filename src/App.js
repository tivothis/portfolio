import headshot from './headshot.jpg';
import './App.css';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, I'm Tony</h1>
        <Grid container spacing={2} style={{padding: '2em'}}>
          <Grid item xs={4}>
            <img width='300px' style={{ borderRadius: '50%' }} src={headshot} className="headshot" alt="headshot" />
          </Grid>
          <Grid item xs={8}>
            <div style={{textAlign: 'left'}}>
              <h3>I’m a software engineer that loves collaboration and building tools that benefit my community. I’m passionate about the intersection of technology and the arts.</h3>
              <p style={{fontSize: '18px'}}>I spent the last decade in New York City working professionally in the performing arts as a theater/television actor and musician. I got interested in web design after helping other artists with their portfolios, and eventually ventured into programming after founding a start up called Audition Cat to help performers keep track of their networks and auditions. We're currently working on building our public Beta.</p>
            </div>
          </Grid>
        </Grid>

      </header>
    </div>
  );
}

export default App;
