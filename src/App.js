import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import HelloPage from "./HelloPage";
import AddPage from "./AddPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/factures" element={<HelloPage/>}/>
        <Route path="/add_facture" element={<AddPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
