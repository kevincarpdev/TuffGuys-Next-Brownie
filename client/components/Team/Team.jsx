import React from "react";
import s from "./Team.module.css";
import cn from "classnames";
import TeamCard from "../common/TeamCard/TeamCard";
import ToxtreplaImage from "../../public/img/toxtrepla.png";
import ZavImage from "../../public/img/zav.png";
import NickImage from "../../public/img/nick.png";
import JelloImage from "../../public/img/jello.png";

export default function Team() {
	return (
		<>
			<section id="team" className={cn(s.root, 'off-white')}>
				<h2>Meet The Team</h2>
          <div className="cardListing">
            <div className="flexColumn container">
              <TeamCard
                title={"Toxtrepla"}
                subtitle={"Founder"}
                image={ToxtreplaImage}
                text={
                  "Hey there, I'm tox. I am a 33-year-old father of 3 toddlers, based from the tristate area of the US. I am the owner of Malice, as well as a heavily entrenched Video Game grader, collector, investor, as well as a Retail Market Analyst. Community and Family is everything in this life and in this space especially, and I am beyond thrilled to be a part of an incredibly strong and meaningful project here. Never hesitate to reach out to me directly with questions or comments!"
                }
                twitter="toxtrepla"
              />
              <TeamCard
                title={"Zav"}
                subtitle={"Founder / Artist"}
                image={ZavImage}
                text={
                  "Hi there I am ZavStudios but feel free to call me Zav. I am 22-year-old college dropout from The Netherlands who has worked for numerous multi-million companies providing a plethora of illustrations!. As of a young age I have always been drawing around creating imaginary figures and monsters. Creativity really has no boundaries! Don't be afraid to shoot any questions my way I am always available for a chat!"
                }
                twitter="ZavStudios"
              />
              <TeamCard
                title={"Nick"}
                subtitle={"Founder"}
                image={NickImage}
                text={
                  "Hello everyone, I'm nick! I'm one of the co-founders of this project and am very excited to show you what I can provide with my experience. To give you a small gist of what I've done in the past few years, I've founded and owned four multi-million dollar companies gaining tons of experience to run successful projects. I will put my all into this project and have this be something that can change the world one day."
                }
                twitter="nickbruhman"
              />
              <TeamCard
                title={"Jello"}
                subtitle={"Admin"}
                image={JelloImage}
                text={
                  "Sup im jello. I am a 22-year-old working on my last year of school in Vancovuer Canada. I've discovered the Crypto community and instantly fell in love with it. I find myself immersing myself in the Crypto/NFT community and find myself amazed by how pure talent in thus community. Always feel free to ping me in chat to spark up a conversation! follow me! im cute!"
                }
                twitter="jellonft"
              />
            </div>
          </div>
			</section>
		</>
	);
}
