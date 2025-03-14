import React from "react";
import ApplicationForm from "./forms/ApplicationForm";

const Application = () => {
	return (
		<div className="bg-white py-16">
			<div className="container">
				<h2 className="text-xl uppercase font-semibold mb-4 md:text-2xl lg:text-3xl text-primary">
					Complete Your Scholarship Application
				</h2>
				<p className="text-sm md:text-base md:leading-loose leading-loose mb-4">
					Take the next step toward your academic success by filling
					out the JJC Scholarship application form. Provide accurate
					details, upload the necessary documents, and ensure all
					required fields are completed. Your journey to educational
					empowerment starts here!
				</p>
				<ApplicationForm />
			</div>
		</div>
	);
};

export default Application;
