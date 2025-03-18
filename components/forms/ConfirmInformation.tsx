"use client";

import { Button } from "../ui/button";
import { formatDate } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface ConfirmInformationProps {
	nextStep: () => void;
	prevStep: () => void;
	formData: any;
}

// ✅ File Type Icons Mapping
const MIME_TYPE_MAP: Record<string, string> = {
	"application/pdf": "/assets/icons/pdf.svg",
	"application/msword": "/assets/icons/word.svg",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document":
		"/assets/icons/word.svg",
};

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
		value: (data: any) => formatDate(data.nationality),
	},
	{
		label: "State of Origin",
		value: (data: any) => formatDate(data.stateOfOrigin),
	},
	{
		label: "Residential Address",
		value: (data: any) => formatDate(data.residentialAddress),
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
	const router = useRouter();
	const handleSubmit = async () => {
		console.log(formData);
		router.push("/success-application");
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
				<Button size="lg" onClick={handleSubmit} className="ml-2">
					Submit Application
				</Button>
			</div>
		</div>
	);
};

export default ConfirmInformation;
