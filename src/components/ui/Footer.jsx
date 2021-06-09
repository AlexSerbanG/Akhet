import { Grid, Hidden, makeStyles } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import footerAdornment from '../../assets/Footer Adornment.svg';

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
  }
}));

export const Footer = () => {
  const classes = useStyles();
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
              <Grid item component={Link} to="/" className={classes.link}>
                Home
            </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/services" className={classes.link}>
                Services
            </Grid>
              <Grid item component={Link} to="/custom-software" className={classes.link}>
                Custom software development
            </Grid>
              <Grid item component={Link} to="/web-apps" className={classes.link}>
                Web development
            </Grid>
              <Grid item component={Link} to="/mobile-apps" className={classes.link}>
                Mobile app development
            </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2} className={classes.link}>
              <Grid item component={Link} to="/revolution" className={classes.link}>
                The revolution
            </Grid>
              <Grid item component={Link} to="/revolution" className={classes.link}>
                Vision
            </Grid>
              <Grid item component={Link} to="/revolution" className={classes.link}>
                Technology
            </Grid>
              <Grid item component={Link} to="/revolution" className={classes.link}>
                Process
            </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/about" className={classes.link}>
                About us
            </Grid>
              <Grid item component={Link} to="/about" className={classes.link}>
                History
            </Grid>
              <Grid item component={Link} to="/about" className={classes.link}>
                Team
            </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/contact" className={classes.link}>
                Contact us
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img alt="decoration" src={footerAdornment} className={classes.adornment} />
    </footer>
  );
}
