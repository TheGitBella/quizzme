import GlobalStyles from './theme/global';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/mui';

interface ApplicationProps {
  children: React.ReactNode;
}

function Application({ children }: ApplicationProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export { Application };
