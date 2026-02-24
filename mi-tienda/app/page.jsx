"use client";

import StoreItem from "@/app/components/store-item";
import { useMemo, useState } from "react";
import styles from "./page.module.css";
import { useData } from "@/app/utils/useData";

const Home = () => {
	const [selected, setSelected] = useState([
		/* IDs de los seleccionados*/
	]);
	const [query, setQuery] = useState("");

	const { items, error } = useData("products", 100);

	const handleSelectItem = (id) => {
		if (selected.includes(id)) {
			setSelected(selected.filter((x) => x !== id));
		} else {
			setSelected([...selected, id]);
		}
	};

	const mappedItems = useMemo(
		() =>
			items
				?.filter(
					(item) =>
						(item.category === "groceries" || item.category === "laptops") &&
						item.stock >= 5 &&
						item.title.toLowerCase().includes(query.toLowerCase()),
				)
				?.map((item) => ({ ...item, img: item.thumbnail })),
		[items, query],
	);

	return (
		<>
			<input
				id="search"
				className={styles.search}
				placeholder="Buscar..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			{error && (
				<div className={styles.error}>
					<p>HUBO UN ERROR</p>
				</div>
			)}
			{mappedItems
				? mappedItems.map(({ id, title, description, price, img }) => (
						<StoreItem
							key={id}
							title={title}
							description={description}
							price={price}
							img={img}
							isSelected={selected.includes(id)}
							onSelected={() => handleSelectItem(id)}
						/>
					))
				: "Cargando..."}
		</>
	);
};

export default Home;
