import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { ElevationScroll } from './ElevationScroll';
import { WebTabs } from './WebTabs';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    }
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    }
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      background: 'transparent',
    },
  },
}));

export const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button component={Link} to="/" className={classes.logoContainer} disableRipple>
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            {matches ? null : <WebTabs />}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}
