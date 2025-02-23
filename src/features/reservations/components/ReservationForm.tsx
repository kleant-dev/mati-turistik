"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { ReservationSchema } from "../schema/ReservationSchema";
import { ConfirmDialog } from "./ConfirmDialog";

const today = new Date();
const day = today.getDate() + 1;
const month = today.getMonth();
const year = today.getFullYear();
const tomorrow = new Date(year, month, day);

// export const endDate = new Date(year, month, day + 7);

export function ReservationForm() {
  const [pricePerPerson, setPricePerPerson] = useState<number | null>(null);
  const [endDate, setEndDate] = useState<Date>(new Date(year, month, day + 1));
  const [showConfirmDialog, setShowConfirmDialog] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    async function getReservationSettings() {
      try {
        const res = await fetch("/api/reservation-settings");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const result = await res.json();

        if (result.data) {
          if (result.data.pricePerPerson) {
            const parsedPrice = Number.parseFloat(result.data.pricePerPerson);
            if (!isNaN(parsedPrice)) {
              setPricePerPerson(parsedPrice);
            } else {
              console.error(
                "Invalid pricePerPerson:",
                result.data.pricePerPerson
              );
            }
          } else {
            console.error("No pricePerPerson found! ");
          }

          if (result.data.maxReservationDuration) {
            setEndDate(
              new Date(year, month, day + result.data.maxReservationDuration)
            );
          }
        } else {
          console.error("No data found in response:", result);
        }
      } catch (error) {
        console.error("Error fetching reservation settings:", error);
      }
    }

    getReservationSettings();
  }, []);

  const form = useForm<z.infer<typeof ReservationSchema>>({
    resolver: zodResolver(ReservationSchema),
    defaultValues: {
      startDate: tomorrow,
      endDate: endDate,
      telephone: "",
      numberOfPersons: 2,
      totalPrice: 0,
    },
  });

  const selectedStartDate = form.watch("startDate");

  useEffect(() => {
    const selectedStartDateYear = selectedStartDate.getFullYear();
    const selectedStartDateMonth = selectedStartDate.getMonth();
    const selectedStartDateDay = selectedStartDate.getDate();
    setEndDate(
      new Date(
        selectedStartDateYear,
        selectedStartDateMonth,
        selectedStartDateDay + 7
      )
    );
  }, [selectedStartDate]);
  // const selectedStartDateYear = selectedStartDate.getFullYear();
  // const selectedStartDateMonth = selectedStartDate.getMonth();
  // const selectedStartDateDay = selectedStartDate.getDate();
  // const endDate = new Date(
  //   selectedStartDateYear,
  //   selectedStartDateMonth,
  //   selectedStartDateDay + 7
  // );

  function closeDialog() {
    setShowConfirmDialog(false);
  }

  function onSubmit() {
    setTotalPrice(
      pricePerPerson! *
        form.watch("numberOfPersons") *
        Math.floor(
          (form.watch("endDate").getTime() -
            form.watch("startDate").getTime()) /
            (1000 * 60 * 60 * 24)
        )
    );
    setShowConfirmDialog(true);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem className="flex items-baseline">
              <FormLabel className="flex-1">Start Date*</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick start date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < tomorrow || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <>
              <FormItem className="flex items-baseline">
                <FormLabel className="flex-1">End Date*</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick end date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > endDate || date <= selectedStartDate
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
              <FormDescription>
                This is checkout date and its not included
              </FormDescription>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="numberOfPersons"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Persons*</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telephone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number*</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="additionalMessage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Information</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us information"
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-2">
          <FormLabel className="flex-1 text-sm flex gap-2">
            <span className="text-slate-500">Price per person:</span>
            <span>{pricePerPerson?.toString() || 0}&euro;/day</span>
          </FormLabel>
          <FormLabel className="flex-1 text-xl flex gap-2">
            <span className="text-slate-500">Total Price:</span>
            <span className="underline underline-offset-2">
              {(
                pricePerPerson! *
                  form.watch("numberOfPersons") *
                  Math.floor(
                    (form.watch("endDate").getTime() -
                      form.watch("startDate").getTime()) /
                      (1000 * 60 * 60 * 24)
                  ) || 0
              ).toFixed(2)}
              &euro;
            </span>
          </FormLabel>
        </div>
        <Button className="w-full" type="submit">
          Proceed to Confirm
        </Button>

        <ConfirmDialog
          formData={{ ...form.getValues(), totalPrice }}
          isOpen={showConfirmDialog}
          closeDialog={closeDialog}
        />
      </form>
    </Form>
  );
}
