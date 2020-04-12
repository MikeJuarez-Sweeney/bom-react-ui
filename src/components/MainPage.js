
import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

//Material UI Components
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Bom from './Bom'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Toolbar from '@material-ui/core/Toolbar'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Divider from '@material-ui/core/Divider'
   
//Project Components
import Home from './Home'
import About from './About'
import Releases from './Releases'
import Login from "./Login";


//Project Images
import MainImage from '../Images/MainLogo.jpg'
import HomeImage from '../Images/home.png'
import BomListImage from '../Images/sbom_list.png'
import ListImage from '../Images/list.png'
import SetupImage from '../Images/setup.png'
import AboutImage from '../Images/about.png'
import HelpImage from '../Images/help_about.png'
import UserImage from '../Images/admin_users.png'

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
export const MainPage = () => {
    const classes = useStyles()
    return (
    <>
        <AppBar position="static">
            <Toolbar>
                
                <img src={MainImage} alt="logo" position="fixed" width="100" height="40"/>
                <Divider variant="middle" />
                <ButtonGroup size="small" variant="contained" color="primary" aria-label="contained primary button group">
                <Button component={Link} to="/home"><img src={HomeImage} alt="logo" className={classes.logo} width="32" height="32"/>Home</Button>
                <Button component={Link} to="/releases"><img src={ListImage} alt="logo" className={classes.logo} width="32" height="32"/>&nbsp;&nbsp;Releases</Button>
                <Button component={Link} to="/Bom"><img src={BomListImage} alt="logo" className={classes.logo} width="32" height="32"/>&nbsp;&nbsp;BOM</Button>
                <Button component={Link} to="/setup"><img src={SetupImage} alt="logo" className={classes.logo} width="32" height="32"/>&nbsp;&nbsp;Setup</Button>
                <Button component={Link} to="/about"><img src={AboutImage} alt="logo" className={classes.logo} width="32" height="32"/>&nbsp;&nbsp;About</Button>
                <Button component={Link} to="/help"><img src={HelpImage} alt="logo" className={classes.logo} width="32" height="32"/>&nbsp;&nbsp;Help</Button>
                <Button component={Link} to="/login"><img src={UserImage} alt="logo" className={classes.logo} width="32" height="32"/>&nbsp;&nbsp;Login</Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
        <Grid item xs={10}>
        <Switch>
        <Route exact path="/home" component={Home} />
            <Route exact path="/bom" component={Bom} />
            <Route exact path="/about" component={About} />
            <Route exact path="/releases" component={Releases} />
            <Route exact path="/login" component={Login} />
        </Switch>
        </Grid>
    </>
    ) 
}

export default MainPage