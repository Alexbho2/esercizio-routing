import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';

export default function ActionAreaCard(props) {

  return (
    <Link to={'/about' +'/'+ props.id}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                 ID:{props.id}
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Link>
  );
}
