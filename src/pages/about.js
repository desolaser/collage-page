import React from 'react'

import theme from '../theme'

import Image from 'material-ui-image'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { ThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

import Layout from '../components/Layout'

import Cloud from '../images/about/Cloud.png'
import Geo from '../images/about/Geo.png'
import Phone from '../images/about/Phone.png'
import Share from '../images/about/Share.png'
import Star from '../images/about/Star.png'
import World from '../images/about/World.png'

const useStyles = makeStyles(theme => ({
    container: {
        padding: '40px 0'
    },
    services: {
        backgroundColor: '#F2F2F2',
        boxShadow: '0 14px 16px rgba(0, 0, 0, 0.5)',
        height: 300,
        padding: 20
    }
}))

const Contact = () => {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Container className={classes.container}>
                    <Grid container spacing={8}>
                        <Grid item xs={2}>
                            <Image src={Phone} />
                        </Grid>
                        <Grid item xs={2}>
                            <Image src={Geo} />
                        </Grid>
                        <Grid item xs={4}>
                                <Typography variant="h3" color="primary" align="center" gutterBottom>
                                    ¿Qué es imagini?
                                </Typography>
                                <Typography variant="body1" color="secondary" align="center">
                                    Esto es un portal de imágenes en el cual puedes publicar
                                    y compartir tu arte, tus diseños e imágenes. Nosotros
                                    nos encargaremos de hacerlas visibles y de que puedas 
                                    compartirlas de forma fácil y amigable.
                                </Typography>
                        </Grid>
                        <Grid item item xs={2}>
                            <Image src={World} />
                        </Grid>
                        <Grid item item xs={2}>
                            <Image src={Star} />
                        </Grid>
                    </Grid>
                    <Grid container justify="space-around" spacing={2}>
                        <Grid item item xs={2}>
                            <Image src={Share} />
                        </Grid>
                        <Grid item item xs={2}>
                            <Image src={Cloud} />
                        </Grid>
                    </Grid>
                    <Typography variant="h4" color="primary" align="center" style={{ margin: '40px 0' }}>
                        Servicios
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs>
                            <Paper className={classes.services}>
                                <Typography variant="h4" color="primary" align="center" gutterBottom>
                                    Marketing
                                </Typography>
                                <Typography variant="body1" color="secondary" align="center">
                                    Podemos hacer que tu marca publicitaria e imagen corporativa sea
                                    más conocida, utilizando herramientas como google analitics, redes sociales y más.
                                </Typography> 
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.services} style={{ marginTop: 40 }}>
                                <Typography variant="h4" color="primary" align="center" gutterBottom>
                                    Diseños web
                                </Typography>
                                <Typography variant="body1" color="secondary" align="center">
                                    Nuestros diseños te ayudarán a obtener los resultados que
                                    siempre deseaste en tus sitios web y otros proyectos
                                </Typography> 
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.services} style={{ marginTop: 40 }}>
                                <Typography variant="h4" color="primary" align="center" gutterBottom>
                                    Imágenes corporativas
                                </Typography>
                                <Typography variant="body1" color="secondary" align="center">
                                    Te ayudaremos a crear tu imágen corporativa profesional, de forma
                                    que el cliente sepa que será bien atendido
                                </Typography> 
                            </Paper>                            
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.services}>
                                <Typography variant="h4" color="primary" align="center" gutterBottom>
                                    SEO
                                </Typography>
                                <Typography variant="body1" color="secondary" align="center">
                                    Gracias al Search engine optimization, podemos aumentar las visitas
                                    en tu página web haciendo que salga en los primeros puestos en el 
                                    buscador de google
                                </Typography>  
                            </Paper>                           
                        </Grid>
                    </Grid>
                </Container>
            </Layout>
        </ThemeProvider>
    )
}

export default Contact
