import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

export interface CardProps {
    title: string;
    content: string;
    buttonTitle: string;
}

function CustomCard({title, content, buttonTitle}: CardProps) {
  return (
    <>
      <Card variant='outlined' sx={{ maxWidth: 325, marginBottom:"2.5em", marginRight: "1em", marginLeft: "1em", paddingBottom: ".5em" }}>
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography variant='h5' mb={1} pb={1}>
            {title}
          </Typography>
          <Typography variant='body2'>{content}</Typography>
        </CardContent>
        <CardActions>
          <Button variant='contained' fullWidth>
            {buttonTitle}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default CustomCard;
