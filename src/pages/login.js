import React from "react"

import { Link } from "gatsby"

import theme from "../theme"

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { ThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

import Gallery from '../components/Gallery'

const useStyles = makeStyles(theme => ({    
    paper: {
        backgroundColor: '#F2F2F2',
        padding: 20,
        boxShadow: '0 14px 16px rgba(0, 0, 0, 0.5)',
        width: 600,
        position: 'fixed',
        zIndex: 1,
        top: 100
    },
    input: {
        width: '100%',
        margin: '25px 0'
    }
}))

const Login = () => {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={6}>
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
                            <TextField className={classes.input} label="Password" variant="outlined" type="password"/>
                            <Grid container justify="center" spacing={8}>
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Ingresa
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
                    </Grid>
                </Grid>
                <Gallery />                
            </Container>
        </ThemeProvider>
    )
}

export default Login
