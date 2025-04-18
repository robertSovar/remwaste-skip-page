import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NoPage from "./pages/NoPage";
import SkipPage from "./components/SkipPage";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Dashboard />

              <div className="flex justify-center items-center mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white s py-2 px-4 rounded cursor-pointer"
                  onClick={() => navigate("/skip")}
                >
                  Go to skip page
                </button>
              </div>
            </>
          }
        >
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
