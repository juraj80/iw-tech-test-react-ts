import React, { Component } from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { EstablishmentDetail } from "./components/EstablishmentDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/establishment/:id" element={<EstablishmentDetail />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
