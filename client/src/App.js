import React from "react";
import './App.css';
import Login from "./views/Login";
import Home from "./views/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "primereact/resources/themes/lara-light-purple/theme.css" // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons

const queryClient = new QueryClient();

function App() {

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json());
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />}>
              </Route>
              <Route path="/user" element={<Home />}>
              </Route>
            </Routes>
          </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
