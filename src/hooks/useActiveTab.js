import { keyBy } from 'lodash';
import * as React from 'react';
import { flatRoutes } from '../routes';

export const useActiveTab = () => {
  const routesByPath = React.useMemo(
    () => keyBy(flatRoutes, 'path'),
    []);
  const initialRoute = routesByPath[window.location.pathname];
  const [activeTab, setActiveTab] = React.useState(initialRoute?.tabId);
  const setActiveTabByRoute = React.useCallback(
    (route) => {
      setActiveTab(routesByPath[route]?.tabId || false);
    },
    [setActiveTab, routesByPath]);
  return {
    routesByPath,
    activeTab,
    setActiveTab,
    setActiveTabByRoute,
  }
};
