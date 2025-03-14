import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
	return (
		<header className="flex items-center justify-between pt-4 gap-6">
			<Link href="/">
				<Image
					src={"/assets/images/logo.png"}
					alt="JJC Logo with a tree"
					width={120}
					height={120}
					className="w-auto h-auto object-cover"
				/>
			</Link>
			<div>
				<Button asChild size="md">
					<Link href="/">Apply now</Link>
				</Button>
			</div>
		</header>
	);
};

export default Header;
