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
import vision from '../assets/vision.svg';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    padding: '0 5em',
    [theme.breakpoints.down('sm')]: {
      padding: '0 1.5em',
    }
  }
}));

export const Revolution = () => {
  const { setActiveTabByRoute } = useActivePathContext();
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography variant="h2">The Revolution</Typography>
      </Grid>
      <Grid item container className={classes.rowContainer} alignItems="center">
        <Grid item lg>
          <img src={vision} alt="vision logo" style={{ maxWidth: '40em', marginRight: '5em' }} />
        </Grid>
        <Grid item container direction="column" lg style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant="h4" align="right" gutterBottom>Vision</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="right" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Typography variant="body1" align="right" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Typography variant="body1" align="right" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Typography variant="body1" align="right" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Typography variant="body1" align="right" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container className={classes.rowContainer} justify="center">
        <Grid item>
          <Typography variant="h4" gutterBottom>Process</Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </Grid>

      </Grid>
    </Grid>
  );
}
