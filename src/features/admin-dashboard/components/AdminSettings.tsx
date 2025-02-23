"use client";

import { serializedSettings } from "@/app/(protected)/dashboard/page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AdminSettingsFormSchema } from "../schema/AdminSettingsFormSchema";
import { useState, useTransition } from "react";
import { updateReservationSettings } from "../actions/updateReservationSettings";
import { FormError } from "@/features/auth/components/FormError";
import { FormSuccess } from "@/features/auth/components/FormSuccess";
import { LucideRefreshCcw } from "lucide-react";

export const AdminSettings = ({
  settings,
}: {
  settings: serializedSettings;
}) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof AdminSettingsFormSchema>>({
    resolver: zodResolver(AdminSettingsFormSchema),
    defaultValues: {
      maxDays: settings.maxReservationDuration.toString(),
      maxPersons: settings.maxPersons.toString(),
      pricePerPerson: settings.pricePerPerson,
      id: settings.id,
    },
  });

  function onSubmit(values: z.infer<typeof AdminSettingsFormSchema>) {
    startTransition(async () => {
      await updateReservationSettings(values).then((data) => {
        if (data?.error) {
          setError(data.error);
        }
        if (data?.success) {
          setSuccess(data.success);
        }
      });
    });
  }

  function resetField(id: "id" | "maxPersons" | "pricePerPerson" | "maxDays") {
    form.resetField(id);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="maxPersons"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-between items-center">
                Max Persons per Reservation{" "}
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => resetField("maxPersons")}
                >
                  <LucideRefreshCcw />
                </Button>
              </FormLabel>
              <FormControl>
                <Input disabled={isPending} type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pricePerPerson"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-between items-center">
                Price per Person per Day
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => resetField("pricePerPerson")}
                >
                  <LucideRefreshCcw />
                </Button>
              </FormLabel>
              <FormControl>
                <Input disabled={isPending} type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maxDays"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-between items-center">
                Max Reservation Days
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => resetField("maxDays")}
                >
                  <LucideRefreshCcw />
                </Button>
              </FormLabel>
              <FormControl>
                <Input disabled={isPending} type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="hidden">
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Id</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormError error={error} />
        <FormSuccess success={success} />
        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  );
};
