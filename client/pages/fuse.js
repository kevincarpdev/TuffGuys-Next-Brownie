import { useState, useEffect, useRef, useContext } from 'react';
import { ethers } from 'ethers';
import Head from 'next/head';
import Web3Context from '../context/Web3Context';
import Footer from "../components/common/Footer/Footer";
import Hero from "../components/Hero/Hero";
import CharBuilder from "../components/CharBuilder/CharBuilder";
import ExtraImagesMarquee from '../components/common/ExtraImagesMarquee/ExtraImagesMarquee';

// Import the deployed addresses
import contracts from '../utils/contracts';

export default function Fuse() {
  // const { signer, network } = useContext(Web3Context);


  // useEffect(() => {
  //   if (signer) {
  //     loadContracts();
  //   }
  // }, [signer]);


  return (
    <div>
      <Head>
        <title>Tuff Guys | Fuse</title>
      </Head>

      <main>
        <CharBuilder />
      </main>
      <footer>
        <Footer />
      </footer>
      <ExtraImagesMarquee />
    </div>
  );

}
