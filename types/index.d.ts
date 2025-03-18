// Define Type for Benefit
interface BenefitParams {
	icon: string;
	name: string;
	title: string;
	description: string;
}

declare interface UserParams {
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
	oLevelResult: string;
	passportPhoto: string;
	recommendationLetter: string;
	confirmInformation: boolean;
	agreeToTerms: boolean;
}
