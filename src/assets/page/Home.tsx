import { Grid, Paper, Typography, styled} from '@mui/material';
import Box from '@mui/material/Box';
import { theme } from '../../theme.tsx';
import Carrousel from '../component/Carrousel';


export default function HomePage() {
/* const heroImg = "./public/heroImg.jpg"

  const bgImage = {
    heroContainer:{
      height: '35vh',
      width: '100%',
      backgroundImage: 'url('+heroImg+')',
      backgroundSize: 'cover'
    }
  } */

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  const whiteBorder = {
    border: 4,
    borderColor: '#fff',
    borderRadius: '20px'
  }

  const centerTitle = {
    textAlign: 'center'
  }

  const justifyText = {
    textAlign: 'justify'
  }

  const strokeText = {
  webkitTextStrokeWidth: '1px',
  webkitTextStrokeColor:' black'
  }

  return (
    <>
        {/* <img className="sayagym-banner" src="./public/sayagym-banner.png" alt="sayagym-banner" /> */}
        {/* <img alt="sayagym-banner" src="./public/heroImg.jpg" style={{width: "100%", height: '40vh', objectFit: 'cover'}}/> */}
        {/* <Grid container justifyContent={'flex-end'} style={bgImage.heroContainer}>
          <Typography sx={{color: theme.palette.text.secondary}}>BATALLA SAIYAGYM</Typography>
        </Grid> */}
        <Grid marginTop={8} marginBottom={5}>
          <Box>
            <Carrousel />
          </Box>
        </Grid>

      <Paper
      id='horario'
      elevation={6}
      sx={{
        margin: 'auto',
        marginBottom: 5,
        maxWidth: '1300px',
        maxHeight: '2000px',
        flexGrow: 1,
        padding: '1rem',
        border: 3,
        borderLeft: {xs: 0, md: 3},
        borderRight: {xs: 0, md: 3},
        borderColor: {xs: theme.palette.secondary.main, md: theme.palette.secondary.main},
        borderRadius: {xs: 0, md: '20px'},  
}} 
    >
        <Grid className='schedulesImg' container spacing={2} display="flex" justifyContent="center" alignItems="center">
          <Grid margin={1}>
          <Typography variant='h3' sx={{...strokeText}}>Horarios</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Img src="/schedules1.png" alt="schudeles1" sx={{...whiteBorder}}/>
          </Grid>
          <Grid item xs={12} md={3}>
            <Img src="/schedules2.png" alt="schudeles2" sx={{...whiteBorder}}/>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{...whiteBorder, p: 1, color: '#fff'}}>
              <Box sx={{...centerTitle}}>
                <Typography variant='h5' color={'secondary'} fontWeight={'bold'}>Horario Fijo:</Typography> 
                <Box sx={{...justifyText}}>
                    <Typography variant='body1'>Valor de $30.000 mensual. Clases de dos horas y se debe inscribir en uno de los dos bloques desde las 07:00 AM a 21:00 PM</Typography>
                </Box>
              </Box>
              <Box sx={{...centerTitle}}>
                <Typography variant='h5' color={'secondary'} fontWeight={'bold'}>Horario Libre 1: Cupos limitados.</Typography>
                <Box sx={{...justifyText}}>
                  <Typography variant='body1'>Valor de $40.000 mensual. Tres veces por semana, días y horarios libres pero debe realizarse en los bloques de 2 horas indicados en las imagenes.</Typography>
                </Box>
              </Box>
              <Box sx={{...centerTitle}}>
                <Typography variant='h5'color={'secondary'} fontWeight={'bold'}>Horario Libre 2: Cupos limitados</Typography> 
                <Box sx={{...justifyText}}>
                  <Typography variant='body1'>Valor de $50.000 mensual. Seis veces por semana y horarios libres pero debe realizarse en los bloques de 2 horas indicados en las imagenes.</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}