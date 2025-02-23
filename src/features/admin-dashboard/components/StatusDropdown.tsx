import { useState, useTransition } from "react";
import { updateReservationStatus } from "../actions/updateReservationStatus";
import { ReservationStatus } from "@prisma/client";
import clsx from "clsx";

interface StatusDropdownProps {
  reservationId: string;
  currentStatus: ReservationStatus;
}

const StatusDropdown: React.FC<StatusDropdownProps> = ({
  reservationId,
  currentStatus,
}) => {
  const [status, setStatus] = useState(currentStatus);
  const [isPending, startTransition] = useTransition();

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as ReservationStatus;
    setStatus(newStatus);

    startTransition(async () => {
      const response = await updateReservationStatus(reservationId, newStatus);
      if (!response.success) {
        alert("Failed to update status");
      }
    });
  };

  return (
    <select
      value={status}
      onChange={handleStatusChange}
      className={clsx("border rounded px-2 py-1 ", {
        "bg-blue-400": status === "IN_PROGRESS",
        "bg-red-400": status === "CANCELLED",
        "bg-green-400": status === "COMPLETED",
      })}
      disabled={isPending}
    >
      <option value="IN_PROGRESS">IN_PROGRESS</option>
      <option value="COMPLETED">COMPLETED</option>
      <option value="CANCELLED">CANCELLED</option>
    </select>
  );
};

export default StatusDropdown;
