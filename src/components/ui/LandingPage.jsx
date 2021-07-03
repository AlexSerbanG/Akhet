import * as React from 'react';
// import Lottie from 'react-lottie-player';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import animationData from '../../animations/landinganimation/data';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import webAppsIcon from '../../assets/websiteIcon.svg';
import revolutionBackground from '../../assets/repeatingBackground.svg';
import infoBackground from '../../assets/infoBackground.svg';
import { CallToAction } from './CallToAction';

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
  subtitle: {
    marginBottom: '1em',
  },
  imgIcon: {
    marginLeft: '2em',
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  servicesContainer: {
    marginTop: '12em',
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down("sm")]: {
      padding: '8em 0',
      borderRadius: 0,
      width: '100%',
    }
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));


export const LandingPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          <HeroBlock />
        </Grid>
        <Grid item>
          <ServicesBlock />
        </Grid>
        <Grid item>
          <MobileDevBlock />
        </Grid>
        <Grid item>
          <WebDevBlock />
        </Grid>
        <Grid item>
          <RevolutionBlock />
        </Grid>
        <Grid item>
          <InformationBlock />
        </Grid>
        <Grid item>
          <CallToAction />
        </Grid>
      </Grid>
    </div>
  );
}

const HeroBlock = () => {
  const classes = useStyles();
  return (
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
  );
};

const ServicesBlock = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      container
      justify={matchesSm ? 'center' : undefined}
      className={classes.servicesContainer}
    >
      <Grid item style={{ marginLeft: matchesSm ? 0 : '5em', textAlign: matchesSm ? 'center' : undefined }}>
        <Typography variant="h4">Custom Software Development</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>Save Energy. Save Time. Save Money.</Typography>
        <Typography variant="subtitle1">Complete digital solutions, from investigation to celebration</Typography>
        <Button
          variant="outlined"
          className={classes.learnMoreButton}
          style={{ marginBottom: matchesSm ? '2em' : 0 }}
        >
          Learn more
        </Button>
      </Grid>
      <Grid item>
        <img alt="custom software icon" src={customSoftwareIcon} className={classes.imgIcon} />
      </Grid>
    </Grid>
  );
};

const MobileDevBlock = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      container
      justify={matchesSm ? 'center' : 'flex-end'}
      className={classes.servicesContainer}
    >
      <Grid item style={{ textAlign: matchesSm ? 'center' : undefined }}>
        <Typography variant="h4">iOS/Android app development</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>Extend Functionality. Extend Acces. Increase Engagement</Typography>
        <Typography variant="subtitle1">Increase your web experience or create a standalone app{matchesSm ? null : <br />} with either mobile platform</Typography>
        <Button
          variant="outlined"
          className={classes.learnMoreButton}
          style={{ marginBottom: matchesSm ? '2em' : 0 }}
        >
          Learn more
        </Button>
      </Grid>
      <Grid item style={{ marginRight: matchesSm ? 0 : '5em' }}>
        <img alt="mobile phone icon" src={mobileAppsIcon} className={classes.imgIcon} />
      </Grid>
    </Grid>
  );
};

const WebDevBlock = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      container
      justify={matchesSm ? 'center' : undefined}
      className={classes.servicesContainer}
    >
      <Grid item style={{ marginLeft: matchesSm ? 0 : '5em', textAlign: matchesSm ? 'center' : undefined }}>
        <Typography variant="h4">Web App Development</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>Reach more. Discover more. Sell more. </Typography>
        <Typography variant="subtitle1">Optimized for Search Engines, built for speed.</Typography>
        <Button
          variant="outlined"
          className={classes.learnMoreButton}
          style={{ marginBottom: matchesSm ? '2em' : 0 }}
        >
          Learn more
        </Button>
      </Grid>
      <Grid item>
        <img alt="web apps icon" src={webAppsIcon} className={classes.imgIcon} />
      </Grid>
    </Grid>
  );
};

const RevolutionBlock = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justify="center" style={{ height: '100em', marginTop: '10em' }}>
      <Card className={classes.revolutionCard}>
        <CardContent>
          <Grid container direction="column" style={{ textAlign: 'center' }}>
            <Grid item>
              <Typography variant="h3">
                The Revolution
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                Visionary insights coupled with cutting-edge technology is a recipe for revolution.
              </Typography>
              <Button variant="outlined" className={classes.learnMoreButton}>Learn more</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <div className={classes.revolutionBackground}></div>
    </Grid>
  );
}

const InformationBlock = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Grid container alignItems="center" style={{ height: '80rem' }}>
      <Grid
        item
        container
        style={{ position: 'absolute', textAlign: matchesXs ? 'center' : 'inherit' }}
        direction={matchesXs ? 'column' : 'row'}
        spacing={matchesXs ? 10 : 0}
      >
        <Grid item sm style={{ marginLeft: matchesXs ? 0 : matchesSm ? '2em' : '5em' }}>
          <Grid container direction="column">
            <Grid item >
              <Typography variant="h2" style={{ color: 'white' }}>
                About us
              </Typography>
              <Typography variant="subtitle2">
                Let's get personal
              </Typography>
              <Grid item>
                <Button
                  variant="outlined"
                  className={classes.learnMoreButton}
                  style={{ color: 'white', borderColor: 'white' }}
                >
                  Learn more
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid >
        <Grid item sm style={{ marginRight: matchesXs ? 0 : matchesSm ? '2em' : '5em', textAlign: matchesXs ? 'center' : 'right' }}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" style={{ color: 'white' }}>
                Contact us
              </Typography>
              <Typography variant="subtitle2">
                Say hello
              </Typography>
              <Grid item>
                <Button
                  variant="outlined"
                  className={classes.learnMoreButton}
                  style={{ color: 'white', borderColor: 'white' }}
                >
                  Learn more
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid >
      </Grid>
      <div className={classes.infoBackground}></div>
    </Grid>
  )
}
