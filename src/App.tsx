import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppSidebar from "./pages/homepage/AppSidebar";
import AppRoutes from "./pages/homepage/AppRoutes";


const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("login")) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <div className="flex">
        {isAuthenticated && <AppSidebar setIsAuthenticated={setIsAuthenticated} />}
        <div className="h-screen flex-1 p-5">
          <AppRoutes isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        </div>
      </div>
    </Router>
  );
};

export default App;