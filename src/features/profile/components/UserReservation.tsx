import { Reservations } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatEUR } from "@/utils/formatEUR";

export const UserReservations = ({ data }: { data: Reservations[] }) => {
  const formatDate = (date: Date) => {
    return date?.toLocaleString("en-GB", {
      dateStyle: "medium",
    });
  };
  return (
    <div className="flex flex-col gap-4 px-6">
      {data.map(
        (
          { id, startDate, endDate, totalPrice, numberOfPersons, telephone },
          i
        ) => (
          <Card key={id}>
            <CardHeader>
              <CardTitle>Reservation {i + 1}</CardTitle>
              <CardDescription>{telephone}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Start Date : {formatDate(startDate)}</p>
            </CardContent>
            <CardContent>
              <p>End Date : {formatDate(endDate)}</p>
            </CardContent>
            <CardContent>
              <p>Total Price: {formatEUR(Number(totalPrice))}</p>
            </CardContent>
            <CardContent>
              <p>Number of Persons : {numberOfPersons}</p>
            </CardContent>
          </Card>
        )
      )}
    </div>
  );
};
