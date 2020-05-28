import React from 'react'

import Container from '@material-ui/core/Container'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = props => {
    return (
        <div>
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