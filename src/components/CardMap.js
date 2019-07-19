import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import map from '../image/map.png';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    background: '#AFC0D0',
    color: 'white',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

function MapCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title='MB.io Cafe' color='white' />
      <a href='https://goo.gl/maps/fXBf5gF2nvWJEQF17' target='_blank'>
        <CardMedia className={classes.media} image={map} title='Location' />
      </a>
      <CardContent>
        <Typography variant='body1' color='white' component='p'>
          Breitscheidstraße 10, 70174 Stuttgart, Germany
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MapCard;
