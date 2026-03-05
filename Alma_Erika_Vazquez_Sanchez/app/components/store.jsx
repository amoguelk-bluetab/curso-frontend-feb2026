"use client";

import StoreItem from "@/app/components/store-item";
import { use, useMemo, useState } from "react";
import styles from "./store.module.css";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

const Store = ({ dataPromise }) => {
	const [selected, setSelected] = useState([
		/* IDs de los seleccionados*/
	]);
	const [query, setQuery] = useState("");

	const result = use(dataPromise);

	const handleSelectItem = (id) => {
		if (selected.includes(id)) {
			setSelected(selected.filter((x) => x !== id));
		} else {
			setSelected([...selected, id]);
		}
	};

	const mappedItems = useMemo(
		() =>
			result?.products
				?.filter(
					(item) =>
						(item.category === "groceries" || item.category === "laptops") &&
						item.stock >= 5 &&
						item.title.toLowerCase().includes(query.toLowerCase()),
				)
				?.map((item) => ({ ...item, img: item.thumbnail })),
		[result, query],
	);

	return (
		<>
			<TextField
				id="search"
				placeholder="Buscar..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				slotProps={{
					input: {
						startAdornment: (
							<InputAdornment position="start">
								<Search />
							</InputAdornment>
						),
					},
				}}
			/>
			{mappedItems.map(({ id, title, description, price, img }) => (
				<StoreItem
					key={id}
					title={title}
					description={description}
					price={price}
					img={img}
					isSelected={selected.includes(id)}
					onSelected={() => handleSelectItem(id)}
				/>
			))}
		</>
	);
};

export default Store;
