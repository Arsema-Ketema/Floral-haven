import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e0c097', // Gold color instead of pink
    },
    secondary: {
      main: '#b8860b', // Dark gold for contrast
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e', // Slightly lighter dark background
    },
    text: {
      primary: '#e0c097', // Gold text
      secondary: '#f8d7a1', // Soft warm gold
    },
  },
  typography: {
    fontFamily: `'Playfair Display', serif`,
    h5: {
      fontWeight: 'bold',
      color: '#e0c097',
    },
    body1: {
      color: '#f8d7a1',
    },
  },
});

export default theme;
