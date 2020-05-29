import React from 'react'

import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles'

import ButtonAppBarCollapse from './ButtonAppBarCollapse'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    button: {
        margin: '0 40px',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            display: 'block'
        },
    },
    primaryDark: {
        color: theme.palette.primary.dark
    },
    secondaryDark: {
        color: theme.palette.secondary.dark        
    }
}))

const Navbar = () => {
    const classes = useStyles()
    return (
        <AppBar className={classes.root} position="static">
            <Toolbar>
                <Link to="/login">
                    <Button className={`${classes.button} ${classes.primaryDark}`}>
                        Ingresa
                    </Button>
                </Link>
                <Link to="/about">
                    <Button className={`${classes.button} ${classes.primaryDark}`}>
                        Sobre nosotros
                    </Button>
                </Link>
                <Link to="/">
                    <Button className={`${classes.button} ${classes.primaryDark}`}>
                        Inicio
                    </Button>
                </Link>
                <Typography variant="h4" className={classes.primaryDark} style={{ marginLeft: 60 }}>
                    Ima
                </Typography>
                <Typography variant="h4" className={classes.secondaryDark} style={{ marginRight: 60 }}>
                    gini
                </Typography>
                <Link to="/contact">
                    <Button className={`${classes.button} ${classes.secondaryDark}`}>
                        Contacto
                    </Button>
                </Link>
                <AnchorLink to="/#images">
                    <Button className={`${classes.button} ${classes.secondaryDark}`}>
                        Fotos
                    </Button>
                </AnchorLink>
                <Link to="/register">
                    <Button className={`${classes.button} ${classes.secondaryDark}`}>
                        Registrarse
                    </Button>
                </Link>                
                <ButtonAppBarCollapse>
                    <Link to="/login"><MenuItem>Ingresa</MenuItem></Link>
                    <Link to="/about"><MenuItem>Sobre nosotros</MenuItem></Link>
                    <Link to="/"><MenuItem>Inicio</MenuItem></Link>
                    <Link to="/contact"><MenuItem>Contactos</MenuItem></Link>
                    <AnchorLink to="/#images"><MenuItem>Fotos</MenuItem></AnchorLink>
                    <Link to="/register"><MenuItem>Registrarse</MenuItem></Link>
                </ButtonAppBarCollapse>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar