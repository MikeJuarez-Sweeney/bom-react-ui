import React from 'react';
import { Link } from 'react-router-dom'
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
        width: 30,
        height: 30,
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
          <List component="nav" aria-label="main mailbox folders">
            <ListItem
              as={Link}
              to="/releases"
              divider="true"
              button
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
              <img src={Releases} alt="oops" className={classes.image}/>
              </ListItemIcon>
              <ListItemText primary="Releases List" />
            </ListItem>
            <ListItem
              as={Link}
              to="/releasesgantt"
              divider="true"
              button
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            > 
              <ListItemIcon>
              <img src={Gantt} alt="oops" className={classes.image}/>
              </ListItemIcon>
              <ListItemText primary="Releases Gantt" />
            </ListItem>
            <ListItem
              as={Link}
              to="/bomlist"
              divider="true"
              button
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
              <img src={SbomList} alt="oops" className={classes.image}/>
              </ListItemIcon>
              <ListItemText primary="BOM List" />
            </ListItem>
            <ListItem
              as={Link}
              to="/bomtree"
              divider="true"
              button
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
              <img src={SbomTree} alt="oops" className={classes.image}/>
              </ListItemIcon>
              <ListItemText primary="Bom Tree" />
            </ListItem>
            <ListItem
              as={Link}
              to="/outofsyncbomlist"
              divider="true"
              button
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon>
              <img src={SbomList} alt="oops" className={classes.image}/>
              </ListItemIcon>
              <ListItemText primary="Out of Sync BOM List" />
            </ListItem>
            <ListItem
              as={Link}
              to="/bombackup"
              divider="true"
              button
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
            >
              <ListItemIcon>
              <img src={BomBackup} alt="oops" className={classes.image}/>
              </ListItemIcon>
              <ListItemText primary="BOM Backup" />
            </ListItem>
            <ListItem
              as={Link}
              to="/bomcompare"
              divider="true"
              button
              selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6)}
            >
              <ListItemIcon>
              <img src={BomCompare} alt="oops" className={classes.image}/>
              </ListItemIcon>
              <ListItemText primary="BOM Compare" />
            </ListItem>
            <ListItem
              divider="true"
              button
              selected={selectedIndex === 7}
              onClick={(event) => handleListItemClick(event, 7)}
            >
              <ListItemIcon>
              <img src={UploadIcon} alt="oops" className={classes.image}/>
              </ListItemIcon>
              <ListItemText primary="Import File" />
            </ListItem>
          </List>
        </Grid>
      </div>
    );
}

export default Scanner