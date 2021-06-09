import * as  React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { Header } from '../components/ui/Header';
import { theme } from './ui/theme';
import { flatRoutes } from '../routes';
import { Footer } from './ui/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            {flatRoutes.map((route) => <Route {...route} key={route.label} />)}
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
