"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

const NavBar = () => {
	const routes = [
		{ id: 1, label: "Inicio", route: "/" },
		{ id: 2, label: "Acerca de nosotros", route: "/about" },
		{ id: 3, label: "Contacto", route: "/contact" },
		{ id: 4, label: "Cita al azar", route: "/quote" },
	];

	const activeRoute = usePathname();

	return (
		<ul className={styles.container}>
			{routes.map(({ id, label, route }) => (
				<li
					key={id}
					style={activeRoute === route ? { color: "var(--positive)" } : {}}
				>
					<Link href={route}>{label}</Link>
				</li>
			))}
		</ul>
	);
};

export default NavBar;
