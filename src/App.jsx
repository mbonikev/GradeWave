import React from "react";

function App() {
  return <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> {/* For any invalid route */}
      </Routes>
  </div>;
} 

export default App;
