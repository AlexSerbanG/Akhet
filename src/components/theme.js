import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

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
    estimate: {
      color: 'white',
      fontWeight: 700,
      textTransform: 'none',
    },
  },
});
