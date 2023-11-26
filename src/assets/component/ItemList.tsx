import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

interface Coach {
    children: React.ReactNode
    name: string
    carrer: string
    imgCoach: string
    avatarAlt: string

}

export default function ItemsList(props: Coach) {
  return (
      <List sx={{ width: '100%', maxWidth: 360}}>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt={props.avatarAlt} src={props.imgCoach} sx={{width: '150px', height: '150px', marginRight: 2}}/>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="h5" component="span">{props.name}</Typography>
            }
            secondary={
              <React.Fragment>
                <Grid marginLeft={1}>
                  <Typography color="text.primary" marginTop={1}>Profesión:</Typography>
                  <Typography
                    sx={{ display: 'inline'}}
                    component="span"
                    variant="body1"
                    color="text.primary"
                  >
                    {props.carrer}
                  </Typography>
                </Grid>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li"/>
      </List>
  );
}