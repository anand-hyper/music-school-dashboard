"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge"; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; 

export type Courses = {
  Name: string;
  Description: string;
  Instructor: string;
  Instrument: string;
  Dayofweek: string;
  Noofstud: number;
  Price: string;
  Status: string;
  Action: string;
};

export const columns: ColumnDef<Courses>[] = [
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "Description",
    header: "Description",
  },
  {
    accessorKey: "Instructor",
    header: "Instructor",
  },
  {
    accessorKey: "Instrument",
    header: "Instrument",
  },
  {
    accessorKey: "Dayofweek",
    header: "Days of Week",
  },
  {
    accessorKey: "Noofstud",
    header: "# of Students",
  },
  {
    accessorKey: "Price",
    header: "Price",
  },
  {
    accessorKey: "Status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.Status;
      return (
        <Badge
          className={
            status === "Active"
              ? "bg-green-100 text-green-800"
              : status === "Closed"
              ? "bg-red-100 text-red-800"
              : "bg-gray-100 text-gray-800"
          }
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "Action",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded">
              ⋮
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
            <DropdownMenuItem>View</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
