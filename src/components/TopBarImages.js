import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar'
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import MainLogo from '../Images/MainLogo.jpg'
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

const images = [
  {
    url: HomeImage,
    title: 'Home',
    width: '7%',
  },
  {
    url: ListImage,
    title: 'List',
    width: '7%',
  },
  {
    url: GanttImage,
    title: 'Timeline',
    width: '7%',
  },
  {
    url:ReportsImage,
    title: 'Reports',
    width: '7%',
  },
  {
    url: ScannerImage,
    title: 'Scanner',
    width: '7%',
  },
  {
    url: HistoryImage,
    title: 'History',
    width: '7%',
  },
  {
    url: TrendImage,
    title: 'Trend',
    width: '7%',
  },
  {
    url: SetupImage,
    title: 'Setup',
    width: '7%',
  },
  {
    url: AboutImage,
    title: 'About',
    width: '7%',
  },
  {
    url: HelpImage,
    title: 'Help',
    width: '7%',
  },
  {
    url: UserImage,
    title: 'Login',
    width: '7%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 100,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
      
    <div className={classes.root}>
        <Toolbar> 
        <img src={MainLogo} alt="logo" className={classes.logo} width="232" height="100"/>
        </Toolbar> 
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}