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
import { BookingFormSchema } from "../schema/BookingFormSchema";
import { ConfirmDialog } from "./confirm-dialog";
import { formatIncompletePhoneNumber } from "libphonenumber-js";
import { getBookingSettings } from "../actions/getBookingSettings";

const today = new Date();
const day = today.getDate() + 1;
const month = today.getMonth();
const year = today.getFullYear();
const tomorrow = new Date(year, month, day);

export function BookingForm() {
  const [pricePerPerson, setPricePerPerson] = useState<number | null>(null);
  const [endDate, setEndDate] = useState<Date>(new Date(year, month, day + 1));
  const [showConfirmDialog, setShowConfirmDialog] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [maxPersons, setMaxPersons] = useState(0);

  useEffect(() => {
    async function fetchBookingSettings() {
      try {
        const result = await getBookingSettings();

        // Handle errors returned by the server action
        if (result?.error) {
          console.error(result.error);
          return;
        }

        // Ensure data is present
        if (!result?.data) {
          console.error("No data found in response");
          return;
        }

        const { pricePerPerson, maxBookingDuration, maxPersons } = result.data;

        // Parse and validate pricePerPerson
        if (pricePerPerson) {
          const parsedPrice = Number.parseFloat(pricePerPerson);
          if (!isNaN(parsedPrice)) {
            setPricePerPerson(parsedPrice);
          } else {
            console.error("Invalid pricePerPerson:", pricePerPerson);
          }
        } else {
          console.error("No pricePerPerson found!");
        }

        // Set maxBookingDuration
        if (maxBookingDuration) {
          setEndDate(new Date(year, month, day + maxBookingDuration));
        }

        // Set maxPersons
        if (maxPersons) {
          setMaxPersons(maxPersons);
        }
      } catch (error) {
        console.error("Error fetching booking settings:", error);
      }
    }

    fetchBookingSettings();
  }, []);

  const form = useForm<z.infer<ReturnType<typeof BookingFormSchema>>>({
    resolver: zodResolver(BookingFormSchema(maxPersons)),
    defaultValues: {
      startDate: tomorrow,
      endDate: endDate,
      telephone: "",
      numberOfPersons: 0,
      totalPrice: 0,
    },
  });

  const numOfDays =
    Math.floor(
      (form.watch("endDate")?.getTime() - form.watch("startDate")?.getTime()) /
        (1000 * 60 * 60 * 24)
    ) | 0;

  const selectedStartDate = form.watch("startDate");

  useEffect(() => {
    if (!selectedStartDate) return;

    setEndDate(
      new Date(
        selectedStartDate.getFullYear(),
        selectedStartDate.getMonth(),
        selectedStartDate.getDate() + 7
      )
    );

    // Update form state when `endDate` is recalculated
    form.setValue(
      "endDate",
      new Date(
        selectedStartDate.getFullYear(),
        selectedStartDate.getMonth(),
        selectedStartDate.getDate() + 7
      )
    );
  }, [selectedStartDate, form]);

  function closeDialog() {
    setShowConfirmDialog(false);
  }

  function onSubmit() {
    setTotalPrice(pricePerPerson! * form.watch("numberOfPersons") * numOfDays);
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
                    onSelect={(date) => {
                      if (date) {
                        field.onChange(date);
                      }
                    }}
                    disabled={(date) => date < tomorrow}
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
                      onSelect={(date) => {
                        if (date) {
                          field.onChange(date);
                        }
                      }}
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
                Total days: {numOfDays}. End date is checkout date and its not
                included
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
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(value === "" ? value : Number(value));
                  }}
                />
              </FormControl>
              <FormDescription>Max is {maxPersons}</FormDescription>
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
                <Input
                  type="text"
                  {...field}
                  placeholder="+355 68 123 4567"
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(formatIncompletePhoneNumber(value));
                  }}
                />
              </FormControl>
              <FormDescription>
                Make sure to include your country prefix
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
                    (form.watch("endDate")?.getTime() -
                      form.watch("startDate")?.getTime()) /
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
          maxPersons={maxPersons}
          closeDialog={closeDialog}
        />
      </form>
    </Form>
  );
}
