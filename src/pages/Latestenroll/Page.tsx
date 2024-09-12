import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./colums";
import { mockLastenrollData } from "./mock-data";
import { Lastenroll } from "./colums";

export default function Page() {
  const [data, setData] = useState<Lastenroll[]> ([]);

  useEffect(() => {
    // Check if data exists in localStorage
    const localData = localStorage.getItem("lastEnrollData");

    if (localData) {
      // If data exists in localStorage, parse it and set it as the state
      setData(JSON.parse(localData));
    } else {
      // If no data in localStorage, use mock data
      setData(mockLastenrollData);
    }
  }, []);

  return (
    <div className="w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
