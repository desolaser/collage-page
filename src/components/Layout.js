import React from 'react'

import Container from '@material-ui/core/Container'

import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'

const Layout = props => {
    return (
        <div>
            <SEO />
            <Navbar />
            <Container>
                <main>
                    {props.children}
                </main>
            </Container>
            <Footer />
        </div>
    )
}

export default Layout