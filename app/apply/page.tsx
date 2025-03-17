import Application from "@/components/Application";
import ContactUs from "@/components/shared/ContactUs";
import FAQs from "@/components/shared/FAQs";
import Showcase from "@/components/shared/Showcase";

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
				cta={[{ title: "Apply now", slug: "/apply" }]}
			/>
			<Application />
			<FAQs />
			<ContactUs />
		</div>
	);
};

export default page;
