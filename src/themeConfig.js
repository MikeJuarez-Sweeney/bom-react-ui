import { createMuiTheme } from '@material-ui/core/styles'

export const bom = {
    light: '#f6eedf',
    main: '#d63447',
    dark: '#f57b51',
    contrastText: '#fff',
}

const bomTheme = createMuiTheme({
    palette: {
        primary: bom,
        secondary: bom
    },
    typography: {
        useNextVariants: true,
    }
})

export default bomTheme