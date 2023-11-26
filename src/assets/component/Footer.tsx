import { Button, Container, Grid, IconButton, Typography} from '@mui/material';
import { HashLink } from 'react-router-hash-link';

import Box from '@mui/material/Box';
import { theme } from '../../theme.tsx';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

export default function Footer() {

  const footerStyle = {
    color: theme.palette.text.primary,
    marginTop: 2,
    backgroundColor: theme.palette.primary.main,
    borderTop: 3,
    borderColor: theme.palette.secondary.main
  };

  const iconColor = {
    color: 'white'
  }

  const hashStyle = {
    textDecoration: "none",
    color: 'white'
  }  
  
  const hashScroll = (el: HTMLElement ) => {         
    const yCoordinate = el.getBoundingClientRect().top + scrollY;         
    const yOffset = -80;           
    window.scrollTo({top: yCoordinate + yOffset, behavior: 'smooth'});       
  };

  const copyEmail = () =>{
    navigator.clipboard.writeText('saiyagym@gmail.com');
    toast.success("¡Copiado!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }

  return (
    <>
     <Box  sx={{...footerStyle}}>
        <Grid>
          <Grid textAlign={'center'} marginBottom={2} paddingTop={3}>
            <Typography variant='h3' fontWeight={'bold'}>BATALLA SAIYAGYM</Typography>
            <Box marginTop={1}>
              <img src="/batallasaiyayinlogo.png" alt="batallasaiyayinlogo.png" style={{width: '100px', height: '100px'}}/>
            </Box>
          </Grid>
          <Container>
            <Grid container spacing={1} marginBottom={2} textAlign={'center'}>
              <Grid item xs={12} md={4}>
                <Button>
                 { <HashLink smooth to='/#horario' color="inherit" style={{...hashStyle}} scroll={el => {hashScroll(el)}}>Planes</HashLink>}
                  {/* <Button component='a' href='#horario' color="inherit" sx={{textDecoration: 'none'}} onClick={el => {hashScroll(el)}}>Planes</Button> */}
                </Button>
              </Grid>
              <Grid item xs={12} md={4}>
                <Link to={'https://wa.link/h2ovb1'} target='_blank' style={{textDecoration: 'none', color: 'white'}}>
                  <Button color='inherit'>
                    <WhatsAppIcon sx={{mr:1}}/>
                    +56979961461
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button color='inherit' onClick={copyEmail}>
                  <EmailIcon sx={{mr:1}}/>
                    saiyagym@gmail.com
                </Button>
                <ToastContainer/>
              </Grid>
            </Grid>
            <hr />
            <Grid marginTop={4}>
                <Typography variant='h4' color={'secondary'} fontWeight={'bold'} textAlign={'center'} marginBottom={1}>Síguenos</Typography>
                <Grid display={'flex'} justifyContent={'space-around'}>
                  <IconButton sx={{...iconColor}}>
                    <Link to={'https://www.instagram.com/gimnasio_batalla_saiyagym/'} target='_blank' style={{textDecoration: 'none', color: 'white'}}>
                      <InstagramIcon/>
                    </Link>
                  </IconButton>
                  <IconButton sx={{...iconColor}}>
                  <Link to={'https://www.facebook.com/batalla.sayagym'} target='_blank' style={{textDecoration: 'none', color: 'white'}}>
                    <FacebookIcon/>
                  </Link>
                  </IconButton>
                </Grid>
            </Grid>
          </Container>
        </Grid>
     </Box>
    </>
  );
}