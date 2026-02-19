import styles from "./navbar.module.css";

const NavBar = () => {
	const routes = [
		{ id: 1, label: "Inicio", route: "/" },
		{ id: 2, label: "Acerca de nosotros", route: "/about" },
		{ id: 3, label: "Contacto", route: "/contact" },
	];

	return (
		<ul className={styles.container}>
			{routes.map(({ id, label, route }) => (
				<li key={id}>
					<a href={route}>{label}</a>
				</li>
			))}
		</ul>
	);
};

export default NavBar;
