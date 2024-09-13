import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import EnrollmentPage from "./EnrollmentPage";
import CoursePage from "./CoursePage";

interface AppRoutesProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ isAuthenticated, setIsAuthenticated }) => (
  <Routes>
    <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
    {isAuthenticated && <Route path="/home" element={<EnrollmentPage />} />}
    {isAuthenticated && <Route path="/courses" element={<CoursePage />} />}
  </Routes>
);

export default AppRoutes;