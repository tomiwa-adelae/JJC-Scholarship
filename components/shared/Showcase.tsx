import React from "react";
import Header from "./Header";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundLines } from "@/components/ui/background-lines";

interface ShowcaseProps {
	title: string | React.ReactNode;
	description: string;
	cta?: { slug: string; title: string }[];
	image?: string;
	fullScreen?: boolean;
	celebration?: boolean;
}

const Showcase: React.FC<ShowcaseProps> = ({
	title,
	description,
	cta = [], // ✅ Default to empty array to avoid errors
	image,
	fullScreen = false,
	celebration = false,
}) => {
	const Wrapper = celebration ? BackgroundBeamsWithCollision : React.Fragment;
	const InnerWrapper = celebration ? BackgroundLines : React.Fragment;

	return (
		<Wrapper>
			<InnerWrapper>
				<div
					className={`bg-gradient-to-br from-[#AADDAA]/30 to-[#6C936C] w-screen relative ${
						fullScreen ? "min-h-[95vh]" : "min-h-[70vh]"
					}`}
				>
					<div className="container">
						<Header />
						<div
							className={`grid grid-cols-1 ${
								image ? "md:grid-cols-2" : ""
							} gap-8 pb-16 ${!image ? "py-16" : ""}`}
						>
							{/* Left Content */}
							<div
								className={`flex flex-col items-start justify-center ${
									image ? "mt-16 md:mt-0" : ""
								}`}
							>
								<h1 className="uppercase font-bold text-3xl md:text-4xl md:leading-relaxed leading-relaxed">
									{title}
								</h1>
								<p className="text-sm leading-loose text-gray-900 font-medium mt-4 mb-6">
									{description}
								</p>
								<div className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full">
									{cta.map((action, index) => (
										<Button
											key={index}
											variant={
												index === 0
													? "default"
													: "white"
											}
											asChild
											size="lg"
											className="w-full sm:w-auto"
										>
											<Link href={action.slug}>
												{action.title}
											</Link>
										</Button>
									))}
								</div>
							</div>

							{/* Right Image */}
							{image && (
								<div className="flex items-center justify-center">
									<Image
										src={image}
										alt="Showcase image of a graduate woman wearing a black graduation cap and white lab coat"
										width={1000}
										height={1000}
										className="aspect-auto object-cover"
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			</InnerWrapper>
		</Wrapper>
	);
};

export default Showcase;
