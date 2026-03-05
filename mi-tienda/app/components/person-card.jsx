"use client";

import Image from "next/image";
import styles from "./person-card.module.css";

const PersonCard = ({ name, img, email }) => {
	const imgLoader = ({ src, width }) => {
		return src.slice(0, src.lastIndexOf("/")) + "/" + width;
	};

	return (
		<div className={styles.card}>
			<Image
				src={img}
				alt={name}
				width={250}
				height={250}
				className={styles.img}
				loader={imgLoader}
				placeholder="blur"
				blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcUQ8AAdUBKRs/oNkAAAAASUVORK5CYII="
			/>
			<h3 className="heading">{name}</h3>
			<p className={styles.email}>{email}</p>
		</div>
	);
};

export default PersonCard;
