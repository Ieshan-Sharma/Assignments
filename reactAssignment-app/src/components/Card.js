import React from 'react'
import { Grid, Paper } from '@material-ui/core';

export const Card = (props) => {
  return (
    <Grid>
      <Paper className='cardStyle'>
        <h2>
          {props.title}
        </h2>
        <p>{props.one}</p>
        <p>{props.two}</p>
        <p>{props.three}</p>
        <p>{props.four}</p>
        <p>{props.five}</p>


      </Paper>

    </Grid>
  )
}

