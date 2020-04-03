import React from 'react'
//Application Components
import TopBar from './TopBar'
import Home from './Home'
//Material UI Components
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'

export const MainPage = () => {

    return (
    <>
        <AppBar position="static">
            <TopBar />
        </AppBar>
        <Grid container spacing={0}>
            <Home />
        </Grid>
    </>
    ) 
}

export default MainPage