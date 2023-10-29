import { Typography, Paper} from '@mui/material'

interface ItemProps {
    item: {
        id: number;
        name: string;
        img: string;
    }
}

export default function Item(props: ItemProps)
{

    return (
        <Paper sx={{maxWidth: '100vw', display:'flex', flexDirection:'column', alignItems:'center', borderRadius:'0'}}>
            <img alt={props.item.name} src={props.item.img} style={{width: "90%", height: '60vh', marginTop:'1.5rem', borderRadius: '10px', objectFit: 'cover'}}/>
            <h2>{props.item.name}</h2>
            <Typography sx={{textAlign:'center', width: '70vw'}}>Te damos la bienvenida a el gimnasio Batalla Saiyagym, Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aspernatur incidunt. Quam ipsum, totam in excepturi cupiditate perferendis quo ratione laborum eum rerum, blanditiis laudantium quasi ex a veritatis dolorem.</Typography>
        </Paper>
    )
}
