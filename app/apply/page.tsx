import Application from "@/components/Application";
import Showcase from "@/components/shared/Showcase";
import React from "react";

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
		</div>
	);
};

export default page;
