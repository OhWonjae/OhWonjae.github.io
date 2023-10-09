import { createRoot } from 'react-dom/client';
import App from './App';
import { ProviderWrapper } from '@/layout/wrapper/provider-wrapper';

const container = document.getElementById('root');
if (!container) {
  throw new Error('root element not found');
}
const root = createRoot(container);
root.render(
  <ProviderWrapper>
    <App />
  </ProviderWrapper>,
);
