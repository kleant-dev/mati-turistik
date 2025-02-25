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
import { BookingFormSchema } from "../schema/BookingFormSchema";
import { useTransition } from "react";
import { addBooking } from "../actions/addBooking";
import { toast } from "sonner";
import { formatEUR } from "@/utils/formatEUR";

export const ConfirmDialog = ({
  formData,
  isOpen,
  closeDialog,
  maxPersons,
}: {
  formData: z.infer<ReturnType<typeof BookingFormSchema>>;
  isOpen: boolean;
  closeDialog: () => void;
  maxPersons: number;
}) => {
  const { totalPrice, telephone, endDate, numberOfPersons, startDate } =
    formData;

  const [isPending, startTransition] = useTransition();

  const formatDate = (date: Date) => {
    return date?.toLocaleString("en-GB", {
      dateStyle: "medium",
    });
  };

  const totalDays =
    Math.floor(
      (endDate?.getTime() - startDate?.getTime()) / (1000 * 60 * 60 * 24)
    ) | 0;

  function onSubmit() {
    startTransition(async () =>
      addBooking(
        {
          ...formData,
          numberOfPersons: Number(formData.numberOfPersons),
        },
        maxPersons
      ).then((data) => {
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
            Are you sure you want to make this booking?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base">
            Start Date :
            <span className="text-black font-medium">
              {formatDate(startDate)}
            </span>
          </AlertDialogDescription>
          <AlertDialogDescription className="text-base">
            End Date :
            <span className="text-black font-medium">
              {formatDate(endDate)}
            </span>
          </AlertDialogDescription>
          <AlertDialogDescription className="text-base">
            Total Days :
            <span className="text-black font-medium">{totalDays}</span>
          </AlertDialogDescription>
          <AlertDialogDescription className="text-base">
            Phone number:{" "}
            <span className="text-black font-medium">{telephone}</span>
          </AlertDialogDescription>
          <AlertDialogDescription className="text-base">
            Number of persons:{" "}
            <span className="text-black font-medium">{numberOfPersons}</span>
          </AlertDialogDescription>
          <AlertDialogDescription className="text-base">
            Total price :{" "}
            <span className="text-black font-medium">
              {formatEUR(totalPrice)}
            </span>
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
