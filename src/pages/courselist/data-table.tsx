import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  FilterFn,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const globalFilterFn: FilterFn<any> = (row, columnId, value, addMeta) => {
  const searchValue = value.toLowerCase();
  const cellValue = String(row.getValue(columnId)).toLowerCase();
  return cellValue.includes(searchValue);
};

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div className="w-full px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-gray-400">COURSE LIST</h2>
        <div className="flex items-center border rounded-md overflow-hidden w-64">
      <span className="px-2 text-gray-500">
        <FaSearch /> 
      </span>
      <Input
        placeholder="Search"
        value={globalFilter ?? ''}
        onChange={(event) => setGlobalFilter(String(event.target.value))}
        className="flex-grow outline-none px-2 py-1"
      />
    </div>
      </div>
      <div className="rounded-lg border shadow-sm w-full overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              {table.getHeaderGroups().map((headerGroup) =>
                headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="px-4 py-2 text-left text-sm font-medium text-gray-700 uppercase"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row, i) => (
              <TableRow
                key={row.id}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="px-4 py-2 text-sm text-gray-900"
                  >
                    {cell.column.id === "Status" ? (
                      <Badge
                        className={
                          cell.getValue() === "Active"
                            ? "bg-green-100 text-green-800"
                            : cell.getValue() === "Closed"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-200 text-gray-800"
                        }
                      >
                        {cell.getValue() as string}
                      </Badge>
                    ) : cell.column.id === "Action" ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="p-2 text-gray-600 hover:bg-gray-100 ">
                            ⋮
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit Course</DropdownMenuItem>
                          <DropdownMenuItem>Close Course</DropdownMenuItem>
                          <DropdownMenuItem>Archive Course</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
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