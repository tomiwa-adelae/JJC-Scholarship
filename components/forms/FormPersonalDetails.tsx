import React from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define props type
interface FormPersonalDetailsProps {
	nextStep: () => void;
	prevStep: () => void;
	handleChange: (
		input: "occupation" | "city" | "bio"
	) => (e: React.ChangeEvent<HTMLInputElement>) => void;
	values: {
		occupation: string;
		city: string;
		bio: string;
	};
}

const FormPersonalDetails: React.FC<FormPersonalDetailsProps> = ({
	nextStep,
	prevStep,
	handleChange,
	values,
}) => {
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
						Enter Personal Details
					</DialogTitle>
				</DialogHeader>

				<div className="space-y-4">
					<Input
						placeholder="Occupation"
						value={values.occupation}
						onChange={handleChange("occupation")}
						className="w-full"
					/>
					<Input
						placeholder="City"
						value={values.city}
						onChange={handleChange("city")}
						className="w-full"
					/>
					<Input
						placeholder="Bio"
						value={values.bio}
						onChange={handleChange("bio")}
						className="w-full"
					/>
				</div>

				<div className="flex justify-between mt-6">
					<Button onClick={backHandler} variant="outline">
						Back
					</Button>
					<Button onClick={continueHandler} className="ml-2">
						Continue
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default FormPersonalDetails;
