import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { z } from "zod";
import { ReservationSchema } from "../schema/ReservationSchema";
import { useTransition } from "react";
import { addReservation } from "../actions/addReservation";
import { toast } from "sonner";

export const ConfirmDialog = ({
  formData,
  isOpen,
  closeDialog,
}: {
  formData: z.infer<typeof ReservationSchema>;
  isOpen: boolean;
  closeDialog: () => void;
}) => {
  const { totalPrice, telephone, endDate, numberOfPersons, startDate } =
    formData;

  const [isPending, startTransition] = useTransition();

  const formatDate = (date: Date) => {
    return date.toLocaleString("en-GB", {
      dateStyle: "medium",
    });
  };

  function onSubmit() {
    startTransition(async () =>
      addReservation({
        ...formData,
        numberOfPersons: Number(formData.numberOfPersons),
      }).then((data) => {
        if (data.success) {
          toast.success(data.success);
        }
        if (data.error) {
          toast.error(data.error);
        }
        closeDialog();
      })
    );
  }
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="w-[80%] rounded-md flex flex-col ">
        <AlertDialogHeader className="flex flex-col ">
          <AlertDialogTitle className="mb-4">
            Are you sure you want to make this reservation?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Start Date :
            <span className="text-black font-medium">
              {formatDate(startDate)}
            </span>
          </AlertDialogDescription>
          <AlertDialogDescription>
            End Date :
            <span className="text-black font-medium">
              {formatDate(endDate)}
            </span>
          </AlertDialogDescription>
          <AlertDialogDescription>
            Phone number:{" "}
            <span className="text-black font-medium">{telephone}</span>
          </AlertDialogDescription>
          <AlertDialogDescription>
            Number of persons:{" "}
            <span className="text-black font-medium">{numberOfPersons}</span>
          </AlertDialogDescription>
          <AlertDialogDescription>
            Total price :{" "}
            <span className="text-black font-medium">{totalPrice}&euro;</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending} onClick={() => closeDialog()}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction disabled={isPending} onClick={() => onSubmit()}>
            CONFIRM
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
