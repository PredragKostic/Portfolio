import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Technologies.css';

const Technologies = () => {
  return (
    <div className='technologies'>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="src\media\images\bg.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              JavaScript
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Solid knowledge about React, including Redax, React-Router...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="..\media\images\bg.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Solid knowledge about React, including Redax, React-Router...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="..\media\images\bg.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CSS and SCSS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Solid knowledge about React, including Redax, React-Router...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="..\media\images\bg.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              GitHub
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Solid knowledge about React, including Redax, React-Router...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="..\media\images\bg.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              MUI
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Solid knowledge about React, including Redax, React-Router...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="..\media\images\bg.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              MySql
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Solid knowledge about React, including Redax, React-Router...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Technologies;
