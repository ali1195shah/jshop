import React from 'react'
import Jewl from './Jewl/Jewl'
import Grid from '@material-ui/core/Grid'

import useStyles from './styles';

const Jewls = ({jewls}) => {

    const classes = useStyles();

    return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {jewls.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Jewl product={product} 
            // onAddToCart={onAddToCart}
             />
          </Grid>
        ))}
      </Grid>
    </main>
    )
}

export default Jewls
