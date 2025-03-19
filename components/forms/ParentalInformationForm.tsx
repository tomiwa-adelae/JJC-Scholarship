import { ParentalInformationFormSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { Button } from "../ui/button";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

type FormValues = z.infer<typeof ParentalInformationFormSchema>;

interface AcademicInformationProps {
	nextStep: () => void;
	prevStep: () => void;
	handleChange: (
		input: keyof FormValues
	) => (e: string | React.ChangeEvent<HTMLInputElement>) => void;
	values: FormValues;
}

const ParentalInformationForm: React.FC<AcademicInformationProps> = ({
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
		resolver: zodResolver(ParentalInformationFormSchema),
		defaultValues: values,
	});

	const onSubmit = form.handleSubmit(
		(data) => {
			nextStep();
		},
		(errors) => {}
	);

	return (
		<div>
			<h3 className="text-lg uppercase font-semibold mb-6 text-primary">
				5. Parental/Guardian Information (For Minors)
			</h3>
			<Form {...form}>
				<form
					// @ts-ignore
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<FormField
						control={form.control}
						name="guardianFullName"
						render={({ field }) => (
							<FormItem className="col-span-2 md:col-span-1">
								<FormLabel>Guardian’s Full Name</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter your guardian's full name "
										{...field}
										onChange={(e) => {
											field.onChange(e);
											handleChange("guardianFullName")(e);
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="guardianEmail"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Guardian’s Email</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="Enter guardian's email address"
										{...field}
										onChange={(e) => {
											field.onChange(e);
											handleChange("guardianEmail")(e);
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="guardianPhoneNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Guardian’s Phone Number</FormLabel>
								<FormControl>
									<PhoneInput
										placeholder="Enter guardian's phone number"
										value={field.value}
										onChange={(phone: any) => {
											field.onChange(phone);
											handleChange("guardianPhoneNumber")(
												phone || ""
											);
										}}
										defaultCountry="NG"
										className="flex h-14 w-full rounded-md border border-input bg-background px-3 py-2 text-base sm:text-sm"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="guardianOccupation"
						render={({ field }) => (
							<FormItem className="col-span-2 md:col-span-1">
								<FormLabel>Guardian’s Occupation</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter your guardian's occupation"
										{...field}
										onChange={(e) => {
											field.onChange(e);
											handleChange("guardianOccupation")(
												e
											);
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex justify-between mt-6">
						<Button size="lg" onClick={prevStep} variant="outline">
							Back
						</Button>
						<Button size="lg" type="submit" className="ml-2">
							Continue
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default ParentalInformationForm;
