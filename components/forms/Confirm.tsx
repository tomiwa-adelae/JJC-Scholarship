import React from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ConfirmProps {
	nextStep: () => void;
	prevStep: () => void;
	values: {
		firstName: string;
		lastName: string;
		email: string;
		occupation: string;
		city: string;
		bio: string;
	};
}

const Confirm: React.FC<ConfirmProps> = ({ nextStep, prevStep, values }) => {
	const continueHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		nextStep();
	};

	const backHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		prevStep();
	};

	return (
		<Dialog open>
			<DialogContent className="max-w-md p-6">
				<DialogHeader>
					<DialogTitle className="text-center text-xl font-semibold">
						Confirm User Data
					</DialogTitle>
				</DialogHeader>

				<div className="space-y-4">
					{Object.entries(values).map(([key, value]) => (
						<div
							key={key}
							className="flex justify-between border-b pb-2"
						>
							<span className="font-medium capitalize">
								{key.replace(/([A-Z])/g, " $1")}
							</span>
							<span className="text-gray-600">{value}</span>
						</div>
					))}
				</div>

				<div className="flex justify-between mt-6">
					<Button onClick={backHandler} variant="outline">
						Back
					</Button>
					<Button onClick={continueHandler} className="ml-2">
						Confirm & Continue
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default Confirm;
