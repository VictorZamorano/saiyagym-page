import { Grid, Typography, Divider} from '@mui/material';
import ContainerItem from '../component/ContainerItem.tsx';


export default function FindUs() {

    const iframeStyle = {
        border:0, 
        borderRadius: 15, 
        width: '100%', 
        height: '100%'
    }

    const gridItemStyle = {
        border: 3, 
        borderRadius: 4.5, 
        marginBottom:2, 
        height: {xs: '300px', lg: '450px'}
    }

    return(
        <>
        <ContainerItem marginTop={10}>
            <Typography variant='h3' textAlign={'center'} marginBottom={3}>¿Donde encontrarnos?</Typography>
            <Divider/>
            <Grid container justifyContent={'space-around'} marginTop={2}>
                <Grid item  xs={12} md={10} lg={5} sx={{...gridItemStyle}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!4v1701011281799!6m8!1m7!1sm_hIVUmD7YUpVupIrta8og!2m2!1d-33.17993121104171!2d-70.66201459022402!3f201.17723296651383!4f-10.432597181446127!5f0.7820865974627469"allow="fullscreen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{...iframeStyle}}></iframe>
                </Grid>
                <Grid item xs={12} md={10} lg={5} sx={{...gridItemStyle}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d295.1551508004787!2d-70.66207250277213!3d-33.180016859684734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d-33.1799402!2d-70.6620186!4m3!3m2!1d-33.1799391!2d-70.66202439999999!5e0!3m2!1ses!2scl!4v1701011191799!5m2!1ses!2scl" allow="fullscreen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{...iframeStyle}}></iframe>
                </Grid>
            </Grid>
        </ContainerItem>
        </>
    )
}