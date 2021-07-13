import * as React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useActiveTab } from '../../hooks/useActiveTab';
import lightbulb from '../../assets/bulb.svg';
import cash from '../../assets/cash.svg';
import stopwatch from '../../assets/stopwatch.svg';

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  mainContainer: {
    padding: '2em 5em 10em',
  }
}));

export const CustomSoftware = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  const { setActiveTabByRoute } = useActiveTab();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item container justify={matchesMd ? 'center' : undefined}>
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{
              marginLeft: '-3.5em',
              marginRight: '1em',
            }}
          >
            <IconButton
              color="primary"
              component={Link}
              to="/services"
              onClick={() => setActiveTabByRoute('/services')}
            >
              <ArrowBackIcon />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMd ? 'center' : undefined}>Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align={matchesMd ? 'center' : undefined} paragraph>
              Whether we're replacing old software or inventing new solutions, Akhet Digital is here to help your business tackle technology.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align={matchesMd ? 'center' : undefined} paragraph>
              Using regular commercial software leaves you with a lot of stuff you don't need, without some that you do need, and ultimately
              controls the way you work. Without using any software at all you risk falling behind competitors and missing out on huge savings from
              increased efficiency.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align={matchesMd ? 'center' : undefined} paragraph>
              Our custom solutions are designed from the ground up with your needs, wants and goals at the core.
              This collaborative process produces finely tuned software that is much more effective at improving your workflow
              and reducing costs than generalized options.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align={matchesMd ? 'center' : undefined} paragraph>
              We create exactly what you want, exactly how you want it!
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              color="primary"
              component={Link}
              to="/mobile-apps"
              onClick={() => setActiveTabByRoute('/mobile-apps')}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid item container justify="center" style={{ margin: '15em 0 10em' }}>
        <Grid item container direction="column" md alignItems="center" style={{ maxWidth: '40em' }} >
          <Grid item>
            <Typography variant="h4">Save Energy.</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="ligthbulb" />
          </Grid>
        </Grid>
        <Grid item container direction="column" md alignItems="center" style={{ maxWidth: '40em', margin: matchesSm ? '10em 0' : 0 }}>
          <Grid item>
            <Typography variant="h4">Save Time.</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid item container direction="column" md alignItems="center" style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant="h4">Save Money.</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="money" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
