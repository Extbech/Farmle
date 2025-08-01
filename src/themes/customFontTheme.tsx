import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Bitcount Prop Single, sans-serif',
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 500,
    fontWeightLight: 400
  },
});

export const CustomFontThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
