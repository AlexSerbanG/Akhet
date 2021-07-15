import * as React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useActivePathContext } from './_context/activePath';

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

export const MobileApps = () => {
  const { setActiveTabByRoute } = useActivePathContext();
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

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
              to="/custom-software"
              onClick={() => setActiveTabByRoute('/custom-software')}
            >
              <ArrowBackIcon />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMd ? 'center' : undefined}>Mobile Apps Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align={matchesMd ? 'center' : undefined} paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
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
              to="/web-apps"
              onClick={() => setActiveTabByRoute('/web-apps')}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

    </Grid>
  );
}
