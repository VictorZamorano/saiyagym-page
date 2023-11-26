import { Grid, Paper, /* Typography, styled */} from '@mui/material';
import { theme } from '../../theme';
interface paperProps {
    id?: string
    marginTop?: number | string
    children?: React.ReactNode
}


export default function ContainerItem({id, marginTop, children}: paperProps) {
    return(
        <>
        <Grid marginTop={marginTop}>
            <Paper
            id={id}
            elevation={6}
            sx={{
            margin: 'auto',
            marginTop: {marginTop},
            marginBottom: 5,
            maxWidth: {xs:'1000px', lg: '1400px'},
            maxHeight: '2000px',
            flexGrow: 1,
            padding: '1rem',
            border: 3,
            borderLeft: {xs: 0, md: 3},
            borderRight: {xs: 0, md: 3},
            borderColor: {xs: theme.palette.secondary.main, md: theme.palette.secondary.main},
            borderRadius: {xs: 0, md: '20px'}}} 
            >
                {children}

            </Paper>
        </Grid>
        </>
    )
}