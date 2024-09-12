import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { mockBestStudentsData } from "./mock-data";
import { Courses } from "./columns";
export default function Page() {
  const [data, setData] = useState<Courses[]>([]);

  useEffect(() => {
    // Check if data exists in localStorage
    const localData = localStorage.getItem("courses");

    if (localData) {
      // If data exists in localStorage, parse it and set it as the state
      setData(JSON.parse(localData));
    } else {
      // If no data in localStorage, use mock data
      setData(mockBestStudentsData);
    }
  }, []);

  return (
    <div className="w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
