import React from 'react'

import { Link } from "gatsby"

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    button: {
        margin: '0 40px'
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
                <Button className={`${classes.button} ${classes.primaryDark}`}>
                    Sobre nosotros
                </Button>
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
                <Button className={`${classes.button} ${classes.secondaryDark}`}>
                    Contacto
                </Button>
                <Button className={`${classes.button} ${classes.secondaryDark}`}>
                    Fotos
                </Button>
                <Link to="/register">
                    <Button className={`${classes.button} ${classes.secondaryDark}`}>
                        Registrarse
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar