import { Divider, Grid, Typography} from "@mui/material";
import ContainerItem from "../component/ContainerItem";
import ItemsList from "../component/ItemList";

interface Coach{
    name: string,
    carrer: string,
    img: string
    avatarAlt: string
}

export default function TeamPage() {

    const coachingTeam: Coach[] = [
        {name: 'Goku', carrer: 'Artista marcial', img: '/goku.png', avatarAlt: 'Goku'},
        {name: 'Vegeta', carrer: 'Artista marcial', img: '/vegeta.jpg', avatarAlt: 'Vegeta'},
        {name: 'Piccolo', carrer: 'Artista marcial', img: '/Piccolo.jpg', avatarAlt: 'Piccolo'},
        {name: 'Goku', carrer: 'Artista marcial', img: '/goku.png', avatarAlt: 'Goku'},
        {name: 'Vegeta', carrer: 'Artista marcial', img: '/vegeta.jpg', avatarAlt: 'Vegeta'},
        {name: 'Piccolo', carrer: 'Artista marcial', img: '/Piccolo.jpg', avatarAlt: 'Piccolo'},
        {name: 'Goku', carrer: 'Artista marcial', img: '/goku.png', avatarAlt: 'Goku'},
        {name: 'Vegeta', carrer: 'Artista marcial', img: '/vegeta.jpg', avatarAlt: 'Vegeta'},
        {name: 'Piccolo', carrer: 'Artista marcial', img: '/Piccolo.jpg', avatarAlt: 'Piccolo'},
    ]
    return(
        <>
        <ContainerItem marginTop={10}>
            <Typography variant="h3" align="center" >Profesores</Typography>
            <Divider variant="inset" sx={{marginBottom: 3}}></Divider>
            <Grid container justifyContent={"space-between"}>
               {coachingTeam.map((c) => 
               <ItemsList key={c.name} name={c.name} carrer={c.carrer} imgCoach={c.img} avatarAlt={c.avatarAlt}>
               </ItemsList>)}
            </Grid>
        </ContainerItem>
        </>
    )
}

