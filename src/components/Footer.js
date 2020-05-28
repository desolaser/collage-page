import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

import FacebookIcon from '../images/social/Facebook.png'
import InstagramIcon from '../images/social/Instagram.png'
import LinkedInIcon from '../images/social/LinkedIn.png'
import TwitterIcon from '../images/social/Twitter.png'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paperPrimary: {
        backgroundColor: theme.palette.primary.dark,
        color: 'white',
        borderRadius: 0,
        boxShadow: 0,
        height: 250
    },
    paperSecondary: {
        backgroundColor: theme.palette.secondary.main,
        color: 'black',
        borderRadius: 0,
        boxShadow: 0,
        height: 250
    },
    primaryDark: {
        color: theme.palette.primary.dark
    }
}))


const Footer = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid item xs>
                <Paper className={classes.paperPrimary}>
                    <div style={{ padding: 30, display: 'inline-block' }}>
                        <Typography variant="h5">
                            Compañía
                        </Typography>
                        <Typography variant="subtitle2">
                            Acerca de nosotros
                        </Typography>
                        <Typography variant="subtitle2">
                            Contacto
                        </Typography>
                    </div>
                    <div style={{ paddingTop: 30, float: 'right', display: 'inline-block' }}>
                        <Typography variant="h2" color="secondary">
                            Ima
                        </Typography>
                        <Grid container justify="flex-end" spacing={2}>
                            <Grid item>
                                <Avatar alt="Facebook" src={FacebookIcon} />
                            </Grid>
                            <Grid item style={{ paddingRight: 20 }}>
                                <Avatar alt="Instagram" src={InstagramIcon} />
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{ marginTop: 30, padding: 25 }}>
                        <Typography variant="body1">
                            Copyright @Discretuum 2020
                        </Typography>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paperSecondary}>
                    <div style={{ padding: 30, float: 'right', display: 'inline-block' }}>
                        <Typography variant="h5">
                            Dirección
                        </Typography>
                        <Typography variant="subtitle2">
                            Calle Urmeneta, número 334
                        </Typography>
                    </div>
                    <div style={{ padding: 30, float: 'right', display: 'inline-block' }}>
                        <Typography variant="h5">
                            Email
                        </Typography>
                        <Typography variant="subtitle2">
                            imagini@imagini.cl
                        </Typography>
                    </div>
                    <div style={{ padding: 30, float: 'right', display: 'inline-block' }}>
                        <Typography variant="h5">
                            Teléfono
                        </Typography>
                        <Typography variant="subtitle2">
                            +596 1234 5678
                        </Typography>
                        <Typography variant="subtitle2">
                            +596 1234 5678
                        </Typography>
                        <Typography variant="subtitle2">
                            +596 1234 5678
                        </Typography>
                    </div>
                    <div style={{ paddingTop: 30, display: 'inline-block' }}>
                        <Typography className={classes.primaryDark} variant="h2">
                            gini
                        </Typography>
                        <Grid container justify="flex-start" spacing={2}>
                            <Grid item style={{ paddingLeft: 20 }}>
                                <Avatar alt="LinkedIn" src={LinkedInIcon} />
                            </Grid>
                            <Grid item>
                                <Avatar alt="Twitter" src={TwitterIcon} />
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Footer