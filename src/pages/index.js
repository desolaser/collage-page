import React from "react"

import Layout from "../components/Layout"
import theme from "../theme"
import { ThemeProvider } from '@material-ui/core/styles'

const Index = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                Hello world!
            </Layout>
        </ThemeProvider>
    )
}

export default Index
