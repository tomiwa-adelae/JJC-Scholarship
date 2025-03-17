import Showcase from "@/components/shared/Showcase";

const page = () => {
	return (
		<div>
			<Showcase
				title={"🎉 Application Submitted Successfully!"}
				description={
					"Thank you for applying for the Jehovah Jireh City Scholarship! Your application has been received successfully. Our team would get back to you within the next 7 days."
				}
				cta={[
					{ title: "Download Application Summary", slug: "/apply" },
				]}
				fullScreen={true}
			/>
		</div>
	);
};

export default page;
