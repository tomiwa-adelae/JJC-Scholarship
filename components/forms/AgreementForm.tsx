import { AgreementFormSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Checkbox } from "@/components/ui/checkbox";

type FormValues = z.infer<typeof AgreementFormSchema>;

interface AcademicInformationProps {
	nextStep: () => void;
	prevStep: () => void;
	handleChange: (
		input: keyof FormValues
	) => (e: string | React.ChangeEvent<HTMLInputElement>) => void;
	values: FormValues;
}

const AgreementForm: React.FC<AcademicInformationProps> = ({
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
		resolver: zodResolver(AgreementFormSchema),
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
				6. Agreement & Submission
			</h3>
			<Form {...form}>
				<form
					// @ts-ignore
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<FormField
						control={form.control}
						name="confirmInformation"
						render={({ field }) => (
							<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={(checked) => {
											field.onChange(checked);
											handleChange("confirmInformation")(
												// @ts-ignore
												checked
											);
										}}
									/>
								</FormControl>
								<div className="space-y-1 leading-none">
									<FormLabel>
										I confirm that all information provided
										is accurate and complete.
									</FormLabel>
								</div>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="agreeToTerms"
						render={({ field }) => (
							<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={(checked) => {
											field.onChange(checked);
											handleChange("agreeToTerms")(
												// @ts-ignore
												checked
											);
										}}
									/>
								</FormControl>
								<div className="space-y-1 leading-none">
									<FormLabel>
										I agree to the terms and conditions of
										the JJC Scholarship.
									</FormLabel>
								</div>
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

export default AgreementForm;
