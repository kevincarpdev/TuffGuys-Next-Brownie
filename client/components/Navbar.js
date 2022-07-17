import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import Logo from "../public/img/logo.png";

export default function Navbar(props) {
  const { signer, balance, address, refreshAddress } = props;

  return (
    <div className={"menuBar"}>
      <Link className="logo"  href="/">
          <Image
            src={Logo}
            alt={"Tuff Guys"}
            quality="85"
            layout="intrinsic"
            loading="lazy"
          />
				</Link>
				<div className={"mainNav"}>
          <ul className="mainNavList">
            <Link href="/fuse">
              Fuse
            </Link>
            <Link href="/" scroll={true}>
              About
            </Link>
            <Link href="/" scroll={true}>
              Roadmap
            </Link>
            <Link href="/" scroll={true}>
              Traits
            </Link>
            <Link href="/" scroll={true}>
              Team
            </Link>
            <Link href="/">
              Contact
            </Link>
					</ul>
				</div>
				<div className="wallet">
          {/* {balance && (
            <p>
              Balance: {balance} ETH
            </p>
          )} */}
          {address && (
           <button className="button" onClick={refreshAddress}>
						 {address.slice(0, 6) + '...' + address.slice(36)}
					</button>
          )}
					
				</div>
			</div>
  );
}
