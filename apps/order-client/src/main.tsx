import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { ThemeProvider } from '@nx-example/libs/shared-components'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
