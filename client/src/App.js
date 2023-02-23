import React from "react";
import './App.css';
import Login from "./views/Login";
import Home from "./views/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json());
  }, []);

  return (
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
  );
}

export default App;
