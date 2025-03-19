import Application from "@/components/Application";
import ContactUs from "@/components/shared/ContactUs";
import FAQs from "@/components/shared/FAQs";
import Showcase from "@/components/shared/Showcase";

import Head from "next/head";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Apply for JJC Scholarship | Secure Your Future Today!",
	description:
		"Apply for the Jehovah Jireh City Scholarship and take the next step toward your academic dreams. Submit your application today for a chance to receive full or partial funding for your education.",
	keywords:
		"JJC Scholarship, scholarship, nigerian scholarship, private university, ajayi crowther university, federal university, unilag, UI, scholarship application, apply for scholarship, student financial aid, educational funding, merit-based scholarships, need-based scholarships, university scholarships, grants for students, tuition assistance, academic funding, Jehovah Jireh City scholarship, study grants, financial aid application, scholarship opportunities",
};

const page = () => {
	return (
		<div>
			<Showcase
				title={
					"Your Future Starts Here! Apply for the JJC Scholarship Today"
				}
				description={
					"The Jehovah Jireh City Scholarship is designed to empower students by providing financial support for their education. Take the first step toward a brighter future by applying today"
				}
			/>
			<Application />
			<FAQs />
			<ContactUs />
		</div>
	);
};

export default page;
