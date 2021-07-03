import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import webBackground from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles((theme) => ({
  learnMoreButton: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    borderRadius: 50,
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  background: {
    backgroundImage: `url(${webBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: '2em',
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    }
  }
}));

export const CallToAction = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      container
      alignItems="center"
      className={classes.background}
      justify={matchesSm ? "center" : "space-between"}
      direction={matchesSm ? "column" : "row"}
    >
      <Grid item style={{ marginLeft: matchesSm ? 0 : '5em', textAlign: matchesSm ? 'center' : 'inherit' }}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.<br />Revolutionary results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: '1.5rem' }}>
              Take advantage of the 21st century
            </Typography>
            <Grid item>
              <Button variant="outlined" className={classes.learnMoreButton}>Learn more</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button variant="contained" className={classes.estimateButton}>Free estimate</Button>
      </Grid>
    </Grid>
  )
};
