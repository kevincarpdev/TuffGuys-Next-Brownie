import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import HeroBanner from "../../public/img/banner.png";
import s from "./Hero.module.css";
import cn from "classnames";
import Marquee from "react-fast-marquee";
import HeroLeft from "../../public/img/hero-left.png";
import HeroRight from "../../public/img/hero-right.png";
import mainLogo from '../../public/img/logo.png'
import MobileMarqueeImage1 from "../../public/img/heromobile1.png";
import MobileMarqueeImage2 from "../../public/img/heromobile2.png";
import MobileMarqueeImage3 from "../../public/img/heromobile3.png";
import MobileMarqueeImage4 from "../../public/img/heromobile4.png";
import MobileMarqueeImage5 from "../../public/img/heromobile5.png";
import MobileMarqueeImage6 from "../../public/img/heromobile6.png";
import MobileMarqueeImage7 from "../../public/img/heromobile7.png";
import MobileMarqueeImage8 from "../../public/img/heromobile8.png";
import MobileMarqueeImage9 from "../../public/img/heromobile9.png";
import MobileMarqueeImage10 from "../../public/img/heromobile10.png";

export default function Hero() {
	return (
		<>
			<section id="about" className={cn(s.root)}>
				<div className={s.hero}>
					<div className="container hero">
						<div className={s.heroWrap}>
							<div className={s.heroMobileMarquee}>
								<Marquee pauseOnHover={true} speed={10} gradient={false}>
									<img
										src={MobileMarqueeImage1}
										alt="Tuff Guys 1"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage2}
										alt="Tuff Guys 2"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage3}
										alt="Tuff Guys 3"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage4}
										alt="Tuff Guys 4"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage5}
										alt="Tuff Guys 5"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage1}
										alt="Tuff Guys 1"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage2}
										alt="Tuff Guys 2"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage3}
										alt="Tuff Guys 3"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage4}
										alt="Tuff Guys 4"
										className={s.mobileMarqueeImage}
									/>
									<img
										src={MobileMarqueeImage5}
										alt="Tuff Guys 5"
										className={s.mobileMarqueeImage}
									/>
								</Marquee>
							</div>
							<div className={s.imageContainer}>
								<Image
									src={HeroLeft}
									alt="Tuff Guys Left"
									quality="85"
									layout="intrinsic"
									placeholder="blur"
									className={s.image} 
									loading="lazy"
								/>
							</div>
							<div className={s.heroText}>
								<div className={s.badge}>Sold out!</div>
									<Link className={s.heroBannerMain} href="/" scroll={false}>
										<Image
											src={HeroBanner}
											alt="Hero"
											quality="85"
											layout="intrinsic"
											placeholder="blur"
											className={s.heroMain} 
											loading="lazy"
										/>
									</Link>
								<div className={s.heroExtraText}>
									<h4>10,000 tough guys</h4>
									<h4>enter the meta verse</h4>
								</div>
							</div>
							<div className={s.imageContainer}>
								<Image
									src={HeroRight}
									alt="Tuff Guys Right"
									quality="85"
									layout="intrinsic"
									placeholder="blur"
									className={s.image} 
									loading="lazy"
								/>
							</div>
							<div className={s.heroMobileMarquee}>
								<Marquee pauseOnHover={true} speed={10} gradient={false}>
									<Image
											src={MobileMarqueeImage6}
											alt="Tuff Guys"
											quality="85"
											layout="intrinsic"
											placeholder="blur"
											className={s.mobileMarqueeImage}
											loading="lazy"
										/>
									<Image
											src={MobileMarqueeImage7}
											alt="Tuff Guys"
											quality="85"
											layout="intrinsic"
											placeholder="blur"
											className={s.mobileMarqueeImage}
											loading="lazy"
										/>
										<Image
											src={MobileMarqueeImage8}
											alt="Tuff Guys"
											quality="85"
											layout="intrinsic"
											placeholder="blur"
											className={s.mobileMarqueeImage}
											loading="lazy"
										/>
										<Image
											src={MobileMarqueeImage9}
											alt="Tuff Guys"
											quality="85"
											layout="intrinsic"
											placeholder="blur"
											className={s.mobileMarqueeImage}
											loading="lazy"
										/>
										<Image
											src={MobileMarqueeImage10}
											alt="Tuff Guys"
											quality="85"
											layout="intrinsic"
											placeholder="blur"
											className={s.mobileMarqueeImage}
											loading="lazy"
										/>
									<Image
											src={MobileMarqueeImage6}
											alt="Tuff Guys"
											quality="85"
											layout="intrinsic"
											placeholder="blur"
											className={s.mobileMarqueeImage}
											loading="lazy"
										/>
									<Image
											src={MobileMarqueeImage7}
											alt="Tuff Guys"
											quality="85"
											layout="intrinsic"
											placeholder="blur"
											className={s.mobileMarqueeImage}
											loading="lazy"
										/>
										<Image
											src={MobileMarqueeImage8}
											alt="Tuff Guys"
											quality="85"
											layout="intrinsic"
											placeholder="blur"
											className={s.mobileMarqueeImage}
											loading="lazy"
										/>
										<Image
											src={MobileMarqueeImage9}
											alt="Tuff Guys"
											quality="85"
											layout="intrinsic"
											placeholder="blur"
											className={s.mobileMarqueeImage}
											loading="lazy"
										/>
										<Image
											src={MobileMarqueeImage10}
											alt="Tuff Guys"
											quality="85"
											layout="intrinsic"
											placeholder="blur"
											className={s.mobileMarqueeImage}
											loading="lazy"
										/>
								</Marquee>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
