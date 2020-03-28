import React from 'react'
//Application Components
import SideBar from './SideBar'
import TopBar from './TopBar'
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
        <SideBar />
    </Grid>
        </>
    )
}

export default MainPage