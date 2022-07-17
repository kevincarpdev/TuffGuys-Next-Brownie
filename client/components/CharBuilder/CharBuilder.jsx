import React, { useState, useEffect } from "react";
import Image from 'next/image'
import s from "./CharBuilder.module.css";
import cn from "classnames";
// import { useSnackbar } from "notistack";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";

import Background from "../../public/img/traits/Backgrounds/Blue Doodles.png";
import Skin from "../../public/img/traits/Colors/Blue Skin.png";
import Head from "../../public/img/traits/Colors/Default Head.png";
import Hair from "../../public/img/traits/Headwear/Elvis Hair.png";
import Tears from "../../public/img/traits/Tears/Tears 6.png";
import Headwear from "../../public/img/traits/Headwear/Army Helmet.png";
import Mouthwear from "../../public/img/traits/Mouthwear/Mouthwear colors/Liquid Beard Pink.png";
import Clothes from "../../public/img/traits/Clothes/Emperor.png";
import { FaQuestion } from "react-icons/fa";
import {motion, useMotionValue, useTransform } from "framer-motion";
import 'swiper/css';

export default function CharBuilder() {
	// const { Moralis } = useMoralis();
	// const { user, setUserData, loading } = props;
	// const [NFTs, setNFTs] = useState([]);

	function next(item) {
		const next_num = dressupState[item].current + 1;
		// if next_num exceeds total, restart (set current to 0)
		const new_current = next_num < dressupState[item].total ? next_num : 0;
		updateDressUp(item, new_current);
	}

	function updateDressUp(item, new_current) {
		setDressupState({
			...dressupState,
			[item]: {
				current: (dressupState[item].current = new_current),
				total: dressupState[item].total,
			},
		});
	}

	function randomize() {
		Object.keys(dressupState).map((item) =>
			updateDressUp(
				item,
				Math.floor(Math.random() * Math.floor(dressupState[item].total)),
			),
		);
	}

	const [dressupState, setDressupState] = useState({
		Backgrounds: { current: 0, total: 31 },
		Clothes: { current: 0, total: 57 },
		Colors: { current: 0, total: 19 },
		Headwear: { current: 0, total: 66 },
		Mouthwear: { current: 0, total: 49 },
		Tears: { current: 0, total: 13 },
	});


	const x = useMotionValue(0)
	return (
		<>
			<section id="builder" className={cn(s.root)}>
				<div className="container">
					<div className={s.fuseWindow}>
						<div className={s.nftPanel}>
							<h3 className={s.nftHeader}>My Tuff Guys</h3>
							<div >
								<Swiper className={s.nftRow} spaceBetween={5} slidesPerView={4}>
									<SwiperSlide key="NFT1" >
										<motion.a
											whileHover={{ scale: 1.2 }}
											whileTap={{ scale: 1.0 }}
											className={s.nftItem}
										>
											<FaQuestion size={70} />
										</motion.a>
									</SwiperSlide>
									<SwiperSlide key="NFT2">
										<motion.a
											whileHover={{ scale: 1.2 }}
											whileTap={{ scale: 1.0 }}
											className={s.nftItem}
										>
											<FaQuestion size={70} />
										</motion.a>
									</SwiperSlide>
									<SwiperSlide key="NFT3">
										<motion.a
											whileHover={{ scale: 1.2 }}
											whileTap={{ scale: 1.0 }}
											className={s.nftItem}
										>
											<FaQuestion size={70} />
										</motion.a>
									</SwiperSlide>
									<SwiperSlide key="NFT4">
										<motion.a
											whileHover={{ scale: 1.2 }}
											whileTap={{ scale: 1.0 }}
											className={s.nftItem}
										>
											<FaQuestion size={70} />
										</motion.a>
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
						<div className={s.fuseRow}>
							<div className={s.fuseStage}>
								<div className={s.stepPanel}>
									<div className={s.frame}>
										<div className={s.bgImage}>
											<Image
												src={Background}
												alt="Background"
												quality="85"
												layout="intrinsic"
												placeholder="blur"
												loading="lazy"
											/>
										</div>
										<div className={s.head}>
											<Image
												src={Head}
												alt="Head"
												quality="85"
												layout="intrinsic"
												placeholder="blur"
												loading="lazy"
											/>
										</div>
										<div className={s.skin}>
											<Image
												src={Skin}
												alt="Skin"
												quality="85"
												layout="intrinsic"
												placeholder="blur"
												loading="lazy"
											/>
										</div>
										<div className={s.hair}>
											<Image
												src={Hair}
												alt="Hair"
												quality="85"
												layout="intrinsic"
												placeholder="blur"
												loading="lazy"
											/>
										</div>
										<div className={s.tears}>
											<Image
												src={Tears}
												alt="Tears"
												quality="85"
												layout="intrinsic"
												placeholder="blur"
												loading="lazy"
											/>
										</div>
										<div className={s.headwear}>
											<Image
												src={Headwear}
												alt="Headwear"
												quality="85"
												layout="intrinsic"
												placeholder="blur"
												loading="lazy"
											/>
										</div>
										<div className={s.mouthwear}>
											<Image
												src={Mouthwear}
												alt="Mouthwear"
												quality="85"
												layout="intrinsic"
												placeholder="blur"
												loading="lazy"
											/>
										</div>
										<div className={s.clothes}>
											<Image
												src={Clothes}
												alt="Clothes"
												quality="85"
												layout="intrinsic"
												placeholder="blur"
												loading="lazy"
											/>
										</div>
										{Object.keys(dressupState).map((item) => (
											<div
												id={item}
												className={item + (dressupState[item].current + 1)}
												key={item}
											></div>
										))}
									</div>
								</div>
								<div className={s.controls}>
									<h3>Choose Your Traits</h3>
									<div className={s.traitSliders}>
										{Object.keys(dressupState).map((item) => (
											<div className={s.traitItem} key={item}>
												<h4>{item}</h4>
												<div>
														<div>
															<h5>{item} #1</h5>
														</div>
														<div>
															<h5>{item} #2</h5>
														</div>
														<div>
															<h5>{item} #3</h5>
														</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
						<input
							className="button"
							type="button"
							value="Mint"
							id="randomize"
							onClick={() => randomize()}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
