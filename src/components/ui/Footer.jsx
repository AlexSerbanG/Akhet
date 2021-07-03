import { Grid, Hidden, makeStyles } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import footerAdornment from '../../assets/Footer Adornment.svg';
import { useActivePathContext } from '../_context/activePath';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles(theme => ({
  footer: {
    width: '100%',
    backgroundColor: theme.palette.common.blue,
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  gridContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontSize: '0.75rem',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  socialMediaIcons: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down('xs')]: {
      height: '2.5em',
      widht: '2.5em',
    }
  },
  socialMediaContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em'
    }
  }
}));

export const Footer = () => {
  const classes = useStyles();
  const { setActiveTab, routesByPath } = useActivePathContext();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justify="center"
          className={classes.gridContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/" className={classes.link} onClick={() => setActiveTab(routesByPath['/']?.tabId)}>
                Home
            </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/services" className={classes.link} onClick={() => setActiveTab(routesByPath['/services']?.tabId)}>
                Services
              </Grid>
              <Grid item component={Link} to="/custom-software" className={classes.link} onClick={() => setActiveTab(routesByPath['/custom-software']?.tabId)}>
                Custom software development
              </Grid>
              <Grid item component={Link} to="/web-apps" className={classes.link} onClick={() => setActiveTab(routesByPath['/web-apps']?.tabId)}>
                Web development
              </Grid>
              <Grid item component={Link} to="/mobile-apps" className={classes.link} onClick={() => setActiveTab(routesByPath['/mobile-apps']?.tabId)}>
                iOS/Android app development
            </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2} className={classes.link}>
              <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => setActiveTab(routesByPath['/revolution']?.tabId)}>
                The revolution
              </Grid>
              <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => setActiveTab(routesByPath['/revolution']?.tabId)}>
                Vision
              </Grid>
              <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => setActiveTab(routesByPath['/revolution']?.tabId)}>
                Technology
              </Grid>
              <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => setActiveTab(routesByPath['/revolution']?.tabId)}>
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/about" className={classes.link} onClick={() => setActiveTab(routesByPath['/about']?.tabId)}>
                About us
              </Grid>
              <Grid item component={Link} to="/about" className={classes.link} onClick={() => setActiveTab(routesByPath['/about']?.tabId)}>
                History
              </Grid>
              <Grid item component={Link} to="/about" className={classes.link} onClick={() => setActiveTab(routesByPath['/about']?.tabId)}>
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/contact" className={classes.link} onClick={() => setActiveTab(routesByPath['/contact']?.tabId)}>
                Contact us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img alt="decoration" src={footerAdornment} className={classes.adornment} />
      <Grid container className={classes.socialMediaContainer} justify="flex-end" spacing={2}>
        <Grid item component={"a"} href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img alt="facebook logo" src={facebook} className={classes.socialMediaIcons} />
        </Grid>
        <Grid item component={"a"} href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img alt="twitter logo" src={twitter} className={classes.socialMediaIcons} />
        </Grid>
        <Grid item component={"a"} href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img alt="instagram logo" src={instagram} className={classes.socialMediaIcons} />
        </Grid>
      </Grid>
    </footer>
  );
}
