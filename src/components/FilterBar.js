import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

import { makeStyles } from '@material-ui/core/styles'

import ButtonAppBarCollapse from './ButtonAppBarCollapse'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.dark,
        flexGrow: 1,
        alignItems: 'center',
    },
    button: {
        backgroundColor: theme.palette.primary.dark,
        margin: '0 40px',
        color: 'white',
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
    },
    search: {
        backgroundColor: 'white',
        color: "#F2F2F2",
        borderRadius: 10,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            display: 'block'
        },
    }
}))

const Navbar = () => {
    const classes = useStyles()
    return (
        <AppBar className={classes.root} position="static">
            <Toolbar>
                <Typography variant="h4">
                    Tags
                </Typography>  
                <Button className={classes.button}>
                    Diseño
                </Button>
                <Button className={classes.button}>
                    Hogar
                </Button>     
                <Button className={classes.button}>
                    Juegos
                </Button>     
                <Button className={classes.button}>
                    Animación
                </Button>     
                <Button className={classes.button}>
                    Datos
                </Button>
                <Button className={classes.button}>
                    Más tags
                </Button>
                <TextField className={classes.search} label="Search Bar" variant="filled"/>
                <ButtonAppBarCollapse>
                    <MenuItem>Diseño</MenuItem>
                    <MenuItem>Hogar</MenuItem>
                    <MenuItem>Juegos</MenuItem>
                    <MenuItem>Animación</MenuItem>
                    <MenuItem>Datos</MenuItem>
                    <MenuItem>Más tags</MenuItem>
                </ButtonAppBarCollapse>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar