import { IconButton, makeStyles, SwipeableDrawer, List, ListItem, ListItemText } from '@material-ui/core';
import * as React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import { useActivePathContext } from '../_context/activePath';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    }
  },
  drawerIcon: {
    height: 50,
    width: 50,
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
    opacity: 1,
  }
}))

export const MobileNav = () => {
  const { activeTab, setActiveTab } = useActivePathContext();
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={isDrawerOpen}
        onOpen={() => setIsDrawerOpen(true)}
        onClose={() => setIsDrawerOpen(false)}
        classes={{
          paper: classes.drawer
        }}
      >
        <div className={classes.toolbarMargin}></div>
        <List disablePadding>
          {routes.map(({ path, label, tabId }) => (
            <ListItem
              key={label}
              component={Link}
              to={path}
              divider
              button
              onClick={() => {
                setIsDrawerOpen(false);
                setActiveTab(tabId);
              }}
              selected={activeTab === tabId}
              classes={{ selected: classes.drawerItemSelected }}
              className={classes.drawerItem}
            >
              <ListItemText disableTypography>{label}</ListItemText>
            </ListItem>
          ))}
          <ListItem
            // component={Link}
            // to={'/'}
            divider
            button
            classes={{ root: classes.drawerItemEstimate }}
            className={classes.drawerItem}
          >
            <ListItemText disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  )
};
