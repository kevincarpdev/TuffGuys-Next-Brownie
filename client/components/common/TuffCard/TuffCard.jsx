import React from "react";
import s from "./TuffCard.module.css";
import cn from "classnames";
import Image from 'next/image'


const TuffCard = ({ title, subtitle, text, image }) => {
	return (
		<>
			<div className={cn(s.root)}>
				<div className={s.cardText}>
					<h3>{title}</h3>
					<h4>{subtitle}</h4>
					<p>{text}</p>
				</div>
				<Image
					src={image}
					alt={title}
					className={s.cardImage}
					quality="85"
					layout="intrinsic"
					loading="lazy"
				/>
			</div>
		</>
	);
};

export default TuffCard;