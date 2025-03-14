import DoNotMiss from "@/components/DoNotMiss";
import HowToApply from "@/components/HowToApply";
import ContactUs from "@/components/shared/ContactUs";
import FAQs from "@/components/shared/FAQs";
import Showcase from "@/components/shared/Showcase";
import { Testimonials } from "@/components/Testimonials";
import WhyJJC from "@/components/WhyJJC";

const page = () => {
	return (
		<div>
			<Showcase
				title={
					"Empowering Future Leaders Through Faith, Education, and Service"
				}
				description={
					"Unlock your potential with the JJC Full Scholarship—supporting academically excellent and financially disadvantaged students. Secure your future with quality education, mentorship, and financial aid."
				}
				cta={[
					{ title: "Apply now", slug: "/apply" },
					{ title: "Learn more", slug: "/" },
				]}
				image="/assets/images/showcase-img.jpg"
			/>
			<WhyJJC />
			<HowToApply />
			<Testimonials />
			<DoNotMiss />
			<FAQs />
			<ContactUs />
		</div>
	);
};

export default page;
