import { ScholarshipCriteriaFormSchema } from "@/lib/validations";
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";

type FormValues = z.infer<typeof ScholarshipCriteriaFormSchema>;

interface AcademicInformationProps {
	nextStep: () => void;
	prevStep: () => void;
	handleChange: (
		input: keyof FormValues
	) => (e: string | React.ChangeEvent<HTMLInputElement>) => void;
	values: FormValues;
}

const ScholarshipCriteriaForm: React.FC<AcademicInformationProps> = ({
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
		resolver: zodResolver(ScholarshipCriteriaFormSchema),
		defaultValues: values,
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
				3. Scholarship Criteria
			</h3>
			<Form {...form}>
				<form
					// @ts-ignore
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<FormField
						control={form.control}
						name="otherScholarship"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Are you currently on any other scholarship?
								</FormLabel>
								<Select
									onValueChange={(value) => {
										field.onChange(value);
										handleChange("otherScholarship")(value);
									}}
									value={field.value}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select your answer" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{["Yes", "No"].map((answer, index) => (
											<SelectItem
												key={index}
												value={answer}
											>
												{answer}
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
						name="reasonForApplication"
						render={({ field }) => (
							<FormItem className="col-span-2 md:col-span-1">
								<FormLabel>
									Why do you need this scholarship?{" "}
								</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Enter your reasons"
										{...field}
										onChange={(e) => {
											field.onChange(e.target.value);
											handleChange(
												"reasonForApplication"
											)(e.target.value);
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="careerGoals"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									How will this scholarship help you achieve
									your goals?
								</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Enter your career goals"
										{...field}
										onChange={(e) => {
											field.onChange(e.target.value);
											handleChange("careerGoals")(
												e.target.value
											);
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="challengesFaced"
						render={({ field }) => (
							<FormItem className="col-span-2 md:col-span-1">
								<FormLabel>
									What challenges have you faced in pursuing
									your education and what have you been able
									to do?
								</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Enter the challenges faced and how you overcame them"
										{...field}
										onChange={(e) => {
											field.onChange(e.target.value);
											handleChange("challengesFaced")(
												e.target.value
											);
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="leadershipExperience"
						render={({ field }) => (
							<FormItem className="col-span-2 md:col-span-1">
								<FormLabel>
									List any leadership roles, extracurricular
									activities, or volunteer work
								</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Enter your leadership experiences"
										{...field}
										onChange={(e) => {
											field.onChange(e.target.value);
											handleChange(
												"leadershipExperience"
											)(e.target.value);
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

export default ScholarshipCriteriaForm;
