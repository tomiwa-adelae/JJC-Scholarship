import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";
import { whyJJC } from "@/constants";
import { Spotlight } from "./ui/spotlight-new";
// Define Type for BenefitItem Component Props
interface BenefitItemProps {
	benefit: BenefitParams;
}

// BenefitItem Component (Reusable)
const BenefitItem: React.FC<BenefitItemProps> = ({ benefit }) => {
	return (
		<div className="flex items-center justify-start gap-4 flex-1">
			<Image
				src={benefit.icon}
				alt={benefit.name}
				width={1000}
				height={1000}
				className="w-12 h-12"
			/>
			<div>
				<h4 className="uppercase text-sm font-medium">
					{benefit.title}
				</h4>
				<p className="text-sm leading-relaxed mt-2">
					{benefit.description}
				</p>
			</div>
		</div>
	);
};

const WhyJJC = () => {
	// Group benefits into pairs
	const benefitPairs: BenefitParams[][] = whyJJC.reduce<BenefitParams[][]>(
		(acc, benefit, index) => {
			if (index % 2 === 0) {
				acc.push([benefit]);
			} else {
				acc[acc.length - 1].push(benefit);
			}
			return acc;
		},
		[]
	);
	return (
		<div className="bg-white py-16 relative overflow-hidden">
			<Spotlight />
			<div className="container">
				<h2 className="text-xl uppercase font-semibold text-primary text-center mb-8 md:text-2xl lg:text-3xl">
					Why apply for JJC Scholarship?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-5 gap-8">
					<div className="col-span-2 flex items-center justify-center">
						<Image
							src={"/assets/images/why-jjc-img.jpg"}
							alt={
								"A graduate with her certificate and a purple background"
							}
							width={1000}
							height={1000}
							className="aspect-auto"
						/>
					</div>
					<p className="col-span-3 text-sm md:text-base lg:text-lg lg:leading-loose md:leading-loose font-medium flex items-center justify-start leading-loose">
						The JJC Full Scholarship is designed to support
						exceptional students who demonstrate academic
						excellence, leadership, and financial need. Through this
						program, we empower young minds to achieve their dreams
						and make a difference in their communities.
					</p>
				</div>
				<div className="mt-10 space-y-4">
					{benefitPairs.map((pair, index) => (
						<div
							key={index}
							className="bg-gradient-to-br from-[#AADDAA]/30 to-[#6C936C] py-8 px-8 rounded-3xl grid grid-flow-row md:grid-flow-col gap-8"
						>
							{pair.map((benefit, i) => (
								<React.Fragment key={benefit.title}>
									<BenefitItem benefit={benefit} />
									{i === 0 && pair.length === 2 && (
										<div className="hidden md:block">
											<Separator orientation="vertical" />
										</div>
									)}
									{i === 0 && pair.length === 2 && (
										<div className="block md:hidden">
											<Separator orientation="horizontal" />
										</div>
									)}
								</React.Fragment>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhyJJC;
