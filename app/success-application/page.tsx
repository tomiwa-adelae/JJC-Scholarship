import Showcase from "@/components/shared/Showcase";
import { ColourfulText } from "@/components/ui/colourful-text";

const page = () => {
	return (
		<div>
			<Showcase
				title={
					<>
						🎉 Application Submitted{" "}
						<ColourfulText text="Successfully!" />
					</>
				}
				description={
					"Thank you for applying for the Jehovah Jireh City Scholarship! Your application has been received successfully. Our team would get back to you within the next 7 days."
				}
				cta={[
					{ title: "Download Application Summary", slug: "/apply" },
				]}
				fullScreen={true}
				celebration={true}
			/>
		</div>
	);
};

export default page;
