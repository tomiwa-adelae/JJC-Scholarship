import { SupportingDocumentsFormSchema } from "@/lib/validations";
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
import { z } from "zod";
import { Button } from "../ui/button";
import { FileUpload } from "@/components/ui/file-upload";

type FormValues = z.infer<typeof SupportingDocumentsFormSchema>;

interface AcademicInformationProps {
	nextStep: () => void;
	prevStep: () => void;
	handleChange: (
		input: keyof FormValues
	) => (e: string | React.ChangeEvent<HTMLInputElement>) => void;
	values: FormValues;
}

const SupportingDocumentsForm: React.FC<AcademicInformationProps> = ({
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
		resolver: zodResolver(SupportingDocumentsFormSchema),
		defaultValues: values, // ✅ Pre-fill values when going back
	});

	const onSubmit = form.handleSubmit(
		(data) => {
			console.log("Validated data:", data);
			nextStep();
		},
		(errors) => {
			console.log("Validation errors:", errors);
		}
	);

	return (
		<div>
			<h3 className="text-lg uppercase font-semibold mb-6 text-primary">
				4. Supporting Documents
			</h3>
			<Form {...form}>
				<form
					// @ts-ignore
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* <FormField
							control={form.control}
							name="passportPhoto"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Recent Passport Photograph
									</FormLabel>
									<div className="border border-input rounded-md mt-3 bg-background">
										<FileUpload
											onChange={(files) => {
												field.onChange(files);
												handleChange("passportPhoto")(
													// @ts-ignore
													files
												);
											}}
										/>
									</div>
									<FormMessage />
								</FormItem>
							)}
						/> */}
						<FormField
							control={form.control}
							name="passportPhoto"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Recent Passport Photograph
									</FormLabel>
									<div className="border border-input rounded-md mt-3 bg-background p-4">
										<FileUpload
											onChange={(files) => {
												if (files.length > 0) {
													field.onChange(files[0]); // ✅ Only store the first file
													handleChange(
														"passportPhoto"
														// @ts-ignore
													)(files);
												}
											}}
										/>
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="recommendationLetter"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Recommendation Letter (From a parent,
										teacher, mentor, or community leader)
									</FormLabel>
									<div className="border border-input rounded-md mt-3 bg-background">
										<FileUpload
											onChange={(files) => {
												field.onChange(files);
												handleChange(
													"recommendationLetter"
													// @ts-ignore
												)(files);
											}}
										/>
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
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

export default SupportingDocumentsForm;
