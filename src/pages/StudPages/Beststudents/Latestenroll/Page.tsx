import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./colums";
import { mockLastenrollData } from "./mock-data";
import { Lastenroll } from "./colums";

export default function Page() {
  const [data, setData] = useState<Lastenroll[]> ([]);

  useEffect(() => {
    
    const localData = localStorage.getItem("lastEnrollData");

    if (localData) {
   
      setData(JSON.parse(localData));
    } else {
      
      setData(mockLastenrollData);
    }
  }, []);

  return (
    <div className="w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
