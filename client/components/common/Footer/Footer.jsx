import React from "react";
import s from "./Footer.module.css";
import cn from "classnames";
import Link from 'next/link'
import FooterLogo from "../../../public/img/footer-logo.png";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from 'next/image'

export default function Footer() {
	return (
		<>
			<div className={cn(s.root, "container")}>
				<div className={s.copyright}>
					<Link className={s.footerLogoImage} href="/" scroll={true} passHref>
						<Image
							src={FooterLogo}
							alt={"Tuff Guys"}
							quality="85"
							layout="intrinsic"
							loading="lazy"
						/>
					</Link>
					<p>Copyright © 2021 Tuff Guys</p>
				</div>
				<div className={s.footerLinks}>
					<div className={s.footerNavColumn}>
						<h4>About</h4>
						<ul>
								<motion.li
								>
									<Link href="/fuse" scroll={true}>
										Fuse
									</Link>
								</motion.li>
							<li>
								<motion.a
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 1.0 }}
								>
									How to Buy
								</motion.a>
							</li>
							<li>
								<motion.a
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 1.0 }}
								>
									Rarity
								</motion.a>
							</li>
							<li>
								<motion.a
									target={"_blank"}
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 1.0 }}
								>
									OpenSea
								</motion.a>
							</li>
						</ul>
					</div>
					<div className={s.footerNavColumn}>
						<h4>Company</h4>
						<ul>
							<li>
								<a href="#about">About Us</a>
							</li>
							<li>
								<a href="#team">Team</a>
							</li>
							<li>
								<motion.a
									target={""}
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 1.0 }}
								>
									Contact Us
								</motion.a>
							</li>
						</ul>
					</div>
					<div className={s.footerNavColumn}>
						<h4>Information</h4>
						<ul>
							<li>
								<motion.a
									target={""}
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 1.0 }}
								>
									Terms of Service
								</motion.a>
							</li>
							<li>
								<motion.a
									target={""}
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 1.0 }}
								>
									Privacy Policy
								</motion.a>
							</li>
							<li>
								<a href="#roadmap">Roadmap</a>
							</li>
						</ul>
					</div>
					<div className={cn(s.footerNavColumn + " social")}>
						<h4>Connect</h4>
						<ul className={s.socialNav}>
							<li>
								<motion.a
									href="https://twitter.com/tuffguysNFT" 
									target={"_blank"}
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 1.0 }}
								>
									<FaTwitter />{" "}
								</motion.a>
							</li>
							<li>
								<motion.a
									href="https://discord.com/invite/zy5pDewEN8"
									target={"_blank"}
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 1.0 }}
								>
									<FaDiscord />{" "}
								</motion.a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
