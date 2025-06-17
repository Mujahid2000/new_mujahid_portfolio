import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import { Lenis } from 'lenis/react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404</div>,
  },
]);

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <Lenis root>
      <div className="bg-[#ffffff]">
        <RouterProvider router={router} />
      </div>
      </Lenis>
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}