import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Button, makeStyles, Tab, Tabs } from '@material-ui/core';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import routes from '../../routes';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logo: {
    height: '8em',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: 25,
    textTransform: 'none',
  },
  button: {
    borderRadius: '50px',
    marginLeft: 50,
    marginRight: 25,
    fontSize: '1rem',
    textTransform: 'none',
    height: 45,
    color: 'white',
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      background: 'transparent',
    },
  }
}));

const ElevationScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const Header = () => {
  const initialRoute = routes.find(({ path }) => window.location.pathname === path);
  const [activeTab, setActiveTab] = React.useState(initialRoute?.order);
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button component={Link} to="/" className={classes.logoContainer} disableRipple>
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            <Tabs className={classes.tabContainer} value={activeTab} onChange={(_, val) => setActiveTab(val)}>
              {routes.map(({ path, label }) => <Tab className={classes.tab} component={Link} to={path} label={label} />)}
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button}>
              Free estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}
