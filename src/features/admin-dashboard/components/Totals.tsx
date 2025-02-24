import { ReservationWithUser } from "@/app/(protected)/dashboard/page";
import { formatEUR } from "@/utils/formatEUR";

export const Totals = ({
  reservations,
}: {
  reservations: (ReservationWithUser & { totalPrice: string })[];
}) => {
  const totalRevenue = reservations
    .filter((reservation) => reservation.status === "COMPLETED")
    .map((reservation) => Number(reservation.totalPrice))
    .reduce((prev, cur) => prev + cur, 0);

  const totalCustomers = reservations
    .filter((reservation) => reservation.status === "COMPLETED")
    .map((reservation) => reservation.numberOfPersons)
    .reduce((prev, cur) => prev + cur, 0);

  const totalReservations = reservations.length;

  const cancelledReservations = reservations.filter(
    (reservation) => reservation.status === "CANCELLED"
  ).length;

  return (
    <div className="flex flex-col gap-2">
      <p>Total revenue this month: {totalRevenue && formatEUR(totalRevenue)}</p>
      <p>Total customers: {totalCustomers}</p>
      <p>Total reservations: {totalReservations} </p>
      <p>Cancelled reservation: {cancelledReservations} </p>
    </div>
  );
};
