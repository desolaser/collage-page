import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#8E24AA'
        },
        secondary: {
            main: '#FF4B64'
        }
    },
    typography: {
        fontFamily: 'Muli, Arial, sans-serif',
        h1: {
            fontWeight: 'light',
            lineSpacing: 1.5
        },
        button: {
            fontWeight: 'bold'
        }
    }
});

export default theme;