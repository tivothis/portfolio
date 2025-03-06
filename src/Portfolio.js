import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import northshore from './images/northshore.png';
import auditioncat from './images/auditioncat.jpg';
import geoff from './images/geoff.png';
import aatac from './images/aatac.png';




export default function Portfolio() {




  return (
    <Grid container spacing={10} style={{padding: '0 2em 2em 2em'}} id='projects'>
          <Grid item xs={12} md={12}>
            <h2>A few projects that I've worked on</h2>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box style={{ overflow: 'hidden'}}>
              <img src={northshore} alt="northshore" style={{width: '100%', borderRadius: '15px'}} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box style={{overflow: 'hidden'}}>
              <img src={auditioncat} alt="auditioncat" style={{width: '100%', borderRadius: '15px'}} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box style={{overflow: 'hidden'}}>
              <img src={aatac} alt="aatac" style={{width: '100%', borderRadius: '15px'}} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box style={{overflow: 'hidden'}}>
              <img src={geoff} alt="geoff" style={{width: '100%', borderRadius: '15px'}} />
            </Box>
          </Grid>
        </Grid>

  );
}