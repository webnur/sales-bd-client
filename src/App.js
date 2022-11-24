import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';

const queryClient = new QueryClient()

function App() {
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>

    </div>
  );
}

export default App;
