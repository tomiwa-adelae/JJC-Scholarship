import Showcase from "@/components/shared/Showcase";
import React from "react";

const page = () => {
	return (
		<div>
			<Showcase
				title={"📢 Oops! Page Not Found"}
				description={
					"Looks like you've taken a wrong turn. The page you're looking for doesn't exist or may have been moved. But don't worry, you can get back on track!"
				}
				cta={[
					{ title: "Return home", slug: "/" },
					{ title: "Apply for scholarship", slug: "/apply" },
				]}
				fullScreen={true}
			/>
		</div>
	);
};

export default page;
