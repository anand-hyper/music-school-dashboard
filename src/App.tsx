import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollableCardContainer from "./pages/ScrollableCardContainer";
import Login from "./pages/Login";
import Page from "./pages/Latestenroll/Page";
import Pages from "./pages/Beststudents/pages";
import Pagee from "./pages/courselist/pagee";
import { AddCourseDialog } from "./pages/Addcourse";
import { TfiMenuAlt } from "react-icons/tfi";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // State to manage authentication

  return (
    <Router>
      <div className="flex">
        {isAuthenticated && <AppSidebar setIsAuthenticated={setIsAuthenticated} />} {/* Show sidebar only when logged in */}
        <div className="h-screen flex-1 p-5">
          <Routes>
            <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            {isAuthenticated && <Route path="/home" element={<EnrollmentPage />} />}
            {isAuthenticated && <Route path="/courses" element={<CoursePage />} />}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

// Sidebar Component using ShadCN UI
interface SidebarProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppSidebar: React.FC<SidebarProps> = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false); // Set authentication state to false
    navigate("/"); // Navigate to the login page
  };

  return (
    <div className="h-screen w-20 bg-white border-r shadow-md">
      <div className="flex flex-col items-start p-4 h-full">
        <Link to="/home">
          <Button variant="ghost" className="bg-red-200 flex flex-col w-full py-6 mb-2">
            <div className="text-2xl"><TfiMenuAlt /></div> <div className="text-xs font-thin">Home</div>
          </Button>
        </Link>
        <Link to="/courses">
          <Button variant="ghost" className="w-full justify-start">
            <span className="mr-3">📚</span> Courses
          </Button>
        </Link>
        <div className="flex-1 flex items-end">
        <Button
          variant="ghost"
          className="w-full items-end flex-1 mt-4"
          onClick={handleLogout} // Logout function
        >
          <span className="mr-3">🚪</span> Logout
        </Button>
        </div>
       
      </div>
    </div>
  );
};

// Enrollment Page Component
const EnrollmentPage: React.FC = () => (
  <div className="h-screen  overflow-y-scroll">
    <div className="flex items-center justify-center ">
      <ScrollableCardContainer />
    </div>
    <div className="">
      <Page />
    </div>
    <div className=" ">
      <Pages />
    </div>
  </div>
);

// Course Page Component
const CoursePage: React.FC = () => (
  <>
    <div className="flex items-center justify-center">
      <Pagee />
    </div>
    <div className="flex items-center justify-end mr-5 mb-5">
      <AddCourseDialog
        onAddCourse={(course: any) => {
          console.log("New Course Added:", course);
        }}
      />
    </div>
  </>
);

export default App;
