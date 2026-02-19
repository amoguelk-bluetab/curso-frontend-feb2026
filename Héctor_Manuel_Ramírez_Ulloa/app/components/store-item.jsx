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
			<img src={img} className={styles.img} />
			<div className={styles.content}>
				<h2 className="subtitle">{title}</h2>
				<h3 className="heading">${price}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default StoreItem;
