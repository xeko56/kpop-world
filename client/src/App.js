import React from "react";
import './App.css';
import Login from "./views/Login";
import Home from "./views/Home";
import ProductDetails from "./views/ProductDetails";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import PrivateRoute from './components/PrivateRoute';
import "primereact/resources/themes/lara-light-purple/theme.css" // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import 'primeflex/primeflex.css'; //css utilities

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
              <Route path="/dashboard" element={<PrivateRoute Component={Home} />}>
              </Route>
              <Route path="/card/:card_nr" element={<PrivateRoute Component={ProductDetails} />}>
              </Route>                            
            </Routes>
          </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
