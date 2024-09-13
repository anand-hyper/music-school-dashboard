"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Lastenroll = {
  EnrNo: number
  Sname: string
  Cname: string
  Fees: string
  Enrdate: string
}

export const columns: ColumnDef<Lastenroll>[] = [
  {
    accessorKey: "EnrNo",
    header: "ENR. NO",
  },
  {
    accessorKey: "Sname",
    header: "S. NAME",
  },
  {
    accessorKey: "Cname",
    header: "C. NAME",
  },
  {
    accessorKey: "Fees",
    header: "FEES",
  },
  {
    accessorKey: "Enrdate",
    header: "ENR. DATE",
  },
]