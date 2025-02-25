import { BookingWithUser } from "@/app/(protected)/dashboard/page";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export const Dashboard = ({
  bookingsWithUsers,
}: {
  bookingsWithUsers: (BookingWithUser & { totalPrice: string })[];
}) => {
  return (
    <div className="container mx-auto py-10 ">
      <DataTable columns={columns} data={bookingsWithUsers} />
    </div>
  );
};
