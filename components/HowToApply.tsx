import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { Button } from "./ui/button";
import Link from "next/link";
import {
	applicationForm,
	checkEligibility,
	requiredDocuments,
	submitApplication,
} from "@/constants";

const HowToApply = () => {
	const data = [
		{
			title: "Check Eligibility",
			content: (
				<div>
					<p className="text-sm leading-loose font-medium font-normal mb-4">
						Before applying, ensure you meet the scholarship
						requirements:
					</p>
					<div className="grid gap-4">
						{checkEligibility.map((check, index) => (
							<span
								key={index}
								className="flex items-center justify-start gap-2"
							>
								<Image
									src={"/assets/icons/check.svg"}
									alt={"Check icon"}
									width={1000}
									height={1000}
									className="w-5 h-5"
								/>
								<p className="text-sm leading-loose font-medium">
									{check}
								</p>
							</span>
						))}
					</div>
				</div>
			),
		},
		{
			title: "Gather Required Documents",
			content: (
				<div>
					<p className="text-sm leading-loose font-medium font-normal mb-4">
						Prepare the following documents before starting your
						application:
					</p>
					<div className="grid gap-4">
						{requiredDocuments.map((document, index) => (
							<span
								key={index}
								className="flex items-center justify-start gap-2"
							>
								<Image
									src={"/assets/icons/scroll.svg"}
									alt={"Scroll icon"}
									width={1000}
									height={1000}
									className="w-5 h-5"
								/>
								<p className="text-sm leading-loose font-medium">
									{document}
								</p>
							</span>
						))}
					</div>
				</div>
			),
		},
		{
			title: "Fill Out the Online Application Form",
			content: (
				<div>
					<div className="grid gap-4">
						{applicationForm.map((document, index) => (
							<span
								key={index}
								className="flex items-center justify-start gap-2"
							>
								<Image
									src={"/assets/icons/check.svg"}
									alt={"Check icon"}
									width={1000}
									height={1000}
									className="w-5 h-5"
								/>
								<p className="text-sm leading-loose font-medium">
									{document}
								</p>
							</span>
						))}
					</div>
				</div>
			),
		},
		{
			title: "Submit Your Application",
			content: (
				<div>
					<div className="grid gap-4">
						{submitApplication.map((document, index) => (
							<span
								key={index}
								className="flex items-center justify-start gap-2"
							>
								<Image
									src={"/assets/icons/check.svg"}
									alt={"Check icon"}
									width={1000}
									height={1000}
									className="w-5 h-5"
								/>
								<p className="text-sm leading-loose font-medium">
									{document}
								</p>
							</span>
						))}
					</div>
				</div>
			),
		},
	];

	return (
		<div className="bg-gradient-to-br from-[#AADDAA]/30 to-[#6C936C] py-16">
			<div className="container">
				<h2 className="text-xl uppercase font-semibold text-center mb-8 md:text-2xl lg:text-3xl">
					How to apply
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-5 gap-8">
					<div className="col-span-3 flex items-start justify-center flex-col">
						<p className="text-sm md:text-base lg:text-lg lg:leading-loose md:leading-loose font-medium leading-loose mb-4">
							Applying for the JJC Scholarship is simple! Follow
							these steps to complete your application and take
							the first step toward a brighter future
						</p>
						<Button asChild size={"lg"}>
							<Link href="/apply">Apply now</Link>
						</Button>
					</div>
					<div className="md:col-span-2 col-span-3 flex items-center justify-center">
						<Image
							src={"/assets/images/how-apply-img.jpg"}
							alt={"A graduate smiling on a purple background"}
							width={1000}
							height={1000}
							className="aspect-auto rounded-[30px] mx-auto"
						/>
					</div>
				</div>
			</div>
			<div className="mt-16">
				<Timeline data={data} />
				<div className="container">
					<Button asChild size={"lg"} variant={"secondary"}>
						<Link href="/apply">Apply now</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default HowToApply;
