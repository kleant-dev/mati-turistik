import { BookingWithUser } from "@/app/(protected)/dashboard/page";
import { formatEUR } from "@/utils/formatEUR";

export const Totals = ({
  bookings,
}: {
  bookings: (BookingWithUser & { totalPrice: string })[];
}) => {
  const totalRevenue = bookings
    .filter((booking) => booking.status === "COMPLETED")
    .map((booking) => Number(booking.totalPrice))
    .reduce((prev, cur) => prev + cur, 0);

  const totalCustomers = bookings
    .filter((booking) => booking.status === "COMPLETED")
    .map((booking) => booking.numberOfPersons)
    .reduce((prev, cur) => prev + cur, 0);

  const totalBookings = bookings.length;

  const cancelledBookings = bookings.filter(
    (booking) => booking.status === "CANCELLED"
  ).length;

  return (
    <div className="flex flex-col gap-2">
      <p>Total revenue this month: {totalRevenue && formatEUR(totalRevenue)}</p>
      <p>Total customers: {totalCustomers}</p>
      <p>Total bookings: {totalBookings} </p>
      <p>Cancelled bookings: {cancelledBookings} </p>
    </div>
  );
};
