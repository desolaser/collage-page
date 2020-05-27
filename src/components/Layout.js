import React from 'react'

import Container from '@material-ui/core/Container'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = props => {
    return (
        <Container>
            <Navbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </Container>
    )
}

export default Layout