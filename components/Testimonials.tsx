import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Button } from "./ui/button";
import Link from "next/link";

export function Testimonials() {
	const testimonials = [
		{
			quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
			name: "Sarah Chen",
			designation: "Product Manager at TechFlow",
			src: "/assets/images/tomiwa-adelae.jpeg",
		},
		{
			quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
			name: "Michael Rodriguez",
			designation: "CTO at InnovateSphere",
			src: "/assets/images/tomiwa-adelae.jpeg",
		},
		{
			quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
			name: "Emily Watson",
			designation: "Operations Director at CloudScale",
			src: "/assets/images/tomiwa-adelae.jpeg",
		},
		{
			quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
			name: "James Kim",
			designation: "Engineering Lead at DataPro",
			src: "/assets/images/tomiwa-adelae.jpeg",
		},
		{
			quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
			name: "Lisa Thompson",
			designation: "VP of Technology at FutureNet",
			src: "/assets/images/tomiwa-adelae.jpeg",
		},
	];
	return (
		<div className="bg-white py-16">
			<div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
				<div>
					<h2 className="text-xl text-secondary uppercase font-semibold mb-4 md:text-2xl lg:text-3xl">
						Meet our Scholars
					</h2>
					<p className="text-sm md:text-base md:leading-loose leading-loose mb-4">
						Here are answers to some of the most frequently asked
						questions about the JJC Scholarship. If you need further
						assistance, feel free to contact us.
					</p>
					<Button asChild variant={"secondary"} size={"lg"}>
						<Link href="/apply">Join them now</Link>
					</Button>
				</div>
				<AnimatedTestimonials testimonials={testimonials} />
			</div>
		</div>
	);
}
