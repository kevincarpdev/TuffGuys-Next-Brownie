import React from "react";
import s from "./TeamCard.module.css";
import cn from "classnames";
import Twitter from "../../../public/img/twitter.png";
import { motion } from "framer-motion";
import Image from 'next/image'

const TeamCard = ({
	title,
	subtitle,
	text,
	image,
	twitter,
}) => {
	return (
		<>
			<div className={cn(s.root)}>
				<div className={s.cardText}>
					<h3>{title}</h3>
					<h4>{subtitle}</h4>
					<p>{text}</p>
					<motion.a
						target={"_blank"}
						href={"https://twitter.com/" + twitter}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 1.0 }}
						className={s.nftItem}
					>
						<div className={s.twitterImage}>
							<Image
								src={Twitter}
								alt={title + "s twitter"}
								
								quality="85"
								layout="intrinsic"
								loading="lazy"
							/>
						</div>
					
					</motion.a>
				</div>
				<Image
					src={image}
					alt={title}
					className={s.cardImage}
					quality="85"
					layout="intrinsic"
					loading="lazy"
					placeholder="blur"
				/>
			</div>
		</>
	);
};

export default TeamCard;
