import React, { useState } from "react";

function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
		// Send form data to server or email service here
	};

	return (
		<form onSubmit={handleSubmit} className="form-container">
			<label htmlFor="name">Name:</label>
			<input
				type="text"
				id="name"
				name="name"
				value={name}
				onChange={(event) => setName(event.target.value)}
				required
			/>

			<label htmlFor="email">Email:</label>
			<input
				type="email"
				id="email"
				name="email"
				value={email}
				onChange={(event) => setEmail(event.target.value)}
				required
			/>

			<label htmlFor="message">Message:</label>
			<textarea
				id="message"
				name="message"
				value={message}
				onChange={(event) => setMessage(event.target.value)}
				required
			></textarea>

			<button type="submit">Send</button>
			<hr />
			<div className="social-icons">
				<a href="https://github.com/irinamihai150" rel="noopener noreferrer">
					<i
						class="fa fa-github"
						style={{
							fontSize: "48px",
							color: "rgb(255, 255, 153)",
							marginRight: "2em",
						}}
					></i>
				</a>
				<a
					href="https://www.linkedin.com/in/irinamih/"
					rel="noopener noreferrer"
				>
					<i
						class="fa fa-linkedin-square"
						style={{
							fontSize: "48px",
							color: "rgb(255, 255, 153)",
							margin: "3px",
						}}
					></i>
				</a>
			</div>
		</form>
	);
}

export default ContactForm;
