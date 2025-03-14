import React from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

const Success: React.FC = () => {
	return (
		<Dialog open>
			<DialogContent className="max-w-md p-6 text-center">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold">
						Success
					</DialogTitle>
				</DialogHeader>
				<h2 className="text-lg font-medium">
					Thank You For Your Submission
				</h2>
				<p className="text-gray-600 mt-2">
					You will receive an email with further instructions.
				</p>
			</DialogContent>
		</Dialog>
	);
};

export default Success;
