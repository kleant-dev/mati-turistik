import { AdminSettings } from "@/features/admin-dashboard/components/AdminSettings";
import { Dashboard } from "@/features/admin-dashboard/components/Dashboard";
import { RevenueChart } from "@/features/admin-dashboard/components/RevenueChart";
import { Totals } from "@/features/admin-dashboard/components/Totals";
import { db } from "@/lib/prisma";
import { ReservationStatus } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export type ReservationWithUser = {
  User: {
    name: string | null;
    email: string;
  } | null;
  startDate: Date;
  id: string;
  endDate: Date;
  regTime: Date;
  numberOfPersons: number;
  telephone: string;
  additionalMessage: string | null;
  status: ReservationStatus;
};

export type serializedSettings = {
  pricePerPerson: string;
  id: string;
  maxPersons: number;
  maxReservationDuration: number;
};

const DashboardPage = async () => {
  const reservationsWithUsers: (ReservationWithUser & {
    totalPrice: Decimal;
  })[] = await db.reservations.findMany({
    select: {
      id: true,
      startDate: true,
      endDate: true,
      additionalMessage: true,
      numberOfPersons: true,
      telephone: true,
      totalPrice: true,
      regTime: true,
      status: true,
      User: {
        select: {
          name: true,
          email: true,
        },
      },
    },
    orderBy: {
      startDate: "asc",
    },
  });

  const settings = (await db.reservationSettings.findFirst())!;

  const serializedSettings = {
    ...settings,
    pricePerPerson: settings.pricePerPerson.toString(),
  };
  const serializedReservations = reservationsWithUsers.map((reservation) => ({
    ...reservation,
    totalPrice: reservation.totalPrice.toString(),
  }));
  return (
    <div className="px-10 py-10 ">
      <div className=" flex flex-col md:flex-row gap-10">
        <RevenueChart />
        <div className="flex flex-1 justify-center">
          <div className="flex flex-col gap-10">
            <Totals reservations={serializedReservations} />
            <AdminSettings settings={serializedSettings} />
          </div>
        </div>
      </div>
      <Dashboard reservationsWithUsers={serializedReservations} />
    </div>
  );
};

export default DashboardPage;
