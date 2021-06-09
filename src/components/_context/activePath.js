import * as React from 'react';
import { useActiveTab } from '../../hooks/useActiveTab';

const ActivePathContext = React.createContext();

export const useActivePathContext = () => React.useContext(ActivePathContext);

export const ActivePathContextProvider = ({ children }) => {
  const contextValues = useActiveTab();
  return (
    <ActivePathContext.Provider value={contextValues}>{children}</ActivePathContext.Provider>
  );
}
