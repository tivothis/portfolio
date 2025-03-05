import headshot from './headshot.jpg';
import './App.css';
import { Grid, Container } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container flexDirection='column'  style={{padding: '2em', justifyContent: 'center', alignItems: 'center', minheight: '100vh'}}>
          <h1>Hi, I'm Tony 👋</h1>
          <Grid container spacing={2} style={{padding: '2em', height: '100vh'}}>
            <Grid item xs={12} md={4}>
              <img width='300px' style={{ borderRadius: '50%' }} src={headshot} className="headshot" alt="headshot" />
            </Grid>
            <Grid item xs={12} md={8}>
              <div style={{textAlign: 'left'}}>
                <h3>I’m a multidisclipinary web developer and web designer. I’m passionate about the intersection of technology and the arts. 💻 🎨</h3>
                <p style={{fontSize: '18px'}}>I spent the last decade in New York City working professionally in the performing arts as a professional actor and musician. I got interested in web design after helping other artists with their portfolios. I ventured into programming after founding a start up called Audition Cat to help performers keep track of their networks and auditions.</p>
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <ArrowDropDownIcon style={{fontSize: '50px'}} className="bounce" />
            </Grid>
          </Grid>
        </Container>

        <Grid container spacing={3} style={{padding: '2em'}}>
          <Grid item xs={12} md={12}>
            <h2>A few projects that I've worked on</h2>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{textAlign: 'left'}}>
              <h3>Project 1</h3>
              <p style={{fontSize: '18px'}}>This is a project I worked on. It was a lot of fun and I learned a lot.</p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{textAlign:
            'left'}}>
              <h3>Project 2</h3>
              <p style={{fontSize: '18px'}}>This is a project I worked on. It was a lot of fun and I learned a lot.</p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{textAlign: 'left'}}>
              <h3>Project 3</h3>
              <p style={{fontSize: '18px'}}>This is a project I worked on. It was a lot of fun and I learned a lot.</p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{textAlign: 'left'}}>
              <h3>Project 4</h3>
              <p style={{fontSize: '18px'}}>This is a project I worked on. It was a lot of fun and I learned a lot.</p>
            </div>
          </Grid>
        </Grid>

      </header>
    </div>
  );
}

export default App;
