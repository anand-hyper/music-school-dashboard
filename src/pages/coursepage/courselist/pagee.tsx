import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Courses } from "./columns";

export default function Page({ data }: { data: Courses[] }) {


  return (
    <div className="w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
