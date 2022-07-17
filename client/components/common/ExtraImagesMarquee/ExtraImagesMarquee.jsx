import React from "react";
import s from "./ExtraImagesMarquee.module.css";
import cn from "classnames";
import Marquee from "react-fast-marquee";
import TuffFooter1 from "../../../public/img/tuffFooter1.png";
import TuffFooter2 from "../../../public/img/tuffFooter2.png";
import TuffFooter3 from "../../../public/img/tuffFooter3.png";
import Image from 'next/image'


const ExtraImagesMarquee = () => {
	return (
		<div className={cn(s.root)}>
			<Marquee
				pauseOnHover={true}
				speed={50}
				gradient={false}
				className={s.marquee}
			>
					<div className={s.marqueeImage}>
						<Image
							src={TuffFooter1}
							alt={"Tuff Guys"}
							className={s.marqueeImage}
							quality="85"
							layout="intrinsic"
							loading="lazy"
						/>
					</div>
					<div className={s.marqueeImage}>
						<Image
							src={TuffFooter2}
							alt={"Tuff Guys"}
							className={s.marqueeImage}
							quality="85"
							layout="intrinsic"
							loading="lazy"
						/>
					</div>
					<div className={s.marqueeImage}>
						<Image
							src={TuffFooter3}
							alt={"Tuff Guys"}
							className={s.marqueeImage}
							quality="85"
							layout="intrinsic"
							loading="lazy"
						/>
					</div>
					<div className={s.marqueeImage}>
						<Image
							src={TuffFooter1}
							alt={"Tuff Guys"}
							className={s.marqueeImage}
							quality="85"
							layout="intrinsic"
							loading="lazy"
						/>
					</div>
					<div className={s.marqueeImage}>
						<Image
							src={TuffFooter2}
							alt={"Tuff Guys"}
							className={s.marqueeImage}
							quality="85"
							layout="intrinsic"
							loading="lazy"
						/>
					</div>
					<div className={s.marqueeImage}>
						<Image
							src={TuffFooter3}
							alt={"Tuff Guys"}
							className={s.marqueeImage}
							quality="85"
							layout="intrinsic"
							loading="lazy"
						/>
					</div>
			</Marquee>
		</div>
	);
};

export default ExtraImagesMarquee;
