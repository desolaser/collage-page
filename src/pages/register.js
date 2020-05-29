import React from "react"

import { Link } from "gatsby"

import theme from "../theme"

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { ThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

import Gallery from '../components/Gallery'
import SEO from '../components/SEO'

const useStyles = makeStyles(theme => ({    
    paper: {
        backgroundColor: '#F2F2F2',
        padding: 20,
        boxShadow: '0 14px 16px rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0)',
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            top: 10,
        },
        [theme.breakpoints.up('md')]: {
            width: '40%',
            top: 100,
        },
    },
    input: {
        width: '100%',
        margin: '15px 0'
    }
}))

const Register = () => {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <SEO />
            <Container>
                <Paper className={classes.paper}>
                    <Grid container justify="center">
                        <Grid item>
                            <Typography variant="h4" color="primary">
                                Ima
                            </Typography>                            
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" color="secondary">
                                gini
                            </Typography>                            
                        </Grid>
                    </Grid>
                    <TextField className={classes.input} label="Email" variant="outlined"/>
                    <TextField className={classes.input} label="Nombre usuario" variant="outlined"/>
                    <TextField className={classes.input} label="Edad" variant="outlined"/>
                    <TextField className={classes.input} label="Contraseña" variant="outlined" type="password"/>
                    <TextField className={classes.input} label="Repetir contraseña" variant="outlined" type="password"/>
                    <FormControlLabel
                        className={classes.input}
                        control={
                        <Checkbox
                            checked={true}
                            onChange={() => true}
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Acepto los términos de servicio"
                    />
                    <Grid container justify="center" spacing={8}>
                        <Grid item>
                            <Button variant="contained" color="primary">
                                Registrarse
                            </Button>
                        </Grid>
                        <Grid item>
                            <Link to="/">
                                <Button variant="contained" color="secondary">
                                    Volver
                                </Button>
                            </Link>                                   
                        </Grid>
                    </Grid>
                </Paper> 
                <Gallery />                
            </Container>
        </ThemeProvider>
    )
}

export default Register
