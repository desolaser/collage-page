import React from "react"

import theme from "../theme"

import Image from 'material-ui-image'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

import Layout from "../components/Layout"
import Panel from '../components/Panel'

import image from '../images/showcase/abstract-art-background-blur-564908.jpg'

const useStyles = makeStyles(theme => ({
    container: {
        padding: '40px 0'
    },
    imageCirclePrimary: {
        borderRadius: '50%',
        boxShadow: `0 24px #5C007A`
    },
    imageCircleSecondary: {
        borderRadius: '50%',
        boxShadow: `0 24px #C6003A`
    },
}))

const Index = () => {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Container className={classes.container}>
                    <Grid container justify="center" spacing={5}>
                        <Grid item xs={4}>
                            <Image className={classes.imageCirclePrimary}
                                src={image}
                            />
                        </Grid>                    
                        <Grid item xs={4}>
                            <Panel>
                                <Typography variant="h3" color="primary" align="center" gutterBottom>
                                    Encuentra imágenes de lo que desees
                                </Typography>
                                <Typography variant="h5" color="secondary" align="center" gutterBottom>
                                    La inspiración que necesitas está aquí
                                </Typography>
                                <Grid container justify="center" spacing={8}>
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            Ingresa
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="secondary">
                                            Registrate
                                        </Button>                                    
                                    </Grid>
                                </Grid>
                            </Panel>
                        </Grid>
                        <Grid item xs={4}>
                            <Image className={classes.imageCircleSecondary}
                                src={image}
                            />
                        </Grid>
                        <Grid container justify="center" spacing={5} style={{ padding: '40px 0' }}>
                            <Grid item xs={2}>
                                <Image className={classes.imageCirclePrimary}
                                    src={image}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Image className={classes.imageCirclePrimary} style={{ marginTop: 20 }}
                                    src={image}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Image className={classes.imageCirclePrimary} style={{ marginTop: 40 }}
                                    src={image}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Image className={classes.imageCircleSecondary} style={{ marginTop: 40 }}
                                    src={image}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Image className={classes.imageCircleSecondary} style={{ marginTop: 20 }}
                                    src={image}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Image className={classes.imageCircleSecondary}
                                    src={image}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Layout>
        </ThemeProvider>
    )
}

export default Index
