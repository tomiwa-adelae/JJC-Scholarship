import Showcase from "@/components/shared/Showcase";
import { ColourfulText } from "@/components/ui/colourful-text";
import { getScholarshipDetails } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

interface PageProps {
	searchParams: { id?: string };
}

const page = async ({ searchParams }: PageProps) => {
	const id = searchParams?.id; // ✅ Extract 'id' from searchParams

	if (!id) {
		return (
			<p className="text-center text-red-500">Invalid Application ID</p>
		);
	}

	const res = await getScholarshipDetails(id);

	console.log(res);

	if (res.status === 400) redirect("/not-found");

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
