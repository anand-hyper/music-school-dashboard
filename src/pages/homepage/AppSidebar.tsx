import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CiGrid42 } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";
import { BiMenuAltLeft } from "react-icons/bi";

interface SidebarProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppSidebar: React.FC<SidebarProps> = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("login");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div className="h-screen w-30 bg-white border-r shadow-md">
      <div className="flex flex-col items-start p-4 h-full">
        <Link to="/home">
          <Button variant="ghost" className="bg-pink-200 flex flex-col w-full py-6 px-4 mb-2">
            <div className="text-2xl mt-1 text-red-400"><CiGrid42/></div>
            <div className="text-xs font-medium text-pink-400">Home</div>
          </Button>
        </Link>
        <Link to="/courses" className="mt-2">
          <Button variant="ghost" className="bg-slate-200 flex flex-col w-full py-6 px-4 mb-2">
            <div className="text-2xl mt-1"><BiMenuAltLeft /></div>
            <div className="text-xs font-thin">Course</div>
          </Button>
        </Link>
        <div className="flex-1 flex items-end">
          <Button variant="ghost" className="flex flex-col w-full py-6 mb-2" onClick={handleLogout}>
            <div className="text-2xl"><LuLogOut /></div>
            <div className="text-xs font-medium bg-white">Logout</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppSidebar;