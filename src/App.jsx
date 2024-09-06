import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { GlobalStyles } from "./styles/GlobalStyles";

import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import List from "./features/lists/Lists";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 6 * 1000, // one minute
      retry: 5, // by default query will tries request 3 times
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="list/:boardId" element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
