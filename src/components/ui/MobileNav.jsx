import { IconButton, makeStyles, SwipeableDrawer } from '@material-ui/core';
import * as React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  drawerIcon: {
    height: 50,
    width: 50,
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }
}))

export const MobileNav = () => {
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
      >
        CONTENT
      </SwipeableDrawer>
      <IconButton
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon}/>
      </IconButton>
    </>
  )
};
