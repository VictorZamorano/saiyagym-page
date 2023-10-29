import Carousel from 'react-material-ui-carousel'
import { theme } from '../../theme.tsx';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Item from './CarrouselComponents/Item.jsx';

export default function Carrousel()

{ 
    const items = [
        {
            id: 1,
            name: "Random Name #1",
            img: "/gymAbout.jpg"
        },
        {
            id: 2,
            name: "Random Name #2",
            img: "/gokuAbout.png"
        }
    ]

    return (
        <Carousel
        // NextIcon={<ArrowForwardIosIcon/>}
        // PrevIcon={<ArrowBackIosIcon/>}
        sx={{borderTop: 3,
            borderBottom: 3,
            borderColor: theme.palette.secondary.main,}}
        indicatorContainerProps={{
            style: {
              marginTop: '0',  
              backgroundColor: theme.palette.primary.main,
              zIndex: 1,
            //   marginTop: "-200px",
            //   marginBottom: "80px",
              position: "relative"
            }
          }}
    >
            {
                items.map( (item) => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}