const Component = ({ children }) => {
	return (
		<div>
			<p>Mis hijos estan abajo</p>
			{children}
			<p>Mis hijos estan arriba</p>
		</div>
	);
};

export default Component;
