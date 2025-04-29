import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e0c097', // Soft gold
    },
    secondary: {
      main: '#D27D2C', // Accent gold color
    },
    background: {
      default: '#111', // Dark background for the app
      paper: '#1a1a1a', // Slightly lighter background for cards and drawers
    },
    text: {
      primary: '#fff', // White text for better contrast on dark backgrounds
      secondary: '#e0c097', // Soft gold for secondary text
    },
    action: {
      hover: 'rgba(224, 192, 151, 0.2)', // Soft gold hover effect
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Modern, clean font
    h5: {
      fontWeight: 'bold',
      letterSpacing: 1,
      color: '#e0c097', // Soft gold for headings
    },
    button: {
      textTransform: 'none', // Remove text transform on buttons
      fontWeight: 'bold', // Bold buttons
    },
    body1: {
      color: '#fff', // Body text will be white
    },
    body2: {
      color: '#D27D2C', // Use the accent gold for secondary body text
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #1a1a1a, #111)', // Dark gradient background
          boxShadow: '0px 4px 10px rgba(224, 192, 151, 0.2)', // Soft gold shadow
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#e0c097', // Soft gold text color
          '&:hover': {
            backgroundColor: 'rgba(224, 192, 151, 0.2)', // Soft gold hover effect
            color: '#fff',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#111', // Dark background for the drawer
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          '&:hover': {
            color: '#e0c097', // Soft gold on hover
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#2a2a2a', // Slightly darker background on hover
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#e0c097', // Soft gold for icons
        },
      },
    },
  },
});

export default theme;
