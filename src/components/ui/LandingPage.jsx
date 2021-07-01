import * as React from 'react';
// import Lottie from 'react-lottie-player';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import animationData from '../../animations/landinganimation/data';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  animationContainer: {
    minWidth: '21em',
    maxWidth: '50em',
    marginTop: '2em',
    marginLeft: '10%',
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    }
  },
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
  btnContainer: {
    marginTop: '1em',
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down("md")]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    }
  },
}));


export const LandingPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid sm item className={classes.heroTextContainer}>
              <Typography variant="h2" align="center">
                Bringing you closer to <br />your digital identity
              </Typography>
            </Grid>
            <Grid container justify="center" className={classes.btnContainer}>
              <Grid item>
                <Button variant="contained" className={classes.estimateButton}>Free estimate</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnMoreButton}>Learn more</Button>
              </Grid>
            </Grid>
            <Grid sm item className={classes.animationContainer}>
              {/* <Lottie
                loop
                animationData={animationData}
                play
                style={{ width: '100%', height: '100%' }}
              /> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
