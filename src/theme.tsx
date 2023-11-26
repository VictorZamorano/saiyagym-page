import { createTheme} from "@mui/material/styles";


import nunitoFontts from "./Fontts/Nunito-VariableFont_wght.ttf"

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F85B1A',
    },
    secondary: {
      main: '#072083',
    },
    text: {
      primary: '#fff',
      secondary: '#000000'
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Nunito, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Nunito';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('Raleway'), local('Raleway-Regular'), url(${nunitoFontts}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#F85B1A',
          textColor: '#ffff',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiPaper-root":{
            backgroundColor:"#F85B1A",
        }
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            opacity: '0.5',
          },
        }
      }
    },
    MuiDivider:{
      styleOverrides: {
        root: {
            "&.MuiDivider-root":{
              backgroundColor: '#fff'
          }
        }
      }
    }
  },
});

