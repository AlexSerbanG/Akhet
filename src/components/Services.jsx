import * as React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import { makeStyles } from '@material-ui/core/styles';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import webAppsIcon from '../assets/websiteIcon.svg';
import { useActivePathContext } from './_context/activePath';

const useStyles = makeStyles((theme) => ({
  subtitle: {
    marginBottom: '1em',
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
  servicesContainer: {
    marginTop: '10em',
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  imgIcon: {
    marginLeft: '2em',
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
}));

export const Services = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  const { setActiveTabByRoute } = useActivePathContext();
  return (
    <Grid container direction="column">
      <Grid item style={{ marginLeft: matchesSm ? 0 : '5em', marginTop: matchesSm ? '1em' : '2em' }}>
        <Typography variant="h2" gutterBottom style={{ textAlign: matchesSm ? 'center' : undefined }}>Services</Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          justify={matchesSm ? 'center' : 'flex-end'}
          className={classes.servicesContainer}
          style={{ marginTop: matchesSm ? '1em' : '5em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSm ? 'center' : undefined,
              width: matchesSm ? undefined : '35em'
            }}
          >
            <Typography variant="h4">iOS/Android app development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>Extend Functionality. Extend Acces. Increase Engagement</Typography>
            <Typography variant="subtitle1">Increase your web experience or create a standalone app{matchesSm ? null : <br />} with either mobile platform</Typography>
            <Button
              component={Link}
              to="/mobile-apps"
              onClick={() => setActiveTabByRoute('/mobile-apps')}
              variant="outlined"
              className={classes.learnMoreButton}
              style={{ marginBottom: matchesSm ? '2em' : 0 }}
            >
              Learn more
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSm ? 0 : '5em' }}>
            <img alt="mobile phone icon" src={mobileAppsIcon} className={classes.imgIcon} width="250em" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          justify={matchesSm ? 'center' : undefined}
          className={classes.servicesContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSm ? 0 : '5em',
              textAlign: matchesSm ? 'center' : undefined
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>Save Energy. Save Time. Save Money.</Typography>
            <Typography variant="subtitle1">Complete digital solutions, from investigation to celebration</Typography>
            <Button
              component={Link}
              to="/custom-software"
              onClick={() => setActiveTabByRoute('/custom-software')}
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
      </Grid>
      <Grid item>
        <Grid
          container
          justify={matchesSm ? 'center' : 'flex-end'}
          className={classes.servicesContainer}
          style={{ marginBottom: '10em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSm ? 'center' : undefined,
              width: matchesSm ? undefined : '35em'
            }}
          >
            <Typography variant="h4">Web App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>Reach more. Discover more. Sell more. </Typography>
            <Typography variant="subtitle1">Optimized for Search Engines, built for speed.</Typography>
            <Button
              component={Link}
              to="/web-apps"
              onClick={() => setActiveTabByRoute('/web-apps')}
              variant="outlined"
              className={classes.learnMoreButton}
              style={{ marginBottom: matchesSm ? '2em' : 0 }}
            >
              Learn more
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSm ? 0 : '5em' }}>
            <img alt="web apps icon" src={webAppsIcon} className={classes.imgIcon} width="250em" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
