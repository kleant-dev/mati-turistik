import { ReservationWithUser } from "@/app/(protected)/dashboard/page";
import { DataTable } from "./DataTable";
import { columns } from "./Columns";

export const Dashboard = ({
  reservationsWithUsers,
}: {
  reservationsWithUsers: (ReservationWithUser & { totalPrice: string })[];
}) => {
  return (
    <div className="container mx-auto py-10 ">
      <DataTable columns={columns} data={reservationsWithUsers} />
    </div>
  );
};
