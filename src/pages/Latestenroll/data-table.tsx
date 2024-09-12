import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full px-4 py-8">
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-gray-400">LATEST ENROLMENTS</h2>
        <a href="#" className="text-purple-600 hover:underline">View All Courses</a>
      </div>
      <div className="rounded-lg border shadow-sm w-full overflow-hidden">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-gray-100 h-12">
              <TableHead className="w-1/5 px-4 py-2 text-left text-sm font-medium text-black uppercase">Enr. No</TableHead>
              <TableHead className="w-1/5 px-4 py-2 text-left text-sm font-medium text-black uppercase">S. Name</TableHead>
              <TableHead className="w-1/5 px-4 py-2 text-left text-sm font-medium text-black uppercase">C. Name</TableHead>
              <TableHead className="w-1/5 px-4 py-2 text-left text-sm font-medium text-black uppercase">Fees</TableHead>
              <TableHead className="w-1/5 px-4 py-2 text-left text-sm font-medium text-black uppercase">Enr. Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row, i) => (
              <TableRow
                key={row.id}
                className={`h-12 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="px-4 py-2 text-sm text-gray-900">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}