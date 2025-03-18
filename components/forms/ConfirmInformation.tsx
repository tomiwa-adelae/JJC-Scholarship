"use client";

import { registerScholarship } from "@/lib/actions/user.actions";
import { Button } from "../ui/button";
import { formatDate } from "@/lib/utils";
import { useRouter } from "next/navigation";

import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import Image from "next/image";

interface ConfirmInformationProps {
	nextStep: () => void;
	prevStep: () => void;
	formData: any;
}

// ✅ Personal Information Fields
const personalInfoFields = [
	{
		label: "Full Name",
		value: (data: any) =>
			`${data.firstName} ${data.middleName} ${data.lastName}`,
	},
	{ label: "Email", value: (data: any) => data.email },
	{ label: "Phone Number", value: (data: any) => data.phoneNumber },
	{ label: "Gender", value: (data: any) => data.gender },
	{ label: "Date of Birth", value: (data: any) => formatDate(data.dob) },
	{
		label: "Nationality",
		value: (data: any) => data.nationality,
	},
	{
		label: "State of Origin",
		value: (data: any) => data.stateOfOrigin,
	},
	{
		label: "Residential Address",
		value: (data: any) => data.residentialAddress,
	},
];

// ✅ Academic Information Fields
const academicInfoFields = [
	{
		label: "Educational Level",
		value: (data: any) => data.currentEducationalLevel,
	},
	{ label: "School Name", value: (data: any) => data.schoolName },
	{
		label: "University Admission Status",
		value: (data: any) => data.universityAdmissionStatus,
	},
	{ label: "JAMB Score", value: (data: any) => data.jambScore },
	{
		label: "JAMB Subjects",
		value: (data: any) => data.jambSubjects?.join(", ") || "N/A",
	},
	{ label: "School of Choice", value: (data: any) => data.schoolOfChoice },
	{ label: "Course of Choice", value: (data: any) => data.courseOfChoice },
];

// ✅ Scholarship Criteria Fields
const scholarshipInfoFields = [
	{
		label: "On Another Scholarship?",
		value: (data: any) => data.otherScholarship,
	},
	{
		label: "Reason for Applying",
		value: (data: any) => data.reasonForApplication,
	},
	{ label: "Career Goals", value: (data: any) => data.careerGoals },
	{ label: "Challenges Faced", value: (data: any) => data.challengesFaced },
	{
		label: "Leadership Experience",
		value: (data: any) => data.leadershipExperience,
	},
];

// ✅ Scholarship Criteria Fields
const parentalInfoFields = [
	{
		label: "Guardian's name",
		value: (data: any) => data.guardianFullName,
	},
	{
		label: "Guardian's email",
		value: (data: any) => data.guardianEmail,
	},
	{
		label: "Guardian's phone number",
		value: (data: any) => data.guardianPhoneNumber,
	},
	{
		label: "Guardian's occupation",
		value: (data: any) => data.guardianOccupation,
	},
];

