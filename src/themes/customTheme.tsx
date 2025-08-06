import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    sidebar: Palette['primary'];
  }
  interface PaletteOptions {
    sidebar?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: { main: '#388e3c' }, // farm green
    secondary: { main: '#ffd54f' }, // wheat gold
    background: {
      default: '#f5f3e7', // light tan
      paper: '#fffbe6',   // soft paper
    },
    sidebar: { main: '#1d2137ff' }, // dark contrast
    error: { main: '#c62828' },
    success: { main: '#2e7d32' },
    text: {
      primary: '#3e2723', // dark brown
      secondary: '#6d4c41', // lighter brown
    },
  },
  typography: {
    fontFamily: 'Bitcount Prop Single, Fredoka One, sans-serif',
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 500,
    fontWeightLight: 400,
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(135deg, #f5f3e7 0%, #e8f5e9 100%)', // example gradient
          // Or use an image:
          // backgroundImage: 'url("/images/farm-bg.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        },
      },
    },
  },
});

export const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
