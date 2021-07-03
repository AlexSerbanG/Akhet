import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

export const theme = createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      fontWeight: 700,
      fontSize: '1rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontSize: '2.5rem',
      color: arcBlue,
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.7rem',
      fontWeight: 700,
      color: arcBlue,
    },
    estimate: {
      color: 'white',
      fontWeight: 700,
      textTransform: 'none',
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: 300,
    }
  },
});
