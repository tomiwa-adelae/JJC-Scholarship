import { AcademicInformationFormSchema } from "@/lib/validations";
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { admissionStatus, educationalLevels, subjects } from "@/constants";
import { Checkbox } from "@/components/ui/checkbox";
import { FileUpload } from "@/components/ui/file-upload";
import React, { useState } from "react";

type FormValues = z.infer<typeof AcademicInformationFormSchema>;

interface AcademicInformationProps {
	nextStep: () => void;
	prevStep: () => void;
	handleChange: (
		input: keyof FormValues
	) => (e: string | React.ChangeEvent<HTMLInputElement>) => void;
	values: FormValues;
}

const AcademicInformationForm: React.FC<AcademicInformationProps> = ({
	nextStep,
	prevStep,
	handleChange,
	values,
}) => {
	// const continueHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
	// 	e.preventDefault();
	// 	nextStep();
	// };

	// const backHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
	// 	e.preventDefault();
	// 	prevStep();
	// };

	const form = useForm<FormValues>({
		resolver: zodResolver(AcademicInformationFormSchema),
		defaultValues: values, // ✅ Pre-fill values when going back
	});

	// const [files, setFiles] = useState<File[]>([]);
	// const handleFileUpload = (files: File[]) => {
	// 	setFiles(files);
	// 	console.log(files);
	// };

	const onSubmit = form.handleSubmit(
		(data) => {
			console.log("Validated data:", data);
			nextStep(); // ✅ Only moves to the next step if the form is valid
		},
		(errors) => {
			console.log("Validation errors:", errors); // ✅ Logs errors to debug
		}
	);

	return (
		<div>
			<h3 className="text-lg uppercase font-semibold mb-6 text-primary">
				2. Academic Information
			</h3>
			<Form {...form}>
				<form
					// @ts-ignore
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<FormField
						control={form.control}
						name="currentEducationalLevel"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Current educational level</FormLabel>
								<Select
									onValueChange={(value) => {
										field.onChange(value);
										handleChange("currentEducationalLevel")(
											value
										);
									}}
									value={field.value}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select your current educational level" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{educationalLevels.map(
											(gender, index) => (
												<SelectItem
													key={index}
													value={gender}
												>
													{gender}
												</SelectItem>
											)
										)}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<FormField
							control={form.control}
							name="schoolName"
							render={({ field }) => (
								<FormItem className="col-span-2 md:col-span-1">
									<FormLabel>School name</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your secondary school name"
											{...field}
											onChange={(e) => {
												field.onChange(e);
												handleChange("schoolName")(e);
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="universityAdmissionStatus"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										University admission status
									</FormLabel>
									<Select
										onValueChange={(value) => {
											field.onChange(value);
											handleChange(
												"universityAdmissionStatus"
											)(value);
										}}
										value={field.value}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select your university admission status" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{admissionStatus.map(
												(gender, index) => (
													<SelectItem
														key={index}
														value={gender}
													>
														{gender}
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
						name="jambScore"
						render={({ field }) => (
							<FormItem className="col-span-2 md:col-span-1">
								<FormLabel>JAMB Score</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter your JAMB score"
										{...field}
										onChange={(e) => {
											field.onChange(e);
											handleChange("jambScore")(e);
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="jambSubjects"
						render={({ field }) => (
							<FormItem>
								<FormLabel>JAMB Subjects</FormLabel>
								<div className="flex flex-wrap gap-8">
									{subjects.map((item) => {
										const selectedValues: string[] =
											field.value || [];

										return (
											<FormField
												key={item.id}
												control={form.control}
												name="jambSubjects"
												render={() => (
													<FormItem className="flex flex-row subjects-start space-x-3 space-y-0 mt-2">
														<FormControl>
															<Checkbox
																checked={selectedValues.includes(
																	item.id
																)}
																onCheckedChange={(
																	checked
																) => {
																	const updatedSubjects =
																		checked
																			? [
																					...selectedValues,
																					item.id,
																			  ]
																			: selectedValues.filter(
																					(
																						value
																					) =>
																						value !==
																						item.id
																			  );

																	field.onChange(
																		updatedSubjects
																	);
																	handleChange(
																		"jambSubjects"
																	)(
																		// @ts-ignore
																		updatedSubjects
																	);
																}}
															/>
														</FormControl>
														<FormLabel className="font-normal">
															{item.label}
														</FormLabel>
													</FormItem>
												)}
											/>
										);
									})}
								</div>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<FormField
							control={form.control}
							name="schoolOfChoice"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Intended school of choice
									</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your intended school of choice"
											{...field}
											onChange={(e) => {
												field.onChange(e);
												handleChange("schoolOfChoice")(
													e
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
							name="courseOfChoice"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Intended course of choice
									</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your intended course of study"
											{...field}
											onChange={(e) => {
												field.onChange(e);
												handleChange("courseOfChoice")(
													e
												);
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="oLevelResult"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									O'level results (WAEC, NECO, GCE)
								</FormLabel>
								<div className="border border-input rounded-md mt-3 bg-background">
									<FileUpload
										onChange={(files) => {
											field.onChange(files);
											// @ts-ignore
											handleChange("oLevelResult")(files);
										}}
									/>
								</div>
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

export default AcademicInformationForm;
