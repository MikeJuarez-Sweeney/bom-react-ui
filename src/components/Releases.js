import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import BomList from '../scanner_sbom_list.php'
//Material UI Compnents
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'
//Images
import Releases from '../Images/releases.png'
import Gantt from '../Images/gantt.png'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 220,
      backgroundColor: theme.palette.background.paper,
    },
    image: {
        width: 40,
        height: 40,
    }
  }));

export const Scanner = () => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
  
    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <List component="nav">
            <ListItem
              as={Link}
              to="/releases"
              divider="true"
              button
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
              <img src={Releases} alt="oops" className={classes.image}/>
              </ListItemIcon>
              <ListItemText primary="&nbsp;&nbsp;Releases List" />
            </ListItem>
            <ListItem
              as={Link}
              to="/releasesgantt"
              divider="true"
              button
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            > 
              <ListItemIcon>
              <img src={Gantt} alt="oops" className={classes.image}/>
              </ListItemIcon>
              <ListItemText primary="&nbsp;&nbsp;Releases Gantt" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={10}>
          <Switch>
            <Route path="/scanner_sbom_list.php" component={BomList} />
          </Switch>
        </Grid>
      </div>
    );
}

export default Scanner