import './styles/app.css';
import CssBaseline from '@mui/material/CssBaseline';

import AppLayout from './pages/layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Titleprovider from './components/hoc/titleWraper/TItleProvider';

function App() {
  const theme = createTheme();
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Titleprovider>
          <AppLayout />
        </Titleprovider>
      </ThemeProvider>
    </div>
  );
}

export default App;
