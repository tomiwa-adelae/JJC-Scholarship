"use server";

import { connectToDatabase } from "../database";
import User from "../database/models/user.model";

export const registerScholarship = async (user: UserParams) => {
	try {
		await connectToDatabase();

		const userExist = await User.findOne({ email: user.email });

		if (userExist)
			return {
				status: 400,
				message:
					"You are already registered with this email. Wait till we get back to you.",
			};

		const newUser = await User.create(user);

		if (!newUser)
			return {
				status: 400,
				message: "Registration was not successful. Try again later.",
			};

		return JSON.parse(JSON.stringify(newUser));
	} catch (error: any) {
		console.log(error);
		return {
			status: error?.status || 400,
			message:
				error?.message ||
				"Oops! Scholarship not registered! Try again later.",
		};
	}
};

export const getScholarshipDetails = async (id: any) => {
	try {
		await connectToDatabase();

		console.log(id);

		const scholarship = await User.findById(id);

		if (!scholarship)
			return {
				status: 400,
				message: "Registration not successful. Try again later.",
			};

		return JSON.parse(JSON.stringify(scholarship));
	} catch (error: any) {
		console.log(error);
		return {
			status: error?.status || 400,
			message:
				error?.message ||
				"Oops! Scholarship not registered! Try again later.",
		};
	}
};
