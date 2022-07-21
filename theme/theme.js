import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
    typography: {
        fontFamily: [
            'Nunito',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
          ].join(','),
    },
    breakpoints: {
        values: {
            xxs: 0, // small phone
            xs: 300, // phone
            sm: 600, // tablets
            md: 900, // small laptop
            lg: 1200, // desktop
            xl: 1536 // large screens
        }
    },
    palette: {
        primary: {
            main: '#283149',
        },
        secondary: {
            main: '#404b69',
        },
        ternary: {
            main: '#f7b851',
        },
        neutral: {
            main: '#f7b851',
            contrastText: "#fff"
          },
        accent: '#00818a',
        light: '#dbedf3',
    },
    spacing: 8,
})

// Colors
// #283149
// #404b69
// #00818a
// #dbedf3

export default theme;