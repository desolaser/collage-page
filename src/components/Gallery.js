import React from 'react'

import Image from 'material-ui-image'
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles'

import image from '../images/showcase/abstract-art-background-blur-564908.jpg'

const useStyles = makeStyles(theme => ({    
    imagePrimary: {
        borderRadius: 10,
        boxShadow: `0 24px #5C007A`
    },
    imageSecondary: {
        borderRadius: 10,
        boxShadow: `0 24px #C6003A`
    }
}))

const Gallery = () => {
    const classes = useStyles()
    return (
        <Grid container justify="center" spacing={3} style={{ marginTop: 20 }}>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imagePrimary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imagePrimary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imageSecondary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imageSecondary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imagePrimary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imagePrimary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imageSecondary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imageSecondary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imagePrimary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imagePrimary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imageSecondary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imageSecondary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imagePrimary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imagePrimary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imageSecondary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imageSecondary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imagePrimary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imagePrimary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imageSecondary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Image className={classes.imageSecondary} style={{ marginTop: 20 }}
                    src={image}
                />
            </Grid>
        </Grid>
    )
}

export default Gallery