

"use client"

import { ColumnDef } from "@tanstack/react-table"

export type BestStudent = {
    RegNo: number
    FName: string
    LName: string
    CourseNo: number
    TotalFees: string
    RegDate: string
}

export const columns: ColumnDef<BestStudent>[] = [
    {
        accessorKey: "RegNo",
        header: "Reg. No",
      },
      {
        accessorKey: "FName",
        header: "F. Name",
      },
      {
        accessorKey: "LName",
        header: "L. Name",
      },
      {
        accessorKey: "CourseNo",
        header: "Course #",
      },
      {
        accessorKey: "TotalFees",
        header: "Total Fees",
      },
      {
        accessorKey: "RegDate",
        header: "Reg. Date",
      },
]