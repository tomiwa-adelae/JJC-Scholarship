import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";
import { Spotlight } from "../ui/spotlight-new";

const FAQs = () => {
	return (
		<div className="bg-gradient-to-br from-[#AADDAA]/30 to-[#6C936C] relative overflow-hidden py-16">
			<div className="container">
				<Spotlight />
				<h2 className="text-xl uppercase font-semibold mb-4 md:text-2xl lg:text-3xl">
					Have Questions? We’ve Got Answers!
				</h2>
				<p className="text-sm md:text-base md:leading-loose leading-loose mb-4">
					Here are answers to some of the most frequently asked
					questions about the JJC Scholarship. If you need further
					assistance, feel free to contact us.
				</p>
			</div>
			<div className="sm:container">
				<div className="mt-10">
					<Accordion type="single" collapsible className="w-full">
						{faqs.map(({ question, answer }, index) => (
							<AccordionItem value={`${index}`} key={index}>
								<AccordionTrigger>{question}</AccordionTrigger>
								<AccordionContent>{answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default FAQs;
