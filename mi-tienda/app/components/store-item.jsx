import Image from "next/image";
import styles from "./store-item.module.css";
import { Stack, Typography } from "@mui/material";

const StoreItem = ({
	img,
	title,
	price,
	description,
	isSelected,
	onSelected,
}) => {
	return (
		<Stack
			direction="row"
			className={`${styles.card} ${isSelected ? styles.selected : ""}`}
			onClick={onSelected}
		>
			<Image
				src={img}
				alt={title}
				width={300}
				height={300}
				placeholder="blur"
				blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
			/>
			<Stack className={styles.content}>
				<Typography variant="h3">{title}</Typography>
				<Typography variant="h4" color="textDisabled">
					${price}
				</Typography>
				<Typography variant="body1">{description}</Typography>
			</Stack>
		</Stack>
	);
};

export default StoreItem;
