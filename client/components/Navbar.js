// components/Navbar/index.js
import React from "react";
import Link from 'next/link'
import Image from 'next/image'

// This returns a **readable** wallet address
const formatAddress = (address) =>
  address.slice(0, 5) + '...' + address.slice(38)

export default function Navbar({ address, connectWallet, theme, setTheme }) {
  return (
    <div className="menuBar">
        {/* logo */}
        <div className="hidden cursor-pointer sm:inline-flex">
          <Link href="/">
            <a>
              <Image src="/logo.png" width={112} height={112} alt={"Tuff Guys"} quality="85" loading="lazy" />
            </a>
          </Link>
        </div>
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
         
        {/* navigation & user's address */}
        {address && (
          <div className="flex items-center space-x-3">
            <Link href="/">
              <a className="hover:underline">My NFTs</a>
            </Link>
            <Link href="/create">
              <a className="hover:underline">Create</a>
            </Link>
            <p className="rounded-md bg-green-400 py-2 px-3 text-white">
              {formatAddress(address)}
            </p>
          </div>
        )}
    </div>
  )
}