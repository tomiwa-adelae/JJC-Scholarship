"use client";

import { useEffect, useState } from "react";

const Countdown = () => {
	const targetDate = new Date("2027-11-23T00:00:00");

	const calculateTimeLeft = () => {
		const now = new Date();
		const difference = targetDate.getTime() - now.getTime();

		if (difference <= 0) {
			return null;
		}

		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor(
			(difference % (1000 * 60 * 60)) / (1000 * 60)
		);
		const seconds = Math.floor((difference % (1000 * 60)) / 1000);

		return { days, hours, minutes, seconds };
	};

	const [timeLeft, setTimeLeft] = useState<{
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
	} | null>(calculateTimeLeft()); // Initialize with the calculated time left

	useEffect(() => {
		// Update the countdown every second
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer); // Cleanup interval on unmount
	}, []); // ✅ No unnecessary re-renders

	if (!timeLeft) {
		return <div className="text-center text-lg font-bold">Time is up!</div>;
	}

	// ✅ JSX now properly returns the component
	return (
		<div className="grid grid-cols-3 gap-2 my-10">
			{/* Days */}
			<div className="flex flex-col items-center justify-center">
				<div className="inline-block rounded-sm bg-[#C0A032]/50 p-6 md:p-8">
					<h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl">
						{timeLeft.days.toString().padStart(2, "0")}
					</h2>
				</div>
				<p className="mt-2 text-xs sm:text-sm font-medium uppercase">
					Days
				</p>
			</div>

			{/* Hours */}
			<div className="flex flex-col items-center justify-center">
				<div className="inline-block rounded-sm bg-[#C0A032]/50 p-6 md:p-8">
					<h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl">
						{timeLeft.hours.toString().padStart(2, "0")}
					</h2>
				</div>
				<p className="mt-2 text-xs sm:text-sm font-medium uppercase">
					Hours
				</p>
			</div>

			{/* Minutes */}
			<div className="flex flex-col items-center justify-center">
				<div className="inline-block rounded-sm bg-[#C0A032]/50 p-6 md:p-8">
					<h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl">
						{timeLeft.minutes.toString().padStart(2, "0")}
					</h2>
				</div>
				<p className="mt-2 text-xs sm:text-sm font-medium uppercase">
					Minutes
				</p>
			</div>
		</div>
	);
};

export default Countdown;
