import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return <div>
    <Router>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> {/* For any invalid route */}
      </Router>
  </div>;
} 

export default App;
