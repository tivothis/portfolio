import headshot from './headshot.jpg';
import './App.css';
import { Grid, Container } from '@mui/material';
import Portfolio from './Portfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container
          flexDirection='column'
          style={{padding: '2em',
          justifyContent: 'center',
          alignItems: 'center',
          minheight: '100vh'}}
        >
          <Grid container spacing={2} style={{padding: '2em 2em 0 2em', height: '100vh'}}>
            <Grid item xs={12} md={4}>
              <img width='300px' style={{ borderRadius: '50%' }} src={headshot} className="headshot" alt="headshot" />
            </Grid>
            <Grid item xs={12} md={8}>
              <div style={{textAlign: 'left'}}>
                <h1>Hi, I'm Tony 👋</h1>
                <p>I’m a multidisclipinary web developer, designer and software engineer. I’m passionate about the intersection of technology and the arts. 💻 🎨</p>
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <a href={'#projects'}>
                <ArrowDropDownIcon style={{fontSize: '50px', color: 'white'}} className="bounce" />
              </a>
            </Grid>
          </Grid>

          <Portfolio />

          <Grid container spacing={2} style={{padding: '2em 2em 0 2em', height: '70vh'}}>
            <Grid item xs={12} md={4} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <img width='300px' style={{ borderRadius: '50%' }} src={headshot} className="headshot" alt="headshot" />
            </Grid>
            <Grid item xs={12} md={8} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <div style={{textAlign: 'left'}}>
                <p style={{fontSize: '18px'}}>I spent the last decade in New York City working professionally in the performing arts as a professional actor and musician. I got interested in web design after helping other artists with their portfolios. I ventured into programming after founding a start up called Audition Cat to help performers keep track of their networks and auditions.</p>
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <a href={'#projects'}>
                <ArrowDropDownIcon style={{fontSize: '50px', color: 'white'}} className="bounce" />
              </a>
            </Grid>
          </Grid>

          <Grid>
            <Grid item xs={12} md={12} style={{textAlign: 'center'}}>
              <h2>My Tool Kit</h2>
              <p>Here are a few technologies that I've worked with</p>
            </Grid>
            <Grid item xs={12} md={2} style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faReact} style={{ fontSize: '50px', color: '#61DBFB' }} />
                <p style={{margin: 0}}>React</p>
              </div>
            </Grid>
            <Grid item xs={12} md={2} style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faHtml5} style={{ fontSize: '50px', color: '#61DBFB' }} />
                <p style={{margin: 0}}>HTML</p>
              </div>
            </Grid>
            <Grid item xs={12} md={2} style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faCss3Alt} style={{ fontSize: '50px', color: '#61DBFB' }} />
                <p style={{margin: 0}}>CSS</p>
              </div>
            </Grid>
          </Grid>

        </Container>

      </header>
    </div>
  );
}

export default App;
