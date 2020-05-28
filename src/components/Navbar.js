import React from 'react'

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
    }
}))

const Navbar = () => {
    const classes = useStyles()
    return (
        <AppBar className={classes.root} position="static">
            <Toolbar>
                <Button className={classes.button} color="primary">
                    Ingresa
                </Button>
                <Button className={classes.button} color="primary">
                    Sobre nosotros
                </Button>
                <Button className={classes.button} color="primary">
                    Inicio
                </Button>
                <Typography variant="h4" color="primary" style={{ marginLeft: 60 }}>
                    Ima
                </Typography>
                <Typography variant="h4" color="secondary" style={{ marginRight: 60 }}>
                    gini
                </Typography>
                <Button className={classes.button} color="secondary">
                    Contacto
                </Button>
                <Button className={classes.button} color="secondary">
                    Fotos
                </Button>
                <Button className={classes.button} color="secondary">
                    Registrarse
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar