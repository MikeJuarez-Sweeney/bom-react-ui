import { createMuiTheme } from '@material-ui/core/styles'

export const bom = {
    light: '#f1f3f4',
    main: '#2a7886',
    dark: '#512b58',
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