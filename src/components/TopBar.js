import React from 'react'
import  { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import MainImage from '../Images/MainLogo.jpg'



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export const TopBar = () => {
    const classes = useStyles()
    return(
        <Toolbar>
            <Toolbar> 
                <img src={MainImage} alt="logo" className={classes.logo} width="100" height="50"/>
            </Toolbar>  
                <Typography variant="h6" className={classes.title}>
                    A Basic Composer
                </Typography>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button as={Link} to="/home">Home</Button>
            <Button as={Link} to="/list">List</Button>
            <Button as={Link} to="/timeline">Timeline</Button>
            <Button as={Link} to="/reports">Reports</Button>
            <Button as={Link} to="/scanner">Scanner</Button>
            <Button as={Link} to="/history">History</Button>
            <Button as={Link} to="/trend">Trend</Button>
            <Button as={Link} to="/setup">Setup</Button>
            <Button as={Link} to="/about">About</Button>
            <Button as={Link} to="/help">Help</Button>
            </ButtonGroup>

            <Button color="inherit">Login</Button>
      </Toolbar>
    )
}

export default TopBar