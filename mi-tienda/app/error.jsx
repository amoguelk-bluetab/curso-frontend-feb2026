"use client";

import { useEffect } from "react";
import styles from "./error.module.css";

const Error = ({ error, reset }) => {
	useEffect(() => {
		console.error("Ocurrió un error:", error.message);
	}, [error]);

	return (
		<div className={styles.container}>
			<h3 className="subtitle">¡Ocurrió un error!</h3>
			<p>Comparte este código con tu administrador: {error.digest}</p>
			<button className={styles.button} onClick={() => reset()}>
				Volver a intentar
			</button>
		</div>
	);
};

export default Error;
