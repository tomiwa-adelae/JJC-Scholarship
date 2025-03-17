import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const PersonalInformationFormSchema = z.object({
	firstName: z.string().min(2, {
		message: "First name must be at least 2 characters.",
	}),
	lastName: z.string().min(2, {
		message: "Last name must be at least 2 characters.",
	}),
	middleName: z.string().min(2, {
		message: "Middle name must be at least 2 characters.",
	}),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	phoneNumber: z
		.string()
		.regex(/^(\+?\d{10,15})$/, { message: "Enter a valid phone number." })
		.refine(isValidPhoneNumber, {
			message: "Invalid phone number",
		}),
	dob: z.string().refine(
		(val) => {
			const dob = new Date(val);
			const minAge = 1; // Minimum required age
			const today = new Date();
			const age = today.getFullYear() - dob.getFullYear();
			return age >= minAge;
		},
		{ message: "You must be at least 16 years old." }
	),
	gender: z.string().min(2, {
		message: "Gender must be either Male or Female.",
	}),
	nationality: z.string().min(2, {
		message: "Please enter your nationality.",
	}),
	stateOfOrigin: z
		.string()
		.min(2, { message: "State of origin is required." }),
	residentialAddress: z
		.string()
		.min(5, { message: "Enter a valid address." }),
});

export const AcademicInformationFormSchema = z.object({
	currentEducationalLevel: z.string().min(2, {
		message: "Current educational level must be at least 2 characters.",
	}),
	schoolName: z.string().min(2, {
		message: "The name of your school is required.",
	}),
	universityAdmissionStatus: z.string().min(2, {
		message: "The status is required.",
	}),
	jambScore: z.string().min(2, {
		message: "Your JAMB Score is required.",
	}),
	jambSubjects: z
		.array(z.string())
		.refine((value) => value.some((item) => item), {
			message: "You have to select at least four subjects.",
		}),
	schoolOfChoice: z.string().min(2, {
		message: "The school of your choice is required.",
	}),
	courseOfChoice: z.string().min(2, {
		message: "The course of your course is required.",
	}),
	oLevelResult: z.string().url({ message: "Upload your O'level result." }),
});
