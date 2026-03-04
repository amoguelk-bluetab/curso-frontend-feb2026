import Store from "@/app/components/store";
import { Typography, CircularProgress } from "@mui/material";
import { Suspense } from "react";

const dataFetch = async () => {
	const response = await fetch("https://dummyjson.com/products?limit=100");
	return response.json();
};

const Home = () => {
	const dataPromise = dataFetch();

	return (
		<>
			<Typography variant="h1">Mi Tiendita</Typography>
			<Suspense fallback={<CircularProgress />}>
				<Store dataPromise={dataPromise} />
			</Suspense>
		</>
	);
};

export default Home;
