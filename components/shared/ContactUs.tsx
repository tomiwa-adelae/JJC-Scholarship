import { contactDetails } from "@/constants";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
	return (
		<div
			style={{ backgroundImage: "url(/assets/images/library.jpg)" }}
			className="bg-no-repeat bg-center bg-cover min-h-[80vh] relative flex items-center justify-center py-16"
		>
			<div className="z-50 w-full">
				<div className="bg-green-900 container rounded-3xl text-white py-10 px-6 lg:px-10">
					<h2 className="text-xl uppercase font-semibold mb-4 md:text-2xl lg:text-3xl">
						Need Help? Get in Touch with Us!
					</h2>
					<p className="text-sm lg:leading-loose md:leading-loose leading-loose mb-4">
						Have questions about the scholarship, application
						process, or sponsorship opportunities? Our team is here
						to assist you!
					</p>
					<div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 items-center">
							{contactDetails.map(
								(
									{ icon, title, description, details, name },
									index
								) => (
									<div key={index}>
										<div className="bg-white inline-block rounded-full p-3">
											<Image
												src={icon}
												alt={`${name} icon`}
												width={1000}
												height={1000}
												className="w-6 h-6"
											/>
										</div>
										<div>
											<h4 className="font-semibold text-sm uppercase mt-2">
												{title}
											</h4>
											<p className="text-xs mt-2 mb-3 font-light text-gray-200">
												{description}
											</p>
											<a
												href={`${
													index + 1 === 1
														? `mailto:${details}`
														: index + 1 === 3
														? `tel:${details}`
														: "#"
												}`}
												className="font-medium text-sm hover:text-primary transition-all"
											>
												{details}
											</a>
										</div>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="absolute inset-0 bg-black/50" />
		</div>
	);
};

export default ContactUs;
