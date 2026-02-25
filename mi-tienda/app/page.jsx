import Store from "@/app/components/store";
import { Suspense } from "react";

const dataFetch = async () => {
	const response = await fetch("https://dummyjson.com/product?limit=100");
	return response.json();
};

const Home = () => {
	const dataPromise = dataFetch();

	return (
		<>
			<h1 className="hero">Mi Tiendita</h1>
			<Suspense fallback="Cargando...">
				<Store dataPromise={dataPromise} />
			</Suspense>
		</>
	);
};

export default Home;
