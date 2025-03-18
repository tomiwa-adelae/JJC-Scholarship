import Head from "next/head";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "JJC Scholarship | Empowering Future Leaders Through Education",
	description:
		"Apply for the JJC Scholarship and secure your future. Get financial aid, mentorship, and leadership training to excel academically and professionally.",
	keywords:
		"JJC Scholarship, scholarship, nigerian scholarship, private university, ajayi crowther university, federal university, unilag, UI, apply for a scholarship, university scholarship in Nigeria, merit-based scholarship, financial aid for students, scholarships for undergraduates, leadership and mentorship programs, fully funded scholarship opportunities, college funding assistance, student grants and bursaries, how to apply for the JJC Scholarship, best scholarships for students in 2024, education funding for high-achieving students",
	openGraph: {
		images: "/assets/images/opengraph.png",
	},
	metadataBase: new URL("https://jjc-scholarship.vercel.app"),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<meta property="og:image" content="/opengraph.png" />
				<meta
					property="og:image"
					content="/assets/images/opengraph.png"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, user-scalable=no"
				/>
				<meta
					data-n-head="ssr"
					data-hid="viewport"
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
				/>
			</Head>
			<body className={montserrat.className}>
				{children}
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}
