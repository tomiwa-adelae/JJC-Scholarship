import { Document, Schema, model, models } from "mongoose";

// Define a TypeScript interface for type safety
export interface IUser extends Document {
	firstName: string;
	lastName: string;
	middleName: string;
	email: string;
	phoneNumber: string;
	gender: string;
	dob: string;
	nationality: string;
	stateOfOrigin: string;
	residentialAddress: string;
	currentEducationalLevel: string;
	schoolName: string;
	universityAdmissionStatus: string;
	jambScore: string;
	jambSubjects: string[];
	oLevelResult: string;
	schoolOfChoice: string;
	courseOfChoice: string;
	otherScholarship: string;
	reasonForApplication: string;
	careerGoals: string;
	challengesFaced: string;
	leadershipExperience: string;
	guardianFullName: string;
	guardianEmail: string;
	guardianPhoneNumber: string;
	guardianOccupation: string;
	passportPhoto: string;
	recommendationLetter: string;
	confirmInformation: boolean;
	agreeToTerms: boolean;
}

// Define the Mongoose Schema
const UserSchema = new Schema<IUser>(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		middleName: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		phoneNumber: { type: String, required: true },
		gender: { type: String, required: true },
		dob: { type: String, required: true },
		nationality: { type: String, required: true },
		stateOfOrigin: { type: String, required: true },
		residentialAddress: { type: String, required: true },
		currentEducationalLevel: { type: String, required: true },
		schoolName: { type: String, required: true },
		universityAdmissionStatus: { type: String, required: true },
		jambScore: { type: String, required: true },
		jambSubjects: { type: [String], required: true },
		oLevelResult: { type: String, required: true },
		schoolOfChoice: { type: String, required: true },
		courseOfChoice: { type: String, required: true },
		otherScholarship: { type: String, required: true },
		reasonForApplication: { type: String, required: true },
		careerGoals: { type: String, required: true },
		challengesFaced: { type: String, required: true },
		leadershipExperience: { type: String, required: true },
		passportPhoto: { type: String, required: true },
		recommendationLetter: { type: String, required: true },
		guardianFullName: { type: String, required: true },
		guardianEmail: { type: String, required: true },
		guardianPhoneNumber: { type: String, required: true },
		guardianOccupation: { type: String, required: true },
		confirmInformation: { type: Boolean, required: true },
		agreeToTerms: { type: Boolean, required: true },
	},
	{ timestamps: true }
);

// Define and export the User model
const User = models.User || model<IUser>("User", UserSchema);

export default User;
