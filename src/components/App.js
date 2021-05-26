import * as  React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Header } from '../components/ui/Header';
import { theme } from './ui/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        HEllo
      </div>
    </ThemeProvider>
  );
}

export default App;
