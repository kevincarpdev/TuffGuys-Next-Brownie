import React from "react";
import s from "./Rarity.module.css";
import cn from "classnames";
import RarityImage from "../../public/img/rarity.png";
import Image from 'next/image'

export default function Rarity() {
	return (
		<>
			<section id="rarity" className={cn(s.root, "rarity")}>
				<div className={s.rarity}>
					<div className="container">
						<div className="flexRow rarity">
							<div className={s.rarityText}>
								<h2>Rarity</h2>
								<div className={s.statTable}>
									<div className={s.tableRow}>
										<div className={s.statHeader}>10,000</div>
										<div className={s.statHeader}>Total Tuff Guys</div>
									</div>
									<div className={s.tableRow}>
										<div className={s.statHeader}>9</div>
										<div className={s.statHeader}>Skins</div>
									</div>
									<div className={s.tableRow}>
										<div className={s.statHeader}>55</div>
										<div className={s.statHeader}>Clothes</div>
									</div>
									<div className={s.tableRow}>
										<div className={s.statHeader}>55</div>
										<div className={s.statHeader}>Headwears</div>
									</div>
									<div className={s.tableRow}>
										<div className={s.statHeader}>40</div>
										<div className={s.statHeader}>Mouthwears</div>
									</div>
									<div className={s.tableRow}>
										<div className={s.statHeader}>10</div>
										<div className={s.statHeader}>Tears</div>
									</div>
									<div className={s.tableRow}>
										<div className={s.statHeader}>30</div>
										<div className={s.statHeader}>Backgrounds</div>
									</div>
								</div>
							</div>
							<div className={s.image}>
								<Image
									src={RarityImage}
									alt="Rarity"
									quality="85"
									layout="intrinsic"
									placeholder="blur"
									loading="lazy"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
