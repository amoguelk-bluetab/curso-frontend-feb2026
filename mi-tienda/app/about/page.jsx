"use client";

import PersonCard from "@/app/components/person-card";
import { useData } from "@/app/utils/useData";
import styles from "./page.module.css";

const About = () => {
	const { items, error } = useData("users", 8);

	if (error) return <p>Ocurrió un error</p>;

	return (
		<>
			<h1 className="hero">¿Quiénes somos?</h1>
			<h2 className="subtitle">
				Un equipo dedicado a ofrecer productos de calidad.
			</h2>
			<div className={styles.grid}>
				{!items
					? "Cargando..."
					: items.map(({ id, firstName, lastName, image, email }) => (
							<PersonCard
								key={id}
								name={firstName + " " + lastName}
								img={image}
								email={email}
							/>
						))}
			</div>
		</>
	);
};

export default About;
