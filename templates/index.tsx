export const generateStudentEmail = (user: UserParams) => `
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Application Received</title>
	<style>
		body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
		.container { max-width: 600px; background-color: #ffffff; padding: 20px; border-radius: 8px; text-align: center; margin: auto; }
		.header { font-size: 24px; font-weight: bold; color: #4CAF50; }
		.content { font-size: 16px; color: #555555; margin-top: 10px; text-align: left; }
		.footer { font-size: 12px; color: #888888; margin-top: 20px; }
	</style>
</head>
<body>
	<div class="container">
		<p class="header">🎉 Congratulations, ${user.firstName}!</p>
		<p class="content">
			We have successfully received your application for the <strong>Jehovah Jireh City Scholarship</strong>.
		</p>
		<p class="content">
			Our team will review your application, and you can expect to hear from us within the next <strong>7 days</strong>.
		</p>
		<p class="content">
			Below are the details of your application:
		</p>
		<ul class="content">
			<li><strong>Full Name:</strong> ${user.firstName} ${user.middleName || ""} ${
	user.lastName
}</li>
			<li><strong>Email:</strong> ${user.email}</li>
			<li><strong>Phone:</strong> ${user.phoneNumber}</li>
			<li><strong>Course of Choice:</strong> ${user.courseOfChoice}</li>
			<li><strong>School of Choice:</strong> ${user.schoolOfChoice}</li>
		</ul>
		<p class="content">
			If you have any questions, feel free to reply to this email or contact our support team.
		</p>
		<p class="footer">
			&copy; 2025 Jehovah Jireh City Scholarship | All rights reserved.
		</p>
	</div>
</body>
</html>
`;

export const generateAdminEmail = (user: UserParams) => `
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>New Application Received</title>
	<style>
		body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
		.container { max-width: 600px; background-color: #ffffff; padding: 20px; border-radius: 8px; text-align: left; margin: auto; }
		.header { font-size: 24px; font-weight: bold; color: #4CAF50; }
		.content { font-size: 16px; color: #555555; margin-top: 10px; }
		.footer { font-size: 12px; color: #888888; margin-top: 20px; }
	</style>
</head>
<body>
	<div class="container">
		<p class="header">📩 New Scholarship Application Submitted</p>
		<p class="content">
			A new student has applied for the <strong>Jehovah Jireh City Scholarship</strong>.
		</p>
		<p class="content">
			Here are the applicant’s details:
		</p>
		<ul class="content">
			<li><strong>Full Name:</strong> ${user.firstName} ${user.middleName || ""} ${
	user.lastName
}</li>
			<li><strong>Email:</strong> ${user.email}</li>
			<li><strong>Phone:</strong> ${user.phoneNumber}</li>
			<li><strong>Gender:</strong> ${user.gender}</li>
			<li><strong>Date of Birth:</strong> ${user.dob}</li>
			<li><strong>Nationality:</strong> ${user.nationality}</li>
			<li><strong>State of Origin:</strong> ${user.stateOfOrigin}</li>
			<li><strong>Course of Choice:</strong> ${user.courseOfChoice}</li>
			<li><strong>School of Choice:</strong> ${user.schoolOfChoice}</li>
			<li><strong>JAMB Score:</strong> ${user.jambScore}</li>
			<li><strong>Guardian:</strong> ${user.guardianFullName} (${
	user.guardianPhoneNumber
})</li>
		</ul>
		<p class="footer">
			&copy; 2025 Jehovah Jireh City Scholarship | Admin Notification
		</p>
	</div>
</body>
</html>
`;
