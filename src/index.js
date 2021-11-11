import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { YearContextProvider } from "./store/YearContext";

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});

ReactDOM.render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <YearContextProvider>
        <App />
      </YearContextProvider>
    </QueryClientProvider>
  </Router>,
  document.getElementById("root")
);
