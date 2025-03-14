import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Countdown from "./Countdown";

const DoNotMiss = () => {
	return (
		<div
			style={{
				backgroundImage: "url(/assets/images/crowded-students.jpg)",
			}}
			className="bg-no-repeat bg-center bg-cover min-h-[80vh] relative flex items-center justify-center py-16"
		>
			<div className="z-50 w-full text-white container">
				<h2 className="text-xl uppercase font-semibold mb-4 md:text-2xl lg:text-3xl text-center">
					Don’t Miss This Opportunity – Apply Now!
				</h2>
				<p className="text-center text-sm lg:leading-loose md:leading-loose leading-loose mb-4">
					Your future starts today! The JJC Scholarship is your chance
					to access quality education, mentorship, and career
					opportunities. Submit your application before the deadline
				</p>
				<Countdown />
				<div className="flex items-center justify-center">
					<Button variant={"white"} size={"lg"} asChild>
						<Link href="/apply">Apply now</Link>
					</Button>
				</div>
			</div>
			<div className="absolute inset-0 bg-black/50" />
		</div>
	);
};

export default DoNotMiss;
