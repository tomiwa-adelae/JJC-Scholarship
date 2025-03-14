import React from "react";
import Header from "./Header";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Showcase = ({
	title,
	description,
	cta,
	image,
}: {
	title: string;
	description: string;
	cta?: any;
	image?: string;
}) => {
	return (
		<div className="bg-gradient-to-br from-[#AADDAA]/30 to-[#6C936C] min-h-[70vh]">
			<div className="container">
				<Header />
				<div
					className={`grid grid-cols-1 ${
						image && "md:grid-cols-2"
					} gap-8 pb-16 ${!image && "py-16"}`}
				>
					<div
						className={`flex flex-col items-start justify-center ${
							image && "mt-16 md:mt-0"
						}`}
					>
						<h1 className="uppercase font-bold text-3xl md:text-4xl md:leading-relaxed leading-relaxed">
							{title}
						</h1>
						<p className="text-sm leading-loose text-gray-900 font-medium mt-4 mb-6">
							{description}
						</p>
						<div className="flex items-center justify-start gap-4">
							{cta.map(
								(
									action: { slug: string; title: string },
									index: number
								) => (
									<Button
										variant={
											index === 0 ? "default" : "white"
										}
										asChild
										size={"lg"}
										key={index}
										className="w-full"
									>
										<Link href={action.slug}>
											{action.title}
										</Link>
									</Button>
								)
							)}
						</div>
					</div>
					{image && (
						<div>
							<Image
								src={image}
								alt={
									"Showcase image of a graduate woman wearing an black graduation cap and white lab coat"
								}
								width={1000}
								height={1000}
								className="aspect-auto object-cover"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Showcase;
