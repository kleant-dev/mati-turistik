"use client";

import { ReservationWithUser } from "@/app/(protected)/dashboard/page";
import { ColumnDef } from "@tanstack/react-table";
import StatusDropdown from "./StatusDropdown";
import { formatEUR } from "@/utils/formatEUR";

export const columns: ColumnDef<ReservationWithUser>[] = [
  {
    header: "Name",
    cell: ({ row }) => row.original.User?.name || "No Name",
  },
  {
    header: "Email",
    cell: ({ row }) => row.original.User?.email || "No Email",
  },
  {
    accessorKey: "telephone",
    header: "Phone Number",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "endDate",
    header: "End Date",
  },
  {
    accessorKey: "numberOfPersons",
    header: "No.Persons",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalPrice"));
      return <div className="text-right font-medium">{formatEUR(amount)}</div>;
    },
  },
  {
    accessorKey: "additionalMessage",
    header: "Additional Message",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <StatusDropdown
        reservationId={row.original.id}
        currentStatus={row.original.status}
      />
    ),
  },
];
