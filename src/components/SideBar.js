import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ViewListIcon from '@material-ui/icons/ViewList';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import BackupIcon from '@material-ui/icons/Backup';
import CompareIcon from '@material-ui/icons/Compare';
import ImportExportIcon from '@material-ui/icons/ImportExport';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 220,
      backgroundColor: theme.palette.background.paper,
    },
  }));

export const SideBar = () => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
  
    return (
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem
            divider="true"
            button
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <VerticalSplitIcon />
            </ListItemIcon>
            <ListItemText primary="Releases List" />
          </ListItem>
          <ListItem
            divider="true"
            button
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <VerticalSplitIcon />
            </ListItemIcon>
            <ListItemText primary="Releases Gantt" />
          </ListItem>
          <ListItem
            divider="true"
            button
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <ViewListIcon />
            </ListItemIcon>
            <ListItemText primary="BOM List" />
          </ListItem>
          <ListItem
            divider="true"
            button
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemIcon>
              <ViewListIcon />
            </ListItemIcon>
            <ListItemText primary="Out of Sync BOM List" />
          </ListItem>
          <ListItem
            divider="true"
            button
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemIcon>
              <BackupIcon />
            </ListItemIcon>
            <ListItemText primary="BOM Backup" />
          </ListItem>
          <ListItem
            divider="true"
            button
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
          >
            <ListItemIcon>
              <CompareIcon />
            </ListItemIcon>
            <ListItemText primary="BOM Compare" />
          </ListItem>
          <ListItem
            divider="true"
            button
            selected={selectedIndex === 6}
            onClick={(event) => handleListItemClick(event, 6)}
          >
            <ListItemIcon>
              <ImportExportIcon />
            </ListItemIcon>
            <ListItemText primary="Import File" />
          </ListItem>
        </List>
      </div>
    );
}

export default SideBar