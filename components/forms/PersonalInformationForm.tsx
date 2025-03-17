"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PersonalInformationFormSchema } from "@/lib/validations";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { genders, stateOfOrigins } from "@/constants";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type FormValues = z.infer<typeof PersonalInformationFormSchema>;

interface PersonalInformationFormProps {
	nextStep: () => void;
	handleChange: (
		input: keyof FormValues
	) => (e: string | React.ChangeEvent<HTMLInputElement>) => void;
	values: FormValues;
}

const PersonalInformationForm: React.FC<PersonalInformationFormProps> = ({
	nextStep,
	handleChange,
	values,
}) => {
	const form = useForm<FormValues>({
		resolver: zodResolver(PersonalInformationFormSchema),
		defaultValues: values, // ✅ Pre-fill values when going back
	});

	const onSubmit = async (data: FormValues) => {
		console.log("Validated data:", data);
		nextStep(); // Proceed to the next form
	};

	return (
		<div>
			<h3 className="text-lg uppercase font-semibold mb-6 text-primary">
				1. Personal Information
			</h3>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-6">
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem className="col-span-2 md:col-span-1">
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input
											placeholder="John"
											{...field}
											onChange={(e) => {
												field.onChange(e);
												handleChange("firstName")(e);
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="lastName"
							render={({ field }) => (
								<FormItem className="col-span-2 md:col-span-1">
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input
											placeholder="Doe"
											{...field}
											onChange={(e) => {
												field.onChange(e);
												handleChange("lastName")(e);
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="middleName"
							render={({ field }) => (
								<FormItem className="col-span-2 lg:col-span-1">
									<FormLabel>Middle Name</FormLabel>
									<FormControl>
										<Input
											placeholder="Smith"
											{...field}
											onChange={(e) => {
												field.onChange(e);
												handleChange("middleName")(e);
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder="john@example.com"
											{...field}
											onChange={(e) => {
												field.onChange(e);
												handleChange("email")(e);
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phoneNumber"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone Number</FormLabel>
									<FormControl>
										<PhoneInput
											placeholder="Enter phone number"
											value={field.value}
											onChange={(phone) => {
												field.onChange(phone);
												handleChange("phoneNumber")(
													phone || ""
												); // ✅ Ensure string format
											}}
											defaultCountry="NG"
											className="flex h-14 w-full rounded-md border border-input bg-background px-3 py-2 text-base sm:text-sm"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<FormField
							control={form.control}
							name="gender"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Gender</FormLabel>
									<Select
										onValueChange={(value) => {
											field.onChange(value); // ✅ Updates react-hook-form state
											handleChange("gender")(value); // ✅ Updates global form state
										}}
										value={field.value} // ✅ Ensure the value persists
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select your gender" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{genders.map((gender, index) => (
												<SelectItem
													key={index}
													value={gender}
												>
													{gender}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="dob"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel className="mb-2.5">
										Date of Birth
									</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														"pl-3 text-left text-base sm:text-sm capitalize font-normal h-14",
														!field.value &&
															"text-muted-foreground"
													)}
												>
													{field.value ? (
														format(
															new Date(
																field.value
															),
															"PPP"
														)
													) : (
														<span>Pick a date</span>
													)}
													<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent
											className="w-auto p-0"
											align="start"
										>
											<Calendar
												mode="single"
												selected={
													field.value
														? new Date(field.value)
														: undefined
												} // ✅ Ensure it's a Date object
												onSelect={(date) => {
													if (date) {
														const isoDate =
															date.toISOString(); // ✅ Convert to string
														field.onChange(isoDate); // ✅ Update react-hook-form state
														handleChange("dob")(
															isoDate
														); // ✅ Update global state
													}
												}}
												disabled={(date) =>
													date > new Date() ||
													date <
														new Date("1900-01-01")
												}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<FormField
							control={form.control}
							name="nationality"
							render={({ field }) => (
								<FormItem className="col-span-2 lg:col-span-1">
									<FormLabel>Nationality</FormLabel>
									<FormControl>
										<Input
											placeholder="Nigerian"
											{...field}
											onChange={(e) => {
												field.onChange(e);
												handleChange("nationality")(e);
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="stateOfOrigin"
							render={({ field }) => (
								<FormItem>
									<FormLabel>State of Origin</FormLabel>
									<Select
										onValueChange={(value) => {
											field.onChange(value); // ✅ Update react-hook-form state
											handleChange("stateOfOrigin")(
												value
											); // ✅ Update global form state
										}}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select your State of Origin" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{stateOfOrigins.map(
												(state, index) => (
													<SelectItem
														key={index}
														value={state}
													>
														{state}
													</SelectItem>
												)
											)}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="residentialAddress"
						render={({ field }) => (
							<FormItem className="col-span-2 lg:col-span-1">
								<FormLabel>Residential Address</FormLabel>
								<FormControl>
									<Input
										placeholder="House number, street, state..."
										{...field}
										onChange={(e) => {
											field.onChange(e);
											handleChange("residentialAddress")(
												e
											);
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type="submit"
						// disabled={!form.formState.isValid}
						className="w-full mt-4"
						size={"lg"}
					>
						Continue
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default PersonalInformationForm;