const ConfirmInformation: React.FC<ConfirmInformationProps> = ({
	nextStep,
	prevStep,
	formData,
}) => {
	const [loading, setLoading] = useState(false);

	const router = useRouter();
	const handleSubmit = async () => {
		try {
			setLoading(true);
			const res = await registerScholarship(formData);

			if (res?.status == 400)
				return toast({
					title: "Error!",
					description: res?.message,
					variant: "destructive",
				});

			setLoading(false);
			router.push(`/success-application?id=${res._id}`);
		} catch (error) {
			console.error("Submission Failed:", error);
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<h3 className="text-lg uppercase font-semibold mb-6 text-primary">
				7. Confirm Your Information
			</h3>
			<p className="text-sm text-gray-600 mb-4">
				Please review your details before submitting. If anything is
				incorrect, go back and update it.
			</p>
			{/* ✅ Reusable Section Component */}
			{[
				{ title: "Personal Information", fields: personalInfoFields },
				{ title: "Academic Information", fields: academicInfoFields },
				{
					title: "Scholarship Criteria",
					fields: scholarshipInfoFields,
				},
				{
					title: "Guardian's Information",
					fields: parentalInfoFields,
				},
			].map(({ title, fields }, index) => (
				<div
					key={index}
					className="border border-input rounded-lg p-6 mb-4"
				>
					<h4 className="text-base uppercase text-primary font-semibold mb-4">
						{title}
					</h4>
					<div className="text-xs lg:text-[13px] font-medium space-y-4 text-gray-900">
						{fields.map(({ label, value }, i) => (
							<p key={i}>
								<span>{label}:</span> {value(formData)}
							</p>
						))}
					</div>
				</div>
			))}
			{/* ✅ Supporting documents Confirmation */}
			<div className="border border-input rounded-lg p-6 mb-4">
				<h4 className="text-base uppercase text-primary font-semibold mb-4">
					Supporting documents
				</h4>
				<div className="text-xs lg:text-[13px] font-medium text-gray-900 flex items-center justify-start flex-wrap gap-4">
					<div className="border border-input rounded-lg p-6 mb-4 flex flex-col items-center justify-center text-center">
						<h5 className="text-sm uppercase font-medium mb-3">
							O'level result
						</h5>
						{formData.oLevelResult.split(".").pop() === "jpg" ? (
							<Image
								src={formData.oLevelResult}
								alt={`${formData.firstName}'s picture`}
								width={1000}
								height={1000}
								className="h-32 w-32 object-cover rounded-md"
							/>
						) : formData.oLevelResult.split(".").pop() === "pdf" ? (
							<Image
								src={"/assets/icons/pdf.svg"}
								alt={"PDF Icon"}
								width={1000}
								height={1000}
								className="h-32 w-32 object-cover rounded-md"
							/>
						) : (
							<Image
								src={"/assets/icons/word.svg"}
								alt={"WORD Icon"}
								width={1000}
								height={1000}
								className="h-32 w-32 object-cover rounded-md"
							/>
						)}
					</div>
					<div className="border border-input rounded-lg p-6 mb-4 flex flex-col items-center justify-center text-center">
						<h5 className="text-sm uppercase font-medium mb-3">
							Passport photograph
						</h5>
						{formData.passportPhoto.split(".").pop() === "jpg" ? (
							<Image
								src={formData.passportPhoto}
								alt={`${formData.firstName}'s picture`}
								width={1000}
								height={1000}
								className="h-32 w-32 object-cover rounded-md"
							/>
						) : formData.passportPhoto.split(".").pop() ===
						  "pdf" ? (
							<Image
								src={"/assets/icons/pdf.svg"}
								alt={"PDF Icon"}
								width={1000}
								height={1000}
								className="h-32 w-32 object-cover rounded-md"
							/>
						) : (
							<Image
								src={"/assets/icons/word.svg"}
								alt={"WORD Icon"}
								width={1000}
								height={1000}
								className="h-32 w-32 object-cover rounded-md"
							/>
						)}
					</div>
					<div className="border border-input rounded-lg p-6 mb-4 flex flex-col items-center justify-center text-center">
						<h5 className="text-sm uppercase font-medium mb-3">
							Recommendation letter
						</h5>
						{formData.recommendationLetter.split(".").pop() ===
						"jpg" ? (
							<Image
								src={formData.recommendationLetter}
								alt={`${formData.firstName}'s picture`}
								width={1000}
								height={1000}
								className="h-32 w-32 object-cover rounded-md"
							/>
						) : formData.recommendationLetter.split(".").pop() ===
						  "pdf" ? (
							<Image
								src={"/assets/icons/pdf.svg"}
								alt={"PDF Icon"}
								width={1000}
								height={1000}
								className="h-32 w-32 object-cover rounded-md"
							/>
						) : (
							<Image
								src={"/assets/icons/word.svg"}
								alt={"WORD Icon"}
								width={1000}
								height={1000}
								className="h-32 w-32 object-cover rounded-md"
							/>
						)}
					</div>
				</div>
			</div>
			{/* ✅ Agreement Confirmation */}
			<div className="border border-input rounded-lg p-6 mb-4">
				<h4 className="text-base uppercase text-primary font-semibold mb-4">
					Agreement Confirmation
				</h4>
				<p className="text-xs lg:text-[13px] font-medium text-gray-900">
					<span>Agreed to Terms?</span>{" "}
					{formData.confirmInformation ? "Yes" : "No"}
				</p>
			</div>
			{/* ✅ Navigation Buttons */}
			<div className="flex justify-between mt-6">
				<Button size="lg" onClick={prevStep} variant="outline">
					Back
				</Button>
				<Button
					disabled={loading}
					size="lg"
					onClick={handleSubmit}
					className="ml-2"
				>
					{loading ? (
						<>
							<Loader2 className="w-4 h-4 animate-spin transition-all" />{" "}
							Submitting...
						</>
					) : (
						"Submit application"
					)}
				</Button>
			</div>
		</div>
	);
};

export default ConfirmInformation;
