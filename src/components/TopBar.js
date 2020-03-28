import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup';


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
                <img src={'./Images/MainLogo.jpg'} alt="logo" className={classes.logo} />
            </Toolbar>  
                <Typography variant="h6" className={classes.title}>
                    A Basic Composer
                </Typography>

            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button>Home</Button>
            <Button>List</Button>
            <Button>Timeline</Button>
            <Button>Reports</Button>
            <Button>Scanner</Button>
            <Button>History</Button>
            <Button>Trend</Button>
            <Button>Setup</Button>
            <Button>About</Button>
            <Button>Help</Button>
            </ButtonGroup>

            <Button color="inherit">Login</Button>
      </Toolbar>
    )
}

export default TopBar