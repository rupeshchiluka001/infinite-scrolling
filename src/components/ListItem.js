import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function ListItem(props) {

    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
        }}>      
        <Grid
          container
          direction="row"
          flexWrap="nowrap"
          justifyContent="space-between"
          alignItems="center"
          style={{
            maxWidth: 400,
            padding: 10,
            borderRadius: 5,
            boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'
          }}>
            <Grid item>
              { props.name }
            </Grid>
            <Grid item>
              <Avatar alt={props.name} src={props.imgUrl} />
            </Grid>
        </Grid>        
      </Box>
    );
  }