
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { mockBestStudentsData } from "./mock-data"

export default function Page() {
  return (
    <div className="w-full">
      <DataTable columns={columns} data={mockBestStudentsData} />
    </div>
  )
}