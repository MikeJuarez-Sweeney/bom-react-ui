import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
//Application Components
import TopBarImage from './TopBarImages'
import Home from './Home'
//Material UI Components
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Scanner from './Scanner'
import Button from '@material-ui/core/Button'
import ButtonGroup from'@material-ui/core/ButtonGroup'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import MainImage from '../Images/MainLogo.jpg'
import HomeImage from '../Images/home.png'
import GanttImage from '../Images/gantt.png'
import ListImage from '../Images/list.png'
import ReportsImage from '../Images/reports.png'
import ScannerImage from '../Images/scanner.png'
import HistoryImage from '../Images/history.png'
import TrendImage from '../Images/trend.png'
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
                
                <img src={MainImage} alt="logo" className={classes.logo} width="150" height="75"/>
                <ButtonGroup size="small" variant="contained" color="primary" aria-label="contained primary button group">
                <Button component={Link} to="/home"><img src={HomeImage} alt="logo" className={classes.logo} width="50" height="50"/>Home</Button>
                <Button component={Link} to="/list"><img src={ListImage} alt="logo" className={classes.logo} width="50" height="50"/>&nbsp;&nbsp;List</Button>
                <Button component={Link} to="/timeline"><img src={GanttImage} alt="logo" className={classes.logo} width="50" height="50"/>&nbsp;&nbsp;Timeline</Button>
                <Button component={Link} to="/reports"><img src={ReportsImage} alt="logo" className={classes.logo} width="50" height="50"/>&nbsp;&nbsp;Reports</Button>
                <Button component={Link} to="/scanner"><img src={ScannerImage} alt="logo" className={classes.logo} width="50" height="50"/>&nbsp;&nbsp;Scanner</Button>
                <Button component={Link} to="/history"><img src={HistoryImage} alt="logo" className={classes.logo} width="50" height="50"/>&nbsp;&nbsp;History</Button>
                <Button component={Link} to="/trend"><img src={TrendImage} alt="logo" className={classes.logo} width="50" height="50"/>&nbsp;&nbsp;Trend</Button>
                <Button component={Link} to="/setup"><img src={SetupImage} alt="logo" className={classes.logo} width="50" height="50"/>&nbsp;&nbsp;Setup</Button>
                <Button component={Link} to="/about"><img src={AboutImage} alt="logo" className={classes.logo} width="50" height="50"/>&nbsp;&nbsp;About</Button>
                <Button component={Link} to="/help"><img src={HelpImage} alt="logo" className={classes.logo} width="50" height="50"/>&nbsp;&nbsp;Help</Button>
                <Button component={Link} to="/login"><img src={UserImage} alt="logo" className={classes.logo} width="50" height="50"/>&nbsp;&nbsp;Login</Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
        <Grid container spacing={0}>
            <Home />
        </Grid>
        <Grid item xs={10}>
        <Switch>
            <Route exact path="/scanner" component={Scanner} />
        </Switch>
        </Grid>
    </>
    ) 
}

export default MainPage