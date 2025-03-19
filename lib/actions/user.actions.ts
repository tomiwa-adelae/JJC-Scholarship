"use server";

import { generateAdminEmail, generateStudentEmail } from "@/templates";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";

import Mailjet from "node-mailjet";

const mailjet = Mailjet.apiConnect(
	process.env.MAILJET_API_PUBLIC_KEY!,
	process.env.MAILJET_API_PRIVATE_KEY!
);

// Register Scholarship Application
export const registerScholarship = async (user: UserParams) => {
	try {
		await connectToDatabase();

		// Check if the user already exists
		const userExist = await User.findOne({ email: user.email });

		if (userExist) {
			return {
				status: 400,
				message:
					"You are already registered with this email. Wait till we get back to you.",
			};
		}

		// Create New User Entry
		const newUser = await User.create(user);

		if (!newUser) {
			return {
				status: 400,
				message: "Registration was not successful. Try again later.",
			};
		}

		// **Send Confirmation Email to Student**
		await mailjet.post("send", { version: "v3.1" }).request({
			Messages: [
				{
					From: {
						Email: process.env.SENDER_EMAIL_ADDRESS!,
						Name: process.env.COMPANY_NAME!,
					},
					To: [
						{
							Email: newUser.email,
							Name: newUser.firstName,
						},
					],
					Subject: `🎉 Application Received – Jehovah Jireh City Scholarship`,
					TextPart: `🎉 Application Received – Jehovah Jireh City Scholarship`,
					HTMLPart: generateStudentEmail(newUser),
				},
			],
		});

		// **Send Email to Admin**
		await mailjet.post("send", { version: "v3.1" }).request({
			Messages: [
				{
					From: {
						Email: process.env.SENDER_EMAIL_ADDRESS!,
						Name: process.env.COMPANY_NAME!,
					},
					To: [
						{
							Email: process.env.ADMIN_EMAIL_ADDRESS!, // Admin Email
							Name: "JJC Scholarship Team",
						},
					],
					Subject: `📩 New Scholarship Application Submitted`,
					TextPart: `A new scholarship application has been submitted.`,
					HTMLPart: generateAdminEmail(newUser),
				},
			],
		});

		// Return Success Response
		return {
			status: 200,
			message:
				"Your scholarship application has been received successfully! Check your email for confirmation.",
			scholarship: JSON.parse(JSON.stringify(newUser)),
		};
	} catch (error) {
		console.error("Error in registerScholarship:", error);
		return {
			status: 500,
			message: "Something went wrong. Please try again later.",
		};
	}
};

export const getScholarshipDetails = async (id: any) => {
	try {
		await connectToDatabase();

		const scholarship = await User.findById(id);

		if (!scholarship)
			return {
				status: 400,
				message: "Registration not successful. Try again later.",
			};

		return JSON.parse(JSON.stringify(scholarship));
	} catch (error: any) {
		return {
			status: error?.status || 400,
			message:
				error?.message ||
				"Oops! Scholarship not registered! Try again later.",
		};
	}
};
