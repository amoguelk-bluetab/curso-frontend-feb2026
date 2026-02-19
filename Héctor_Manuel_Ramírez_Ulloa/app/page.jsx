"use client";

import NavBar from "@/app/components/navbar";
import StoreItem from "@/app/components/store-item";
import { items } from "@/app/utils/test-data";
import { useState } from "react";
import styles from "./page.module.css";

const Home = () => {
	const [selected, setSelected] = useState([
		/* IDs de los seleccionados*/
	]);

	const handleSelectItem = (id) => {
		if (selected.includes(id)) {
			setSelected(selected.filter((x) => x !== id));
		} else {
			setSelected([...selected, id]);
		}
	};

	return (
		<>
			{items.map(({ id, title, description, price, img }) => (
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

export default Home;
