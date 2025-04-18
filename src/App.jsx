import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NoPage from "./pages/NoPage";
import SkipPage from "./components/SkipPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route
            path="/skip"
            element={
              <>
                <SkipPage />
              </>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
