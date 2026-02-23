"use client";

import { useState } from "react";
import styles from "./page.module.css";

const Contact = () => {
	const [contact, setContact] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	});

	const handleInputChange = (e, key) => {
		setContact({
			...contact,
			[key]: e.target.value,
		});
	};

	const handleFormSend = () => {
		const { firstName, lastName, email, message } = contact;
		alert(
			firstName +
				" " +
				lastName +
				" (" +
				email +
				') envio el siguiente mensaje: "' +
				message +
				'"',
		);
	};

	return (
		<>
			<h1 className="hero">Habla con nosotros!</h1>
			<div className={styles.form}>
				<label htmlFor="firstName">Nombre: </label>
				<input
					id="firstName"
					value={contact.firstName}
					onChange={(e) => handleInputChange(e, "firstName")}
				/>
				<label htmlFor="lastName">Apellido: </label>
				<input
					id="lastName"
					value={contact.lastName}
					onChange={(e) => handleInputChange(e, "lastName")}
				/>
				<label htmlFor="email">Correo: </label>
				<input
					id="email"
					value={contact.email}
					onChange={(e) => handleInputChange(e, "email")}
				/>
				<label htmlFor="message">
					Tu mensaje
					<div className={styles.description}>
						Comparte tu experiencia, tus quejas y tus comentarios
					</div>
				</label>
				<textarea
					id="message"
					value={contact.message}
					onChange={(e) => handleInputChange(e, "message")}
				/>
				<button onClick={handleFormSend}>Enviar</button>
			</div>
		</>
	);
};

export default Contact;
