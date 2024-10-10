import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the quiz with dynamic topic */}
        <Route path="/quiz/:selectedTopic" element={<TestComponent />} />
        
        {/* Catch-all route for any unmatched URL */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
