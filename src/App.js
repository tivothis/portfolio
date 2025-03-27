import headshot from './headshot.jpg';
import { useState, useRef } from 'react';
import './App.css';
import { Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Portfolio from './Portfolio';
import Tools from './Tools';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function App() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => setHoveredIcon(icon);
  const handleMouseLeave = () => setHoveredIcon(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Your message has been sent!');
    }, (error) => {
      console.error('Error sending email:', error.text);
      alert('Failed to send your message. Please try again.');
    });

    e.target.reset(); // Reset the form after submission
  };

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
          <Grid container spacing={2} style={{padding: '2em 2em 0 2em', minHeight: '100vh'}} alignItems="center" justifyContent="center">
            <Grid size={{ sm: 12, md: 4}}>

                <img width='300px' style={{ borderRadius: '50%' }} src={headshot} className="headshot" alt="headshot" />

            </Grid>
            <Grid size={{ sm: 12, md: 8 }}>

                <div style={{textAlign: 'left'}}>
                  <h1>Hi, I'm Tony 👋</h1>
                  <p style={{ color: "black" }}>I’m a multidisclipinary web developer, designer and software engineer. I’m passionate about the intersection of technology and the arts. 💻 🎨</p>
                </div>

            </Grid>
            <Grid size={12}>

                <a href={'#projects'}>
                  <ArrowDropDownIcon style={{fontSize: '50px', color: 'white'}} className="bounce" />
                </a>

            </Grid>
          </Grid>

            <Portfolio />

          <Box sx={{ marginTop: { xs: '4em', md: '2em' } }}>
              <Grid container spacing={2} style={{ padding: '2em 2em 0 2em', minHeight: '70vh' }}>
                <Grid size={{ xs: 12, md: 4 }} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <img width="300px" style={{ borderRadius: '50%' }} src={headshot} className="headshot" alt="headshot" />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: '18px', color: "black" }}>
                      I spent the last decade in New York City working professionally in the performing arts as a professional actor and musician. I got interested in web design after helping other artists with their portfolios. I ventured into programming after founding a start up called Audition Cat to help performers keep track of their networks and auditions.
                    </p>
                  </div>
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                  <a href={'#tools'}>
                    <ArrowDropDownIcon style={{ fontSize: '50px', color: 'white' }} className="bounce" />
                  </a>
                </Grid>
              </Grid>
            </Box>

            <Tools />

          <Container minHeight={"50vh"} style={{marginTop:"6em", backgroundColor: "#f5f5dc", padding: "1em"}} >
            <Grid container spacing={2} style={{ minHeight: "70vh"}}>
              <Grid size={{ xs: 12, md:6 }} style={{textAlign: "start"}} display="flex" flexDirection="column" justifyContent="center" >
                <h2>
                  Let's Make Dope Something Together 🚀
                </h2>
                <p style={{ fontSize: "16px", color: "black" }}>
                  I'm currently looking for new opportunities to collaborate on exciting projects. If you're looking for a developer, designer or software engineer, I'd love to hear from you!
                </p>
                <div>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{
                      marginRight: '1em',
                      color: hoveredIcon === 'linkedin' ? '#0077b5' : '#237649', // Change color on hover
                    }}
                    onMouseEnter={() => handleMouseEnter('linkedin')}
                    onMouseLeave={handleMouseLeave}
                    />
                    <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      marginRight: '1em',
                      color: hoveredIcon === 'github' ? '#aaa' : '#237649', // Change color on hover
                    }}
                    onMouseEnter={() => handleMouseEnter('github')}
                    onMouseLeave={handleMouseLeave}
                  />
                  <FontAwesomeIcon
                    icon={faGitlab}
                    style={{
                      color: hoveredIcon === 'gitlab' ? '#fc6d26' : '#237649', // Change color on hover
                    }}
                    onMouseEnter={() => handleMouseEnter('gitlab')}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
              </Grid>
              <Grid size={{ xs: 12, md:6 }} style={{textAlign: "start"}} display="flex" flexDirection="column" justifyContent="center" >
                <h3 style={{ marginLeft:'0.25em', marginBottom: '0' }}>Hit Me Up!</h3>
                  <form ref={form} onSubmit={sendEmail} style={{ marginRight:'1em', textAlign: 'start' }}>
                    <input type="text" name="name" placeholder="Your Name" aria-label="Your Name" required style={{ margin: '0.5em', padding: '0.5em', width:'100%' }} />
                    <input type="email" name="email" placeholder="Your Email" aria-label="Your Email" required style={{ margin: '0.5em', padding: '0.5em', width:'100%' }} />
                    <textarea name="message" placeholder="Your Message" aria-label="Your Message" required style={{ margin: '0.5em', padding: '0.5em', width: '100%' }} />
                    <button type="submit" style={{ marginLeft:'0.5em', padding: '0.5em 1em', backgroundColor: '#237649', color: 'white', border: 'none', borderRadius: '5px' }}>
                      Send
                    </button>
                  </form>
                </Grid>
            </Grid>

          </Container>

        </Container>

      </header>
    </div>
  );
}

export default App;
