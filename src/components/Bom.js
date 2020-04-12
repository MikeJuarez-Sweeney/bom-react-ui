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
import SbomList from '../Images/sbom_list.png'
import SbomTree from '../Images/sbom_tree.png'
import BomBackup from '../Images/bom_backup.png'
import BomCompare from '../Images/bom_compare.png'
import UploadIcon from '../Images/upload-icon.png'

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
              to={"/scanner/scanner_sbom_list.php"}
              divider="true"
              button
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
              <img src={SbomList} alt="oops" className={classes.image}/>
              </ListItemIcon>
              <ListItemText primary="&nbsp;&nbsp;BOM List" />
            </ListItem>
            <ListItem
              as={Link}
              to="/bomtree"
              divider="true"
              button
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon>
              <img src={SbomTree} alt="oops" className={classes.image}/>
              </ListItemIcon>
              <ListItemText primary="&nbsp;&nbsp;Bom Tree" />
            </ListItem>
            <ListItem
              as={Link}
              to="/outofsyncbomlist"
              divider="true"
              button
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
            >
              <ListItemIcon>
              <img src={SbomList} alt="oops" className={classes.image}/>
              </ListItemIcon>
              <ListItemText primary="&nbsp;&nbsp;Out of Sync &nbsp;&nbsp;BOM List" />
            </ListItem>
            <ListItem
              as={Link}
              to="/bombackup"
              divider="true"
              button
              selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6)}
            >
              <ListItemIcon>
              <img src={BomBackup} alt="oops" className={classes.image}/>
              </ListItemIcon>
              <ListItemText primary="&nbsp;&nbsp;BOM Backup" />
            </ListItem>
            <ListItem
              as={Link}
              to="/bomcompare"
              divider="true"
              button
              selected={selectedIndex === 7}
              onClick={(event) => handleListItemClick(event, 7)}
            >
              <ListItemIcon>
              <img src={BomCompare} alt="oops" className={classes.image}/>
              </ListItemIcon>
              <ListItemText primary="&nbsp;&nbsp;BOM Compare" />
            </ListItem>
            <ListItem
              divider="true"
              button
              selected={selectedIndex === 8}
              onClick={(event) => handleListItemClick(event, 8)}
            >
              <ListItemIcon>
              <img src={UploadIcon} alt="oops" className={classes.image}/>
              </ListItemIcon>
              <ListItemText primary="&nbsp;&nbsp;Import File" />
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