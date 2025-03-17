"use client";
import { useState } from "react";
import PersonalInformationForm from "./PersonalInformationForm";
import AcademicInformationForm from "./AcademicInformationForm";
import ScholarshipCriteriaForm from "./ScholarshipCriteria";
import SupportingDocumentsForm from "./SupportingDocumentsForm";
import ParentalInformationForm from "./ParentalInformationForm";
import AgreementForm from "./AgreementForm";

const ApplicationForm = () => {
	const [step, setStep] = useState(1);

	const [formData, setFormData] = useState({
		// Personal Information Fields
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

		// Academic Information Fields
		currentEducationalLevel: "",
		schoolName: "",
		universityAdmissionStatus: "",
		jambScore: "",
		jambSubjects: [],
		schoolOfChoice: "",
		courseOfChoice: "",
		oLevelResult: [] as File[],

		// Scholarship Criteria Fields
		otherScholarship: "",
		reasonForApplication: "",
		careerGoals: "",
		challengesFaced: "",
		leadershipExperience: "",

		// Supporting Documents
		passportPhoto: [] as File[],
		recommendationLetter: [] as File[],

		// Guardian's fields
		guardianFullName: "",
		guardianEmail: "",
		guardianPhoneNumber: "",
		guardianOccupation: "",

		// Agreement
		confirmInformation: false,
		agreeToTerms: false,
	});

	const handleChange =
		(input: keyof typeof formData) =>
		(
			e:
				| string
				| string[]
				| boolean
				| File[]
				| React.ChangeEvent<HTMLInputElement>
				| React.ChangeEvent<HTMLTextAreaElement>
		) => {
			setFormData((prev) => ({
				...prev,
				[input]:
					typeof e === "boolean"
						? e
						: Array.isArray(e) || e instanceof FileList
						? e
						: typeof e === "string"
						? e
						: e.target.value,
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
					values={{
						...formData,
					}}
				/>
			)}

			{step === 3 && (
				<ScholarshipCriteriaForm
					nextStep={nextStep}
					prevStep={prevStep}
					handleChange={handleChange}
					values={{
						...formData,
					}}
				/>
			)}

			{step === 4 && (
				<SupportingDocumentsForm
					nextStep={nextStep}
					prevStep={prevStep}
					handleChange={handleChange}
					values={{
						...formData,
					}}
				/>
			)}

			{step === 5 && (
				<ParentalInformationForm
					nextStep={nextStep}
					prevStep={prevStep}
					handleChange={handleChange}
					values={{
						...formData,
					}}
				/>
			)}

			{step === 6 && (
				<AgreementForm
					nextStep={nextStep}
					prevStep={prevStep}
					handleChange={handleChange}
					values={{
						...formData,
					}}
				/>
			)}
		</div>
	);
};

export default ApplicationForm;
