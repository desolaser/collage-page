import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Img from 'gatsby-image'
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({    
    root: {
        margin: '40px 0'
    },
    imagePrimary: {
        borderRadius: 10,
        marginTop: 20,
        boxShadow: `0 24px #5C007A`,
        objectFit: 'cover',
        height: '90%'

    },
    imageSecondary: {
        borderRadius: 10,
        marginTop: 20,
        boxShadow: `0 24px #C6003A`,
        objectFit: 'cover',
        height: '90%'
    }
}))

const Gallery = () => {
    const classes = useStyles()
    const data = useStaticQuery(query)

    return (
        <Grid className={classes.root} container justify="center" spacing={3}>
            {
                data.allFile.edges.map(
                    (edge) => {
                        return (
                            <Grid item xs={12} sm={6} md={3}>
                                <Img 
                                    className={classes.imagePrimary}
                                    key={edge.id}
                                    fluid={edge.node.childImageSharp.fluid}
                                /> 
                            </Grid>
                        )
                    }
                )
            }            
        </Grid>
    )
}

export default Gallery

export const query = graphql`
    query {
        allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
            edges {
                node {
                    id
                    childImageSharp {
                        fluid(maxWidth: 500) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`