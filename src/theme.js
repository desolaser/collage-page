import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#C158DC',
            main: '#8E24AA',
            dark: '#5C007A',
        },
        secondary: {
            light: '#FF8191',
            main: '#FF4B64',
            dark: '#C6003A'
        }
    },
    typography: {
        h1: {
            fontFamily: 'Muli, Arial, sans-serif',
            fontWeight: 'light',
            lineSpacing: 1.5
        },
        h2: {
            fontFamily: 'Muli, Arial, sans-serif',
            fontWeight: 'light',
            lineSpacing: 1.5
        },
        h3: {
            fontFamily: 'Muli, Arial, sans-serif',
            lineSpacing: 1
        },
        h4: {
            fontFamily: 'Muli, Arial, sans-serif',
            lineSpacing: 0.75
        },
        h5: {
            fontFamily: 'Muli, Arial, sans-serif',
            lineSpacing: 0.5
        },
        h6: {
            fontFamily: 'Muli, Arial, sans-serif',
            lineSpacing: 0.25
        },
        subtitle1: {
            fontFamily: 'Muli, Arial, sans-serif',
            fontWeight: 'light'
        },
        subtitle2: {
            fontFamily: 'Muli, Arial, sans-serif',
            fontWeight: 'semibold'
        },
        body1: {
            fontFamily: 'Roboto, Arial, sans-serif',
            lineSpacing: 1
        },
        body2: {
            fontFamily: 'Roboto, Arial, sans-serif',
            lineSpacing: 0.4
        },
        button: {
            fontFamily: 'Muli, Arial, sans-serif',
            fontWeight: 'bold',
            lineSpacing: 1.5
        },
        caption: {
            fontFamily: 'Roboto, Arial, sans-serif',
            fontWeight: 'light',
            lineSpacing: 1.5
        },
        overline: {
            fontFamily: 'Roboto, Arial, sans-serif',
            fontWeight: 'light',
            lineSpacing: 1.5
        }
    },
    overrides: {
        MuiButton: {
            root: {
                padding: '10px 20px'
            }
        }
    }
});

export default theme;