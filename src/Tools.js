import { faReact, faHtml5, faCss, faJs, faNodeJs, faDocker, faAws } from '@fortawesome/free-brands-svg-icons';
import Grid from '@mui/material/Grid2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Tools() {
  return (

<Grid container spacing={2} id="tools">
            <Grid size={12}>
              <div style={{textAlign: 'center'}}>
                  <h2>My Tool Kit</h2>
                  <p style={{ color: "black" }}>Here are a few technologies that I've worked with</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faReact} style={{ fontSize: '50px', color: '#61DBFB' }} />
                <p style={{margin: 0, fontSize: "16px", color: "black"}} >React</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faHtml5} style={{ fontSize: '50px', color: '#61DBFB' }} />
                <p style={{margin: 0, fontSize: "16px", color: "black"}}>HTML</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faCss} style={{ fontSize: '50px', color: '#61DBFB' }} />
                <p style={{margin: 0, fontSize: "16px", color: "black"}}>CSS</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faJs} style={{ fontSize: '50px', color: '#61DBFB' }} />
                <p style={{margin: 0, fontSize: "16px", color: "black"}}>Javascript</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
                <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNjFkYmZiIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik00NSw0SDVDNC40NDcsNCw0LDQuNDQ4LDQsNXY0MGMwLDAuNTUyLDAuNDQ3LDEsMSwxaDQwYzAuNTUzLDAsMS0wLjQ0OCwxLTFWNUM0Niw0LjQ0OCw0NS41NTMsNCw0NSw0eiBNMjksMjYuNDQ1aC01VjQyaC00CVYyNi40NDVoLTVWMjNoMTRWMjYuNDQ1eiBNMzAuMTIxLDQxLjExMnYtNC4xNThjMCwwLDIuMjcxLDEuNzEyLDQuOTk2LDEuNzEyYzIuNzI1LDAsMi42Mi0xLjc4MiwyLjYyLTIuMDI2CWMwLTIuNTg2LTcuNzIxLTIuNTg2LTcuNzIxLTguMzE1YzAtNy43OTEsMTEuMjUtNC43MTcsMTEuMjUtNC43MTdsLTAuMTQsMy43MDRjMCwwLTEuODg3LTEuMjU4LTQuMDE4LTEuMjU4cy0yLjksMS4wMTMtMi45LDIuMDk2CWMwLDIuNzk1LDcuNzkxLDIuNTE2LDcuNzkxLDguMTQxQzQyLDQ0Ljk1NSwzMC4xMjEsNDEuMTEyLDMwLjEyMSw0MS4xMTJ6Ii8+PC9zdmc+"/>
                <p style={{margin: 0, fontSize: "16px", color: "black"}}>Typescript</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faNodeJs} style={{ fontSize: '50px', color: '#61DBFB' }} />
                <p style={{margin: 0, fontSize: "16px", color: "black"}}>NodeJs</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
              <div class="icons8-postgresql"></div>

                <p style={{margin: 0, fontSize: "16px", color: "black"}}>Postgresql</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
                <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNjFkYmZiIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGQ9Ik0yNCw0QzEyLjk1NCw0LDQsMTIuOTU0LDQsMjRzOC45NTQsMjAsMjAsMjBzMjAtOC45NTQsMjAtMjBTMzUuMDQ2LDQsMjQsNHogTTE3LjI3OSwzNi4xNTlsNy4xMjYtMTAuMjY1CUMyNC41MiwyNS43MjcsMjQuNDAxLDI1LjUsMjQuMiwyNS41aC05LjM0Yy0wLjIyNCwwLTAuMzM1LTAuMjcxLTAuMTc1LTAuNDI4bDE0LjItMTMuOTc0YzAuMDUzLTAuMDUyLDAuMTE0LTAuMDc0LDAuMTczLTAuMDc0CWMwLjE2OCwwLDAuMzIxLDAuMTgsMC4yMjUsMC4zNjdsLTUuMDMsOS43NDVjLTAuMDg2LDAuMTY2LDAuMDM1LDAuMzY1LDAuMjIyLDAuMzY1aDguODgyYzAuMjI4LDAsMC4zMzcsMC4yOCwwLjE2OSwwLjQzNAlsLTE1Ljg3MywxNC41NWMtMC4wNTIsMC4wNDgtMC4xMTEsMC4wNjktMC4xNjcsMC4wNjlDMTcuMzA3LDM2LjU1NCwxNy4xNDksMzYuMzQ1LDE3LjI3OSwzNi4xNTl6Ii8+PC9zdmc+"/>
                <p style={{margin: 0, fontSize: "16px", color: "black"}}>Chakra UI</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
              <div class="icons8-wordpress"></div>
                <p style={{margin: 0, fontSize: "16px", color: "black"}}>WordPress</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faDocker} style={{ fontSize: '50px', color: '#61DBFB' }} />
                <p style={{margin: 0, fontSize: "16px", color: "black"}}>Docker</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
              <FontAwesomeIcon icon={faAws} style={{ fontSize: '50px', color: '#61DBFB' }} />
                <p style={{marginTop: "5px", fontSize: "16px", color: "black"}}>Amazon Web Services</p>
              </div>
            </Grid>
            <Grid size={2}  style={{textAlign: 'center'}}>
              <div>
              <div class="icons8-adobe-creative-cloud"></div>
                <p style={{margin: 0, fontSize: "16px", color: "black"}}>Adobe Creative Cloud</p>
              </div>
            </Grid>
          </Grid>
  );
}