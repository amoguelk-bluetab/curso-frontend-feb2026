import Store from "@/app/components/store";
import AboutUs from "@/app/components/AboutUs";
import { Typography, CircularProgress, Stack } from "@mui/material";
import { Suspense } from "react";

const dataFetch = async () => {
	const response = await fetch("https://dummyjson.com/products?limit=100");
	return response.json();
};

const Home = () => {
	const dataPromise = dataFetch();

	return (
		<Stack spacing={4}>
			<Typography variant="h1">Mi Tiendita</Typography>
			
			<Suspense fallback={<CircularProgress />}>
				<Store dataPromise={dataPromise} />
			</Suspense>

			<AboutUs />
		</Stack>
	);
};

export default Home;