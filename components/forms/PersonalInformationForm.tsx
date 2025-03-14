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

// Define the Zod schema for validation
const FormSchema = z.object({
	firstName: z.string().min(2, {
		message: "First name must be at least 2 characters.",
	}),
	lastName: z.string().min(2, {
		message: "Last name must be at least 2 characters.",
	}),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
});

type FormValues = z.infer<typeof FormSchema>;

// Define props type
interface PersonalInformationFormProps {
	nextStep: () => void;
	handleChange: (
		input: "firstName" | "lastName" | "email"
	) => (e: React.ChangeEvent<HTMLInputElement>) => void;
	values: {
		firstName: string;
		lastName: string;
		email: string;
	};
}

const PersonalInformationForm: React.FC<PersonalInformationFormProps> = ({
	nextStep,
	handleChange,
	values,
}) => {
	const form = useForm<FormValues>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
		},
	});

	const onSubmit = (data: FormValues) => {
		console.log("Validated data:", data);
		nextStep(); // Proceed to the next form
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-2/3 space-y-6"
			>
				<FormField
					control={form.control}
					name="firstName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>First Name</FormLabel>
							<FormControl>
								<Input
									placeholder="John"
									{...field}
									onChange={(e) => {
										field.onChange(e); // Keep react-hook-form functionality
										handleChange("firstName")(e); // Call parent handleChange if needed
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
						<FormItem>
							<FormLabel>Last Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Doe"
									{...field}
									onChange={(e) => {
										field.onChange(e); // Keep react-hook-form functionality
										handleChange("lastName")(e); // Call parent handleChange if needed
									}}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

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
										field.onChange(e); // Keep react-hook-form functionality
										handleChange("email")(e); // Call parent handleChange if needed
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
				>
					Continue
				</Button>
			</form>
		</Form>
	);
};

export default PersonalInformationForm;
