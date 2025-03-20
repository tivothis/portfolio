import headshot from './headshot.jpg';
import './App.css';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Portfolio from './Portfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss, faJs, faNodeJs, faDocker, faAws } from '@fortawesome/free-brands-svg-icons';

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
          <Grid container spacing={2} style={{padding: '2em 2em 0 2em', height: '100vh'}} alignItems="center" justifyContent="center">
            <Grid size={{ sm: 12, md: 4}}>

                <img width='300px' style={{ borderRadius: '50%' }} src={headshot} className="headshot" alt="headshot" />

            </Grid>
            <Grid size={{ sm: 12, md: 8 }}>

                <div style={{textAlign: 'left'}}>
                  <h1>Hi, I'm Tony 👋</h1>
                  <p>I’m a multidisclipinary web developer, designer and software engineer. I’m passionate about the intersection of technology and the arts. 💻 🎨</p>
                </div>

            </Grid>
            <Grid size={12}>

                <a href={'#projects'}>
                  <ArrowDropDownIcon style={{fontSize: '50px', color: 'white'}} className="bounce" />
                </a>

            </Grid>
          </Grid>

          <Portfolio />

          <Grid container spacing={2} style={{padding: '2em 2em 0 2em', height: '70vh'}}>
            <Grid size={{ xs:12, md:4 }} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <img width='300px' style={{ borderRadius: '50%' }} src={headshot} className="headshot" alt="headshot" />
            </Grid>
            <Grid size={{ xs:12, md:8 }} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <div style={{textAlign: 'left'}}>
                <p style={{fontSize: '18px'}}>I spent the last decade in New York City working professionally in the performing arts as a professional actor and musician. I got interested in web design after helping other artists with their portfolios. I ventured into programming after founding a start up called Audition Cat to help performers keep track of their networks and auditions.</p>
              </div>
            </Grid>
            <Grid size={{ xs:12, md:12 }} >
              <a href={'#tools'}>
                <ArrowDropDownIcon style={{fontSize: '50px', color: 'white'}} className="bounce" />
              </a>
            </Grid>
          </Grid>

          <Grid container spacing={2} id="tools">
            <Grid size={12}>
              <div style={{textAlign: 'center'}}>
                  <h2>My Tool Kit</h2>
                  <p>Here are a few technologies that I've worked with</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faReact} style={{ fontSize: '50px', color: '#61DBFB' }} />
                <p style={{margin: 0, fontSize: "16px"}} >React</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faHtml5} style={{ fontSize: '50px', color: '#61DBFB' }} />
                <p style={{margin: 0, fontSize: "16px"}}>HTML</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faCss} style={{ fontSize: '50px', color: '#61DBFB' }} />
                <p style={{margin: 0, fontSize: "16px"}}>CSS</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faJs} style={{ fontSize: '50px', color: '#61DBFB' }} />
                <p style={{margin: 0, fontSize: "16px"}}>Javascript</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
                <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNjFkYmZiIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik00NSw0SDVDNC40NDcsNCw0LDQuNDQ4LDQsNXY0MGMwLDAuNTUyLDAuNDQ3LDEsMSwxaDQwYzAuNTUzLDAsMS0wLjQ0OCwxLTFWNUM0Niw0LjQ0OCw0NS41NTMsNCw0NSw0eiBNMjksMjYuNDQ1aC01VjQyaC00CVYyNi40NDVoLTVWMjNoMTRWMjYuNDQ1eiBNMzAuMTIxLDQxLjExMnYtNC4xNThjMCwwLDIuMjcxLDEuNzEyLDQuOTk2LDEuNzEyYzIuNzI1LDAsMi42Mi0xLjc4MiwyLjYyLTIuMDI2CWMwLTIuNTg2LTcuNzIxLTIuNTg2LTcuNzIxLTguMzE1YzAtNy43OTEsMTEuMjUtNC43MTcsMTEuMjUtNC43MTdsLTAuMTQsMy43MDRjMCwwLTEuODg3LTEuMjU4LTQuMDE4LTEuMjU4cy0yLjksMS4wMTMtMi45LDIuMDk2CWMwLDIuNzk1LDcuNzkxLDIuNTE2LDcuNzkxLDguMTQxQzQyLDQ0Ljk1NSwzMC4xMjEsNDEuMTEyLDMwLjEyMSw0MS4xMTJ6Ii8+PC9zdmc+"/>
                <p style={{margin: 0, fontSize: "16px"}}>Typescript</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faNodeJs} style={{ fontSize: '50px', color: '#61DBFB' }} />
                <p style={{margin: 0, fontSize: "16px"}}>NodeJs</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
              <div class="icons8-postgresql"></div>

                <p style={{margin: 0, fontSize: "16px"}}>Postgresql</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
                <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNjFkYmZiIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGQ9Ik0yNCw0QzEyLjk1NCw0LDQsMTIuOTU0LDQsMjRzOC45NTQsMjAsMjAsMjBzMjAtOC45NTQsMjAtMjBTMzUuMDQ2LDQsMjQsNHogTTE3LjI3OSwzNi4xNTlsNy4xMjYtMTAuMjY1CUMyNC41MiwyNS43MjcsMjQuNDAxLDI1LjUsMjQuMiwyNS41aC05LjM0Yy0wLjIyNCwwLTAuMzM1LTAuMjcxLTAuMTc1LTAuNDI4bDE0LjItMTMuOTc0YzAuMDUzLTAuMDUyLDAuMTE0LTAuMDc0LDAuMTczLTAuMDc0CWMwLjE2OCwwLDAuMzIxLDAuMTgsMC4yMjUsMC4zNjdsLTUuMDMsOS43NDVjLTAuMDg2LDAuMTY2LDAuMDM1LDAuMzY1LDAuMjIyLDAuMzY1aDguODgyYzAuMjI4LDAsMC4zMzcsMC4yOCwwLjE2OSwwLjQzNAlsLTE1Ljg3MywxNC41NWMtMC4wNTIsMC4wNDgtMC4xMTEsMC4wNjktMC4xNjcsMC4wNjlDMTcuMzA3LDM2LjU1NCwxNy4xNDksMzYuMzQ1LDE3LjI3OSwzNi4xNTl6Ii8+PC9zdmc+"/>
                <p style={{margin: 0, fontSize: "16px"}}>Chakra UI</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faDocker} style={{ fontSize: '50px', color: '#61DBFB' }} />
                <p style={{margin: 0, fontSize: "16px"}}>Docker</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
              <div class="icons8-wordpress"></div>
                <p style={{margin: 0, fontSize: "16px"}}>WordPress</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
              <FontAwesomeIcon icon={faAws} style={{ fontSize: '50px', color: '#61DBFB' }} />
                <p style={{marginTop: "5px", fontSize: "16px"}}>Amazon Web Services</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
              <div class="icons8-adobe-creative-cloud"></div>
                <p style={{margin: 0, fontSize: "16px"}}>Adobe Creative Cloud</p>
              </div>
            </Grid>
          </Grid>

        </Container>

      </header>
    </div>
  );
}

export default App;
