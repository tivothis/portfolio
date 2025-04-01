import { faReact, faHtml5, faCss, faJs, faNodeJs, faDocker, faAws } from '@fortawesome/free-brands-svg-icons';
import Grid from '@mui/material/Grid2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Tools() {

  const iconColor = '#25794c';

  return (

<Grid container spacing={2} id="tools">
            <Grid size={12} >
              <div style={{textAlign: 'center'}}>
                  <h2>My Tool Kit</h2>
                  <p style={{ color: "black" }}>Here are a few technologies that I've worked with</p>
              </div>
            </Grid>
            <Grid size={{xs: 4, sm: 4, md: 2}}  style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faReact} style={{ fontSize: '50px', color: iconColor }} />
                <p style={{margin: 0, fontSize: "16px", color: "black"}} >React</p>
              </div>
            </Grid>
            <Grid size={{xs: 4, sm: 4, md: 2}}  style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faHtml5} style={{ fontSize: '50px', color: iconColor }} />
                <p style={{margin: 0, fontSize: "16px", color: "black"}}>HTML</p>
              </div>
            </Grid>
            <Grid size={{xs: 4, sm: 4, md: 2}}  style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faCss} style={{ fontSize: '50px', color: iconColor }} />
                <p style={{margin: 0, fontSize: "16px", color: "black"}}>CSS</p>
              </div>
            </Grid>
            <Grid size={{xs: 4, sm: 4, md: 2}}  style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faJs} style={{ fontSize: '50px', color: iconColor }} />
                <p style={{margin: 0, fontSize: "16px", color: "black"}}>Javascript</p>
              </div>
            </Grid>
            <Grid size={{xs: 4, sm: 4, md: 2}}  style={{textAlign: 'center'}}>
              <div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACHUlEQVR4nO2WsUscURDGDxMJSBqVhNic4XZG5LDSLoViI7IzkaQ4TIo0KVIIplG5mVPZKiDYhJB/IFZ2KSwtAokpE0gRUgWCGFKkkRSpgpF3J2Hz3GNXUN9beB8MW+zse/Ob7+3uVCpBQUFnEgq/R+W/PgcI7eWDeFAoFogAgh64gMERdd95DI6o+25jcCQl153G4Igl153G4Igl153G4Igl153G4Igl153G4Iilc+1KF6XXAKEvqLSEzXiytnT/ZlWo3wQK1SKNp809ED7wG0T4+cSTid68fBDa8xYElHeL59PHCwVB5Q07MtY7ldN+thVTOs8cKxB+BcpfQek7Kr/BFq+Myr3BzvG7WJBcl7rlDS/Ht6yub3XJPUSl396CDCXcZ4HsePX5LbreiPJoOu/2ajyMQh9KB4LKa6c2T5IelLsPs94Jb0FA6RfoXD2ziEbjCjTpMSr/8B7kBOZntBrf6VYL6OyNrH+IdyCdoD8g/KKezAxk1WM+Cij0uQQg/+LQvDf1pHHdXmNEeL5MIJ3jJvytpjRmH7HSgWBnkHz9H8ji7DVvQSKhOTNvofJRhivP0mvUmlz1FsT8ANtFrhGi8FMQetmetYQX7Ik4En7kPUieppKpqyD0qdQgQwn3gdJ2kX2cgZi5CpQ2UelB1OJxA1YV6jdXEJ4BoXUU2i+6z7mDXFZUAoiWzBFQeue6SMwJEH6bCxIUFFRJ6xiXMoa+VTILEwAAAABJRU5ErkJggg==" alt="typescript"/>

                <p style={{margin: 0, fontSize: "16px", color: "black"}}>Typescript</p>
              </div>
            </Grid>
            <Grid size={{xs: 4, sm: 4, md: 2}}  style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faNodeJs} style={{ fontSize: '50px', color: iconColor }} />
                <p style={{margin: 0, fontSize: "16px", color: "black"}}>NodeJs</p>
              </div>
            </Grid>
            <Grid size={{xs: 4, sm: 4, md: 2}}  style={{textAlign: 'center'}}>
              <div>
              <img src="data:image/png;base64,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" alt="postgreesql" />

                <p style={{margin: 0, fontSize: "16px", color: "black"}}>Postgresql</p>
              </div>
            </Grid>
            <Grid size={{xs: 4, sm: 4, md: 2}}  style={{textAlign: 'center'}}>
              <div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD4UlEQVR4nO2ZS0hVQRjHD/ZYtOyxiB6LnDGT2iSFQSARlTBjinCpdBERPRZR1EJnjtYhooysQK20oujlIqWHTyo1g7CHUVJZWYtKC5J8VFiomXfiO6ZpWmfOnPFWcP/wwYV7nfl9Z2a++Z9PwwgqqKC8y+cbFcroAsyJiRi9gBl5gjltQ5x+hYDPmJM6+zv4jRkbZVhWiPG3FZoaNw1zuhcx+hZzKlzGG8xIOkqOmRpwcMRjJiFOjyJGuhTABwWyxyA5YdvoxADB00TEaKtX8CGJcNKCOVk5YuCR6yPHIE6O6wbHQ1ckF+bSCj/ZouMQI2UjDY/7V4OWwpz6nnwA4fHPJMojLN9Yzwno3jZHrp8Xyw5ulPw9yfEGz0iSbviq+hpXfxPG6Aol+HAWPwFx0qwLPrcqX/j9fpFweKu7rcRoq1KJhTqvAzzMjBWnqgsF6MrjasVxyGF38MkxU3VcUgB/5laRDd/j9wuauUlpHMRI14wUOl06AbAHOuDP3S4RfSqsrfK2moyky9FbVojtUzzC590p7Yf/1tMjlh7Y4CkBxOhbMI2O/L2uUn2i8NTl4sL9CjFQ+feueXv6/EeYZL7E9iGmF/hLDyoHwXd/6xaL9q3VkgDilDkmgDi9qAp/ufa6+FVwDrQ8fQ7ngBbIrECd24FnpcWLskc3xXCCFcm4cuqPkXSMya7AI+cVcGmVAf5qXbVQ1YumBrEwfbVkAqRZIgH5+h+RFi/Kn9xWhq9trBfzdq1ys9qd2hIA+Iqnd5ThK5/dFXN2JLg9B53athA4yqM3Chyj/t2rIfBQZsNT41wfYqktpHKIfxdRu5NES/vHQfCnq4vETDNWaTwkdYgVy+hwtzFY5z6BE4WKE4gyaupIwLp8ZJCVMC9meR4TMZLivAJmbJTXiRZnrBNfujps+K7ur2JT3h4tWzKM0XlyZo6RRtVJ4HBCeQR96vgsEiUvKewYpEG6mwfWVXWizPJzNnxz+wexPGuzJngKB3iPFLyXF5r47C22eXvT1iSW7F+vDR5z2olNMkU6AXsVOMlxM8ns7Qm2LXje9FraGmD5p59tuFWEtXS8m5f6s7eKRc3Lx2LuzhWa4UmLct8UepUyk6w+kWbbCgVrIBwTYMRneBH0Kp0mWXNyu5I1wM7whwzP8vlGIUYu6YZzhqcl0Vb0aH3NXU5LA5cAKdbW3B3Y5HVbmVS3TbSuJz+coFeps+WI+4LR954PrJu+KbT77AvGO3wn1Hko20agBbejbTtUvBMjjWAPXN+wIyIwgCaZD30b8Ozw4gFvdmBHesP+/ND+jpEU21X+C/9mDSoo4//Xdy0/n5YAPBQgAAAAAElFTkSuQmCC" alt="chakra-ui" />
                <p style={{margin: 0, fontSize: "16px", color: "black"}}>Chakra UI</p>
              </div>
            </Grid>
            <Grid size={{xs: 4, sm: 4, md: 2}}  style={{textAlign: 'center'}}>
              <div>
              <img src="data:image/png;base64,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" alt="wordpress--v1" />
                <p style={{margin: 0, fontSize: "16px", color: "black"}}>WordPress</p>
              </div>
            </Grid>
            <Grid size={{xs: 4, sm: 4, md: 2}}  style={{textAlign: 'center'}}>
              <div>
                <FontAwesomeIcon icon={faDocker} style={{ fontSize: '50px', color: iconColor }} />
                <p style={{margin: 0, fontSize: "16px", color: "black"}}>Docker</p>
              </div>
            </Grid>
            <Grid size={{xs: 4, sm: 4, md: 2}}  style={{textAlign: 'center'}}>
              <div>
              <FontAwesomeIcon icon={faAws} style={{ fontSize: '50px', color: iconColor }} />
                <p style={{marginTop: "5px", fontSize: "16px", color: "black"}}>Amazon Web Services</p>
              </div>
            </Grid>
            <Grid size={{xs: 4, sm: 4, md: 2}}  style={{textAlign: 'center'}}>
              <div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAELklEQVR4nO1ZyYscZRRvIm7oxA3BJQvp+l71MC6gE6OCC2jU7n6ve6LQoPkDRi8eZOzUe9WDdVGiBz0IggpqPHjUoHMQBZeDeNAkeNEIkcRkXJK4BFzi6MGR99VXM6VMd/WQLruVevDRVNf73vf93u9tTZdKhRRSyKoEGOsgNA9CiyO65v2QatlARhvEol2MR/oBsvhfWKUCiAyfBSgYkeF7HgpGZPjehoKRlOTgvR+B6QUvaEyNc82/euaOc3RVZpsVX2gbCL5odUaXETxpBB8tB1vPyzpTdQzTY7pn1IDMV8La5iWbjFsN40sgeAAYfzVCvxjG/YbpeX2X6FXC2mbD9NUQgOBhYNzpB3TTeHjXpZPTk6frp4mqa9WWhpJh/CDTDuP75VkE3WN2VNf1A2YwQJh+A8EZ82D1zF62Ku3mZYZxNzCesKET4paJ6M4LNUdM0LwGhGaB6bjaNEw/gODNus9nui4+I1cgeAy4fr1VjqI1Rmg7CM4Zpm9AaEHDxwjt8hgnE5sbo1vP6naesmeYXk3AeNww7h6P5wdEveRAAGMZBPf10P8TBJ9R72ceqg5xYIDp3Rj81Pm9qtkpMoIzSyCSkBA8BIzTGtsTUesMmxeCTxrG32Mv48cbH65f0k/lAmfTF7rdsmULxMCB4GGbE1G0ZpkJfKvSbo6tZMdIcwKYvnB6ByDEy7PONkKPxM6h5+xdArx78EAYd7rDtjtPH+wGYvli1YuBca/T/zyLGRMXANXdr8/aNAcOREts/B7nHLDpTGOlUkmrlBH6xO3Z20u30m6OuXD9Kf08UCDaH6zX4uq0qDnx9334IQjtGedtF63IjNAe7Sm9zjZRdW3uQDSRYyBxEifPKSA2b4zgR1kh1028kK51OfJZbqGlzS3NiNeZWp/ep++Xk5veW/dQ6+zVAjFMkcuRZ+O71O/Jo2rZrguMb7jv7v/nXr/T2LQ8XuCcjiz9grCDo+B3cT42brPAhHblVrWAG/cl/WOlECoLXplcCITe7CvMbEPE3c7uO0sNkfFEHkCO2FFD+4grqcD4djIgpqUS1K4CxqOOmX3JQNidCXrNgfjedKpe7DB6ont0nGpnD6mdGk+OxfFMXxqmB8oBbdBQSnLDFxrXXuPAnDRMT5uwcYP9UdVujmliawNM2FMQflLiQ9yS99C44DHdaC/aaWzSkroCc0eTgXED4wWG6eV47upuV8MpYcLrTK03gl9n3GMA0y/T8QSMG1fuBaHX9XAj9AcIfQuMr6RHfG9H4wpgfMqWaDvS48/A+KlWpySxEyZMHyAGA8QxYxiDXuP5aiRObJsTC8P6qTtvLxDUb7F9ptU6rZ+LT0StczWHdCi0JbZHdYJ/CcjQVqkAIsNnAQpGZPieh4IRGb63oWDk//j3tB9STRVHGYTH9WomkEIKKaSUlr8Ac5jelpp7JsUAAAAASUVORK5CYII=" alt="adobe-creative-cloud" />
                <p style={{margin: 0, fontSize: "16px", color: "black"}}>Adobe Creative Cloud</p>
              </div>
            </Grid>
          </Grid>
  );
}