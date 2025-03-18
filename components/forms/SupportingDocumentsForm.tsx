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
import { uploadDocuments } from "@/lib/actions/upload.actions";
import { useState } from "react";
import { Loader2 } from "lucide-react";

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
	const [loading, setLoading] = useState(false);
	const [loading2, setLoading2] = useState(false);

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
											loading={loading}
											onChange={(files) => {
												const reader = new FileReader();
												reader.readAsDataURL(files[0]);
												reader.onload = async () => {
													try {
														setLoading(true);
														const binaryString =
															reader.result;
														const result =
															await uploadDocuments(
																binaryString
															);
														console.log(
															binaryString
														);
														field.onChange(
															result?.url
														);
														handleChange(
															"passportPhoto"
														)(
															// @ts-ignore
															result.url
														);
														setLoading(false);
													} catch (error) {
														setLoading(false);
													} finally {
														setLoading(false);
													}
												};
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
											loading={loading2}
											onChange={(files) => {
												const reader = new FileReader();
												reader.readAsDataURL(files[0]);
												reader.onload = async () => {
													try {
														setLoading2(true);
														const binaryString =
															reader.result;

														const result =
															await uploadDocuments(
																binaryString
															);

														field.onChange(
															result?.url
														);
														handleChange(
															"recommendationLetter"
														)(
															// @ts-ignore
															result.url
														);
														setLoading2(false);
													} catch (error) {
														setLoading2(false);
													} finally {
														setLoading2(false);
													}
												};
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
						<Button
							disabled={loading || loading2}
							size="lg"
							type="submit"
							className="ml-2"
						>
							{loading || loading2 ? (
								<>
									<Loader2 className="w-4 h-4 animate-spin transition-all" />
								</>
							) : (
								"Continue"
							)}
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default SupportingDocumentsForm;
