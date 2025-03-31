import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import northshore from './images/northshore.png';
import auditioncat from './images/auditioncat.jpg';
import geoff from './images/geoff.png';
import aatac from './images/aatac.png';




export default function Portfolio() {




  return (
    <Grid container spacing={10} style={{padding: '0 2em 2em 2em', minHeight: "100vh"}} id='projects' >
          <Grid size={{ xs:12, md:12 }}>
            <h2>A few projects that I've worked on</h2>
          </Grid>
          <Grid size={{ xs:12, md:6 }} >
            <Box style={{ overflow: 'hidden'}} className="image-wrapper">
              <img src={northshore} alt="northshore" style={{width: '100%', borderRadius: '15px'}} />
              <div className="overlay">
                <div className="overlay-content">
                  <Stack direction="row" spacing={1} marginBottom={1} justifyContent="center">
                    <Chip label="UI/UX" color="error"/>
                    <Chip label="Wordpress" color="primary" />
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Chip label="HTML" color="secondary" />
                    <Chip label="CSS" color="info" />
                    <Chip label="JavaScript" color="success" />
                    <Chip label="PHP" color="warning" />
                  </Stack>
                  <Button variant="contained" style={{ backgroundColor: '#fff', color: 'black', marginTop: "1em" }}>
                    View Mock Ups
                  </Button>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid size={{ xs:12, md:6 }}>
            <Box style={{overflow: 'hidden'}} className="image-wrapper">
              <img src={auditioncat} alt="auditioncat" style={{width: '100%', borderRadius: '15px'}} />
              <div className="overlay">
                <div className="overlay-content">
                <Stack direction="row" spacing={1} marginBottom={1} justifyContent="center">
                    <Chip label="Co-Founder" color="error"/>
                    <Chip label="Frontend Lead" color="primary" />
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Chip label="React" color="info" />
                    <Chip label="Typescript" color="secondary" />
                    <Chip label="Node/Express" color="success" />
                    <Chip label="Postgres" color="warning" />
                    <Chip label="Docker" color="primary" />
                </Stack>
                <Button variant="contained" style={{ backgroundColor: '#fff', color: 'black', marginTop: "1em" }}
                  onClick={() => window.open('http://ec2-3-88-11-44.compute-1.amazonaws.com:4000/network', '_blank', 'noopener noreferrer')}
                >
                  View MVP
                </Button>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid size={{ xs:12, md:6 }}>
            <Box style={{overflow: 'hidden'}} className="image-wrapper">
              <img src={aatac} alt="aatac" style={{width: '100%', borderRadius: '15px'}} />
              <div className="overlay">
                <div className="overlay-content">
                <Stack direction="row" spacing={1} marginBottom={1} justifyContent="center">
                    <Chip label="Web Developer" color="error"/>
                    <Chip label="Wordpress" color="primary" />
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Chip label="HTML" color="info" />
                    <Chip label="CSS" color="secondary" />
                    <Chip label="JavaScript" color="success" />
                    <Chip label="PHP" color="warning" />
                    <Chip label="160+ Users" color="primary" />
                </Stack>
                <Button variant="contained" style={{ backgroundColor: '#fff', color: 'black', marginTop: "1em" }}
                  onClick={() => window.open('https://aatheatreartists.com/', '_blank', 'noopener noreferrer')}
                >
                  View Directory
                </Button>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid size={{ xs:12, md:6 }}>
            <Box style={{overflow: 'hidden'}} className="image-wrapper">
              <img src={geoff} alt="geoff" style={{width: '100%', borderRadius: '15px'}} />
              <div className="overlay">
                <div className="overlay-content">
                <Stack direction="row" spacing={1} marginBottom={1} justifyContent="center">
                    <Chip label="Web Designer" color="error"/>
                    <Chip label="Wordpress" color="primary"/>
                  </Stack>
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <Chip label="HTML" color="success" />
                    <Chip label="CSS" color="secondary"/>
                </Stack>
                <Button variant="contained" style={{ backgroundColor: '#fff', color: 'black', marginTop: "1em" }}
                  onClick={() => window.open('https://geoffreykent.com/', '_blank', 'noopener noreferrer')}
                >
                  View Website
                </Button>
                </div>
              </div>
            </Box>
          </Grid>
        </Grid>

  );
}