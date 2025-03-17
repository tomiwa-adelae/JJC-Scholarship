// import React from "react";
// import {
// 	Dialog,
// 	DialogContent,
// 	DialogHeader,
// 	DialogTitle,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// // Define props type
// interface FormPersonalDetailsProps {
// 	nextStep: () => void;
// 	prevStep: () => void;
// 	handleChange: (
// 		input: "occupation" | "city" | "bio"
// 	) => (e: React.ChangeEvent<HTMLInputElement>) => void;
// 	values: {
// 		occupation: string;
// 		city: string;
// 		bio: string;
// 	};
// }

// const FormPersonalDetails: React.FC<FormPersonalDetailsProps> = ({
// 	nextStep,
// 	prevStep,
// 	handleChange,
// 	values,
// }) => {
// 	const continueHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
// 		e.preventDefault();
// 		nextStep();
// 	};

// 	const backHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
// 		e.preventDefault();
// 		prevStep();
// 	};

// 	return (
// 		<Dialog open>
// 			<DialogContent className="max-w-md p-6">
// 				<DialogHeader>
// 					<DialogTitle className="text-center text-xl font-semibold">
// 						Enter Personal Details
// 					</DialogTitle>
// 				</DialogHeader>

// 				<div className="space-y-4">
// 					<Input
// 						placeholder="Occupation"
// 						value={values.occupation}
// 						onChange={handleChange("occupation")}
// 						className="w-full"
// 					/>
// 					<Input
// 						placeholder="City"
// 						value={values.city}
// 						onChange={handleChange("city")}
// 						className="w-full"
// 					/>
// 					<Input
// 						placeholder="Bio"
// 						value={values.bio}
// 						onChange={handleChange("bio")}
// 						className="w-full"
// 					/>
// 				</div>

// 				<div className="flex justify-between mt-6">
// 					<Button onClick={backHandler} variant="outline">
// 						Back
// 					</Button>
// 					<Button onClick={continueHandler} className="ml-2">
// 						Continue
// 					</Button>
// 				</div>
// 			</DialogContent>
// 		</Dialog>
// 	);
// };

// export default FormPersonalDetails;

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
	occupation: z.string().min(2, {
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

interface FormPersonalDetailsProps {
	nextStep: () => void;
	prevStep: () => void;
	handleChange: (
		input: "occupation" | "city" | "bio"
	) => (e: React.ChangeEvent<HTMLInputElement>) => void;
	values: {
		occupation: string;
		city: string;
		bio: string;
	};
}

const FormPersonalDetails: React.FC<FormPersonalDetailsProps> = ({
	nextStep,
	prevStep,
	handleChange,
	values,
}) => {
	const continueHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		nextStep();
	};

	const backHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		prevStep();
	};
	const form = useForm<FormValues>({
		resolver: zodResolver(FormSchema),
		defaultValues: values, // ✅ Pre-fill values when going back
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
					name="occupation"
					render={({ field }) => (
						<FormItem>
							<FormLabel>First Name</FormLabel>
							<FormControl>
								<Input
									placeholder="John"
									{...field}
									onChange={(e) => {
										field.onChange(e); // Keep react-hook-form functionality
										handleChange("occupation")(e); // Call parent handleChange if needed
									}}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex justify-between mt-6">
					<Button onClick={backHandler} variant="outline">
						Back
					</Button>
					<Button
						type="submit"
						onClick={continueHandler}
						className="ml-2"
					>
						Continue
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default FormPersonalDetails;
