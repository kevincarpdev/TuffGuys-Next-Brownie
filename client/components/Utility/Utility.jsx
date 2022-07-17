import React from "react";
import s from "./Utility.module.css";
import cn from "classnames";
import TuffCard from "../common/TuffCard/TuffCard";
import FusionImage from "../../public/img/fusion.gif";
import StakingImage from "../../public/img/staking.png";

export default function Utility() {
	return (
		<>
			<section id="utility" className={cn(s.root, 'off-white')}>
				<h2>Utility</h2>
				<div className="cardListing">
					<div className="flexColumn container">
						<TuffCard
							title={"Fusion"}
							subtitle={"December 2021"}
							image={FusionImage}
							text={
								"Tuff holders of two Tuff Guys will have the ability to merge/fuse them together to randomly combine their assets and traits! While this process is randomized, you are guaranteed to only acquire traits that exist on the two Tuff Guys you possess! Tuff holders of three or more Tuff Guys will have the ability to hand select and choose what assets get transferred to the Fusion when merging three or more Tuff Guys! When you fuse your Tuff Guys, you burn them in the process to create the Fusion!"
							}
						/>
						<TuffCard
							title={"Staking"}
							subtitle={"December 2021"}
							image={StakingImage}
							text={
								"$TUFF Tokens are a benefit of holding/staking your Tuff Guys to earn rewards and incentivize our holders in the Tuff Community. For every Tuff Guy you hold/stake, you will earn $TUFF Tokens for each of the Tuff Guys you hold. These Tokens will given on a biweekly basis (assuming you have held for the 14 day requirement) and will continue to accrue with no caps."
							}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
