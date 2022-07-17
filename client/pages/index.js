import { useState, useEffect, useRef, useContext } from 'react';
import { ethers } from 'ethers';
import Head from 'next/head';
import Web3Context from '../context/Web3Context';
import Footer from "../components/common/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Utility from "../components/Utility/Utility";
import Rarity from "../components/Rarity/Rarity";
import Team from "../components/Team/Team";
import ExtraImagesMarquee from '../components/common/ExtraImagesMarquee/ExtraImagesMarquee';

// Import the ABIs
// import SolidityStorage from '../artifacts/contracts/SolidityStorage.json';
// import VyperStorage from '../artifacts/contracts/VyperStorage.json';

// Import the deployed addresses
import contracts from '../utils/contracts';

export default function Home() {
  const { signer, network } = useContext(Web3Context);
  let [vyper, setVyper] = useState({
    contract: null,
    value: '',
    input: ''
  });
  let [solidity, setSolidity] = useState({
    contract: null,
    value: '',
    input: '',
  });

  useEffect(() => {
    if (signer) {
      loadContracts();
    }
  }, [signer]);

  async function loadContracts() {
    // smart-contract addresses
    // const { solidity_storage, vyper_storage } = contracts[network.name];
    
    // // Vyper Storage smart-contract
    // const vyperStorage = new ethers.Contract(
    //   vyper_storage,
    //   VyperStorage.abi,
    //   signer
    // );
    // const vyperValue = await vyperStorage.get({gasLimit:100000});

    // // Solidity Storage smart-contract
    // const solidityStorage = new ethers.Contract(
    //   solidity_storage,
    //   SolidityStorage.abi,
    //   signer
    // );
    // const solidityValue = await solidityStorage.get({gasLimit:100000});

    // setVyper({
    //   ...vyper,
    //   value: vyperValue.toString(),
    //   contract: vyperStorage,
    // });
    // setSolidity({
    //   ...solidity,
    //   value: solidityValue.toString(),
    //   contract: solidityStorage,
    // });
  }

  async function changeSolidity(e) {
    e.preventDefault();

    // const input = Number(solidity.input);
    // const solidityStorage = solidity.contract;

    // const tx = await solidityStorage.set(input);
    // await tx.wait();
    // const solidityValue = await solidityStorage.get({gasLimit:100000});

    // setSolidity({ ...solidity, value: solidityValue.toString(), input: ''});
  }

  async function changeVyper(e) {
    e.preventDefault();

    // const input = Number(vyper.input);
    // const vyperStorage = vyper.contract;

    // const tx = await vyperStorage.set(input);
    // await tx.wait();
    // const vyperValue = await vyperStorage.get({gasLimit:100000});

    // setVyper({ ...vyper, value: vyperValue.toString(), input: ''});
  }

  return (
    <div>
      <Head>
        <title>Tuff Guys NFT</title>
        <meta
          name="description"
          content="Tuff Guys NFT"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;600;700&family=Rammetto+One&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Hero />
        <Utility />
        <Rarity />
        <Team />
        {/* <div>
          <h2>Vyper Storage Contract</h2>
          <div>The stored value is: {vyper.value}</div>
          <br />
          <form>
            <div>
              <label>Change the value to: </label>
              <br />
              <input
                name="vyperInput"
                type="text"
                value={vyper.input}
                onChange={(e) =>
                  setVyper({ ...vyper, input: Number(e.target.value) })
                }
              />
              <br />
              <button onClick={changeVyper} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div>
          <h2>Solidity Storage Contract</h2>
          <div>The stored value is: {solidity.value}</div>
          <br />
          <form>
            <div>
              <label>Change the value to: </label>
              <br />
              <input
                name="solidityInput"
                type="text"
                value={solidity.input}
                onChange={(e) =>
                  setSolidity({ ...solidity, input: Number(e.target.value) })
                }
              />
              <br />
              <button onClick={changeSolidity} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div> */}
      </main>
      <footer>
        <Footer />
      </footer>
      <ExtraImagesMarquee />
    </div>
  );

}
