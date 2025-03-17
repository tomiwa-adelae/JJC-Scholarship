"use client";
import { useState } from "react";
import PersonalInformationForm from "./PersonalInformationForm";
import FormPersonalDetails from "./FormPersonalDetails";
import AcademicInformationForm from "./AcademicInformationForm";

const ApplicationForm = () => {
	const [step, setStep] = useState(2);

	// ✅ Store all form data in a single state object
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		middleName: "",
		email: "",
		phoneNumber: "",
		gender: "",
		nationality: "",
		stateOfOrigin: "",
		residentialAddress: "",
		dob: "",
		currentEducationalLevel: "",
		schoolName: "",
		universityAdmissionStatus: "",
		jambScore: "",
		jambSubjects: [],
	});

	// const handleChange =
	// 	(input: keyof typeof formData) =>
	// 	(e: Date | string | React.ChangeEvent<HTMLInputElement>) => {
	// 		setFormData((prev) => ({
	// 			...prev,
	// 			[input]:
	// 				e instanceof Date
	// 					? e.toISOString() // ✅ Convert Date to ISO string
	// 					: typeof e === "string"
	// 					? e // ✅ If string, store as is
	// 					: e.target.value, // ✅ If event, extract `target.value`
	// 		}));
	// 	};
	// const handleChange =
	// 	(input: keyof typeof formData) =>
	// 	(e: string | string[] | React.ChangeEvent<HTMLInputElement>) => {
	// 		setFormData((prev) => ({
	// 			...prev,
	// 			[input]: Array.isArray(e)
	// 				? e
	// 				: typeof e === "string"
	// 				? e
	// 				: e.target.value,
	// 		}));
	// 	};
	const handleChange =
		(input: keyof typeof formData) =>
		(e: string | string[] | React.ChangeEvent<HTMLInputElement>) => {
			setFormData((prev) => ({
				...prev,
				[input]: Array.isArray(e)
					? e
					: typeof e === "string"
					? e
					: e.target.value, // ✅ Handle arrays properly
			}));
		};

	// ✅ Step navigation handlers
	const nextStep = () => setStep((prev) => prev + 1);
	const prevStep = () => setStep((prev) => prev - 1);

	return (
		<div className="mt-10">
			{step === 1 && (
				<PersonalInformationForm
					nextStep={nextStep}
					handleChange={handleChange}
					values={formData}
				/>
			)}
			{step === 2 && (
				<AcademicInformationForm
					nextStep={nextStep}
					prevStep={prevStep}
					handleChange={handleChange}
					values={formData}
				/>
			)}
		</div>
	);
};

export default ApplicationForm;
