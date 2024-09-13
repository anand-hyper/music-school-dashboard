import React, { useState, useEffect } from "react";
import Pagee from "../coursepage/courselist/pagee";
import { AddCourseDialog } from "../coursepage/Addcourse";
import { mockBestStudentsData } from "../coursepage/courselist/mock-data";
import { Courses } from "../coursepage/courselist/columns";

const CoursePage: React.FC = () => {
  const [data, setData] = useState<Courses[]>([]);

  const getData = () => {
    const localData = localStorage.getItem("courses");
    if (localData) {
      setData(JSON.parse(localData));
    } else {
      setData(mockBestStudentsData);
      localStorage.setItem("courses", JSON.stringify(mockBestStudentsData));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center">
        <Pagee data={data} />
      </div>
      <div className="flex items-center justify-end mr-5 mb-5">
        <AddCourseDialog onAddCourse={() => getData()} />
      </div>
    </div>
  );
};

export default CoursePage;