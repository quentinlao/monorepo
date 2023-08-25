import { createRoot } from 'react-dom/client';
import { HelloWorld } from './HelloWorld/HelloWorld';

const App = () => {
  return <HelloWorld />;
};

const container = document.getElementById('app');

const root = createRoot(container!);

root.render(<App />);
