import Image from "next/image";
import styles from "./store-item.module.css";

const StoreItem = ({
	img,
	title,
	price,
	description,
	isSelected,
	onSelected,
}) => {
	return (
		<div
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
			<div className={styles.content}>
				<h2 className="subtitle">{title}</h2>
				<h3 className="heading">${price}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default StoreItem;
