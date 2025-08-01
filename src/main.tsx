import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CustomFontThemeProvider } from './themes/customFontTheme.tsx';
import { persistor, store } from './store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './index.css' // Uncomment if you have a CSS file to include

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CustomFontThemeProvider>
          <App />
        </CustomFontThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
