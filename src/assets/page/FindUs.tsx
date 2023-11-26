// import { Grid, Paper, Typography, styled} from '@mui/material';
import { Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { theme } from '../../theme.tsx';
// import Carrousel from '../component/Carrousel';


export default function FindUs() {

    

    return(
        <>
        <Grid marginTop={10}>
            <Paper sx={{ 
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
            borderRadius: {xs: 0, md: '20px'}}}>
                <Box>
                </Box>
            </Paper>
        </Grid>
        </>
    )
}