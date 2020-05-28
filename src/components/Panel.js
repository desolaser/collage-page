import React from 'react'

import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#F2F2F2',
        padding: 20,
        boxShadow: '0 14px 16px rgba(0, 0, 0, 0.5)'
    }
}))

const Panel = props => {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            {props.children}
        </Paper>
    )
}

export default Panel