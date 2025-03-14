"use client";

import React, { useState } from "react";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import PersonalInformationForm from "./PersonalInformationForm";

// Define the structure of form data
interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	occupation: string;
	city: string;
	bio: string;
}

const ApplicationForm = () => {
	const [step, setStep] = useState<number>(1);
	const [formData, setFormData] = useState<FormData>({
		firstName: "",
		lastName: "",
		email: "",
		occupation: "",
		city: "",
		bio: "",
	});

	// Proceed to next step
	const nextStep = () => setStep((prevStep) => prevStep + 1);

	// Go back to previous step
	const prevStep = () => setStep((prevStep) => prevStep - 1);

	// Handle input field changes
	const handleChange =
		(input: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
			setFormData({ ...formData, [input]: e.target.value });
		};

	// Render components based on the step
	switch (step) {
		case 1:
			return (
				<PersonalInformationForm
					nextStep={nextStep}
					handleChange={handleChange}
					values={formData}
				/>
			);
		case 2:
			return (
				<FormPersonalDetails
					nextStep={nextStep}
					prevStep={prevStep}
					handleChange={handleChange}
					values={formData}
				/>
			);
		case 3:
			return (
				<Confirm
					nextStep={nextStep}
					prevStep={prevStep}
					values={formData}
				/>
			);
		case 4:
			return <Success />;
		default:
			console.log(
				"This is a multi-step form built with React & TypeScript."
			);
			return null;
	}
};

export default ApplicationForm;
