"use client";

import { ReservationWithUser } from "@/app/(protected)/dashboard/page";
import { ColumnDef } from "@tanstack/react-table";
import StatusDropdown from "./StatusDropdown";
import { formatEUR } from "@/utils/formatEUR";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteReservation } from "../actions/deleteReservation";
import { ActionButton } from "@/features/profile/components/ActionButton";

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
    cell: ({ row }) => {
      const phone = row.getValue<string>("telephone");
      return <a href={`tel:${phone}`}>{phone}</a>; // Ensure it's always an <a> tag
    },
  },
  {
    accessorKey: "startDate",
    header: "Start Date",

    cell: ({ row }) => {
      const date = new Date(row.getValue<string>("startDate")).toLocaleString(
        "en-US",
        {
          dateStyle: "long",
        }
      );
      return <p>{date}</p>;
    },
  },
  {
    accessorKey: "endDate",
    header: "End Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue<string>("endDate")).toLocaleString(
        "en-US",
        {
          dateStyle: "long",
        }
      );
      return <p>{date}</p>;
    },
  },
  {
    accessorKey: "regTime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Reg.Time
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue<string>("regTime")).toLocaleString(
        "en-US",
        {
          day: "numeric",
          month: "numeric",
          year: "numeric",
          hour: "2-digit",
          hour12: false,
          minute: "numeric",
          second: "numeric",
        }
      );
      return <p>{date}</p>;
    },
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

  {
    id: "actions",
    cell: ({ row }) => {
      const reservation = row.original;

      return (
        <form action={deleteReservation.bind(null, reservation.id)}>
          <ActionButton variant="destructive" size="sm">
            Delete
          </ActionButton>
        </form>
      );
    },
  },
];
