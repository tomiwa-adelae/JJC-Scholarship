import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

// ✅ Allowed file types
const acceptedImageTypes = [
	"image/jpeg",
	"image/png",
	"image/jpg",
	"image/gif",
	"image/webp",
];

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
	oLevelResult: z.custom<File[]>((files) => files && files.length > 0, {
		message: "Please upload your O'level result.",
	}),
});

export const ScholarshipCriteriaFormSchema = z.object({
	otherScholarship: z.string().min(2, {
		message: "Please select an answer.",
	}),
	reasonForApplication: z
		.string()
		.min(10, { message: "Explain why you need this scholarship." }),
	careerGoals: z
		.string()
		.min(10, { message: "Describe how this scholarship will help you." }),
	challengesFaced: z.string().min(10, {
		message: "Describe some of the challenges you've overcome.",
	}),
	leadershipExperience: z.string().min(10, {
		message: "List your leadership roles or extracurricular activities.",
	}),
});

export const SupportingDocumentsFormSchema = z.object({
	passportPhoto: z
		.instanceof(File)
		.refine((file) => acceptedImageTypes.includes(file.type), {
			message: "Only JPG, PNG, GIF, and WebP images are allowed.",
		}),
	recommendationLetter: z.custom<File[]>(
		(files) => files && files.length > 0,
		{
			message: "Please upload your recommendation letter.",
		}
	),
});

export const ParentalInformationFormSchema = z.object({
	guardianFullName: z.string().min(2, {
		message: "Guardian's full name is required",
	}),
	guardianEmail: z.string().email({
		message: "Guardian's full name is required",
	}),
	guardianPhoneNumber: z
		.string()
		.regex(/^(\+?\d{10,15})$/, {
			message: "Please enter a valid phone number.",
		})
		.refine(isValidPhoneNumber, {
			message: "Invalid phone number",
		}),
	guardianOccupation: z.string().min(2, {
		message: "Guardian's full name is required",
	}),
});

export const AgreementFormSchema = z.object({
	confirmInformation: z.boolean().refine((val) => val === true, {
		message: "You must confirm the information.",
	}),
	agreeToTerms: z.boolean().refine((val) => val === true, {
		message: "You must agree to the terms and conditions.",
	}),
});
