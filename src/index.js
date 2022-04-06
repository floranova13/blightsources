import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ globally default to 20 seconds
      staleTime: 1000 * 5,
    },
  },
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById('root')
);
