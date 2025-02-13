import { observer } from 'mobx-react-lite';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { GlobalStyles } from './globalStyles';
import { useStore } from './hooks';
import { Page2 } from './pages';

const App = observer(() => {
  const store = useStore();

  return (
    <ThemeProvider theme={store.theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Page2 />
    </ThemeProvider>
  );
});

export default App;
