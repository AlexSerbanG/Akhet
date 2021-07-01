import * as  React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { Header } from '../components/ui/Header';
import { theme } from './theme';
import { flatRoutes } from '../routes';
import { Footer } from './ui/Footer';
import { ActivePathContextProvider } from './_context/activePath';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <ActivePathContextProvider>
            <Header />
            <Switch>
              {flatRoutes.map((route) => <Route {...route} key={route.label} />)}
            </Switch>
            <Footer />
          </ActivePathContextProvider>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
