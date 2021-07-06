import { Button, makeStyles, Menu, MenuItem, Tab, Tabs } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import { useActivePathContext } from '../_context/activePath';

const useStyles = makeStyles(theme => ({
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: 25,
    textTransform: 'none',
    '&:hover': {
      opacity: 1,
    }
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
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    }
  }
}));

export const WebNav = () => {
  const { routesByPath, activeTab, setActiveTab, setActiveTabByRoute } = useActivePathContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [hoveredPath, setHoveredPath] = React.useState(null);
  const classes = useStyles();
  const handleCloseMenu = React.useCallback(
    () => {
      setOpen(false);
      setAnchorEl(null);
      setHoveredPath(null);
    },
    []);

  const handleOpenMenu = React.useCallback(
    ({ e, path }) => {
      setHoveredPath(path);
      setAnchorEl(e.currentTarget);
      setOpen(true);
    },
    []);

  return (
    <>
      <Tabs className={classes.tabContainer} value={activeTab} onChange={(_, val) => setActiveTab(val)}>
        {routes.map(({ path, label, menuId }) =>
          <Tab
            className={classes.tab}
            component={Link}
            to={path}
            key={label}
            label={label}
            {...(menuId && {
              'aria-owns': anchorEl ? menuId : undefined,
              'aria-haspopup': anchorEl ? true : undefined,
              onMouseOver: (e) => handleOpenMenu({ e, path }),
            })}
          />)}
      </Tabs>
      <Button
        component={Link}
        to="/estimate"
        onClick={() => setActiveTabByRoute('/estimate')}
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        Free estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{
          onMouseLeave: handleCloseMenu,
        }}
        classes={{ paper: classes.menu }}
        keepMounted
        elevation={0}
        style={{ zIndex: 1302 }}
      >
        {routesByPath[hoveredPath]?.subRoutes?.map(({ label, path }) => (
          <MenuItem
            key={label}
            onClick={() => {
              handleCloseMenu();
              setActiveTabByRoute(path);
            }}
            component={Link}
            to={path}
            classes={{ root: classes.menuItem }}
            selected={window.location.pathname === path}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
