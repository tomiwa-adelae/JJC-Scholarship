// Benefits Data
export const whyJJC: BenefitParams[] = [
	{
		icon: "/assets/icons/graduation-cap.svg",
		name: "Graduation cap",
		title: "Full or Partial Tuition Coverage",
		description:
			"Receive financial support for tuition fees, reducing the burden on you and your family.",
	},
	{
		icon: "/assets/icons/books.svg",
		name: "Books",
		title: "Book & Learning Stipends",
		description:
			"Get funds for textbooks, study materials, and online learning resources.",
	},
	{
		icon: "/assets/icons/teacher.svg",
		name: "Mentor",
		title: "Mentorship & Career Guidance",
		description:
			"Be paired with mentors who provide academic and professional advice.",
	},
	{
		icon: "/assets/icons/world-map.svg",
		name: "World map",
		title: "Leadership Development & Networking",
		description:
			"Join leadership training programs that equip you with real-world skills.",
	},
	{
		icon: "/assets/icons/award.svg",
		name: "Award",
		title: "Recognition & Prestige",
		description:
			"Earn the status of a JJC Scholar, which adds value to your academic and professional journey.",
	},
	{
		icon: "/assets/icons/light-bulb.svg",
		name: "Light Bulb",
		title: "Community Impact & Giving Back",
		description:
			"Be part of a scholarship program that encourages social responsibility and giving back.",
	},
];

export const checkEligibility = [
	"Must demonstrate financial need (if applicable).",
	"Must have leadership qualities and community involvement.",
	"Must submit all required documents before the deadline.",
];

export const requiredDocuments = [
	"National ID or Birth Certificate",
	"Recommendation Letter (from a teacher, mentor, or community leader)",
	"Personal Statement Essay (explaining why you deserve the scholarship)",
];

export const applicationForm = [
	"Visit the Apply Now page.",
	"Enter your personal details, educational background, scholarship-related questions.",
	"Upload all necessary documents in the required format.",
];

export const submitApplication = [
	"Review your details before submitting.",
	'Click the "Submit Application" button.',
	"You will receive a confirmation email once your application is successfully submitted",
];

export const faqs = [
	{
		question: "What services do you offer?",
		answer: "We provide medical staffing, pharmaceutical supply, home healthcare, and corporate healthcare solutions.",
	},
	{
		question: "Can individuals hire a doctor or nurse?",
		answer: "Yes! We provide medical professionals for hospitals, clinics, and private individuals.",
	},
	{
		question: "How do I order medications?",
		answer: "You can order directly through our pharmacy page or contact us for assistance.",
	},
	{
		question: "Do you work with businesses and HMOs?",
		answer: "Yes! We offer corporate healthcare partnerships and work with HMOs for seamless healthcare solutions.",
	},
	{
		question: "How quickly can I get a doctor or nurse?",
		answer: "Depending on your location, we provide fast deployment of healthcare professionals within a short timeframe.",
	},
	{
		question: "Is your service available nationwide?",
		answer: "Yes, we serve multiple locations across Nigeria and continue expanding.",
	},
];

export const contactDetails = [
	{
		icon: "/assets/icons/email.svg",
		name: "Email",
		title: "Email Support",
		description: "Our team can respond in real time",
		details: "scholarship@jjc.com",
	},
	{
		icon: "/assets/icons/office.svg",
		name: "Office",
		title: "Visit our Office",
		description: "Visit our office in real life",
		details: "Lagos, Nigeria",
	},
	{
		icon: "/assets/icons/call.svg",
		name: "Call",
		title: "Call us directly",
		description: "Available during working hours",
		details: "+234 801 234 5678",
	},
];

export const genders = ["Male", "Female"];

export const stateOfOrigins = [
	"Abia",
	"Adamawa",
	"Akwa Ibom",
	"Anambra",
	"Bauchi",
	"Bayelsa",
	"Benue",
	"Borno",
	"Cross River",
	"Delta",
	"Ebonyi",
	"Edo",
	"Ekiti",
	"Enugu",
	"Gombe",
	"Imo",
	"Jigawa",
	"Kaduna",
	"Kano",
	"Katsina",
	"Kebbi",
	"Kogi",
	"Kwara",
	"Lagos",
	"Nasarawa",
	"Niger",
	"Ogun",
	"Ondo",
	"Osun",
	"Oyo",
	"Plateau",
	"Rivers",
	"Sokoto",
	"Taraba",
	"Yobe",
	"Zamfara",
	"FCT (Abuja)",
] as const;

export const educationalLevels = [
	"Secondary School",
	"Undergraduate",
	"Postgraduate",
];

export const admissionStatus = ["accepted", "awaiting result", "others"];

export const subjects = [
	{ id: "english", label: "English Language" },
	{ id: "mathematics", label: "Mathematics" },
	{ id: "biology", label: "Biology" },
	{ id: "physics", label: "Physics" },
	{ id: "chemistry", label: "Chemistry" },
	{ id: "government", label: "Government" },
	{ id: "history", label: "History" },
	{ id: "literature", label: "Literature in English" },
	{ id: "crk", label: "Christian Religious Knowledge" },
	{ id: "irk", label: "Islamic Religious Knowledge" },
	{ id: "civic", label: "Civic Education" },
	{ id: "economics", label: "Economics" },
	{ id: "geography", label: "Geography" },
	{ id: "accounting", label: "Principles of Accounting" },
	{ id: "commerce", label: "Commerce" },
	{ id: "agriculture", label: "Agricultural Science" },
	{ id: "french", label: "French" },
	{ id: "arabic", label: "Arabic" },
	{ id: "music", label: "Music" },
	{ id: "finearts", label: "Fine Arts" },
	{ id: "yoruba", label: "Yoruba" },
	{ id: "igbo", label: "Igbo" },
	{ id: "hausa", label: "Hausa" },
	{ id: "computer", label: "Computer Studies" },
	{ id: "foodandnutrition", label: "Food and Nutrition" },
	{ id: "homeeconomics", label: "Home Economics" },
	{ id: "bookkeeping", label: "Bookkeeping" },
] as const;
