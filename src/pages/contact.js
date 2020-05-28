import React from "react"

import { Link } from 'gatsby'

import theme from "../theme"

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

import Layout from '../components/Layout'
import Panel from '../components/Panel'

const useStyles = makeStyles(theme => ({
    container: {
        padding: '40px 0'
    },
    input: {
        width: '100%',
        margin: '25px 0'
    }
}))

const Index = () => {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Container className={classes.container}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={6}>
                            <Panel>
                                <Typography variant="h3" color="primary" align="center" gutterBottom>
                                    Contáctanos
                                </Typography>
                                <Typography variant="h5" color="secondary" align="center" gutterBottom>
                                    Encontraremos una estrategia acorde a tu medida
                                </Typography>
                                <TextField className={classes.input} label="Nombre" variant="outlined"/>
                                <TextField className={classes.input} label="Email" variant="outlined"/>
                                <TextField
                                    className={classes.input}
                                    label="Mensaje"
                                    multiline
                                    variant="outlined"
                                    rows={4}
                                    defaultValue=""
                                />
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
                            </Panel>                            
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            
                        </Grid>
                    </Grid>                    
                </Container>
            </Layout>
        </ThemeProvider>
    )
}

export default Index
