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
        height: '100%',
        [theme.breakpoints.down('sm')]: {
        }
    },
    paperSecondary: {
        backgroundColor: theme.palette.secondary.main,
        color: 'black',
        borderRadius: 0,
        boxShadow: 0,
        height: '100%'
    },
    primaryDark: {
        color: theme.palette.primary.dark
    },
    title: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            display: 'block'
        }
    }
}))


const Footer = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid item xs>
                <Paper className={classes.paperPrimary}>
                    <Grid container justify="space-between">
                        <Grid item xs={0} sm={0} md={4} style={{ padding: 20 }}>
                            <Typography variant="h5">
                                Compañía
                            </Typography>
                            <Typography variant="subtitle2">
                                Acerca de nosotros
                            </Typography>
                            <Typography variant="subtitle2">
                                Contacto
                            </Typography>
                        </Grid>
                        <Grid item xs={0} sm={0} md={4} style={{ padding: 20 }}>
                            <Typography variant="h5">
                                Dirección
                            </Typography>
                            <Typography variant="subtitle2">
                                Calle Urmeneta
                            </Typography>
                            <Typography variant="subtitle2">
                                Número 334
                            </Typography>
                        </Grid>
                        <Grid item xs={0} sm={0} md={4} style={{ paddingTop: 20 }}>
                            <Typography className={classes.title} variant="h2" color="secondary" align="right">
                                Ima
                            </Typography>
                            <Grid container justify="flex-end" spacing={2} style={{ padding: 20 }}>
                                <Grid item>
                                    <Avatar alt="Facebook" src={FacebookIcon} />
                                </Grid>
                                <Grid item style={{ paddingRight: 20 }}>
                                    <Avatar alt="Instagram" src={InstagramIcon} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div style={{ padding: 25, marginTop: 20 }}>
                        <Typography variant="body1">
                            Copyright @Discretuum 2020
                        </Typography>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paperSecondary}>
                    <Grid container justify="space-between">
                        <Grid item xs={0} sm={0} md={4} style={{ paddingTop: 20 }}>
                            <Typography className={`${classes.title} ${classes.primaryDark}`} variant="h2">
                                gini
                            </Typography>
                            <Grid container justify="flex-start" spacing={2} style={{ padding: 20 }}>
                                <Grid item style={{ paddingLeft: 20 }}>
                                    <Avatar alt="LinkedIn" src={LinkedInIcon} />
                                </Grid>
                                <Grid item>
                                    <Avatar alt="Twitter" src={TwitterIcon} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={0} sm={0} md={4} style={{ padding: 20 }}>
                            <Typography variant="h5" align="right">
                                Email
                            </Typography>
                            <Typography variant="subtitle2" align="right">
                                imagini@imagini.cl
                            </Typography>
                        </Grid>
                        <Grid item xs={0} sm={0} md={4} style={{ padding: 20 }}>
                            <Typography variant="h5" align="right">
                                Teléfono
                            </Typography>
                            <Typography variant="subtitle2" align="right">
                                +596 1234 5678
                            </Typography>
                            <Typography variant="subtitle2" align="right">
                                +596 1234 5678
                            </Typography>
                            <Typography variant="subtitle2" align="right">
                                +596 1234 5678
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Footer