import { useState, useEffect, useRef, useContext } from 'react';
import { ethers } from 'ethers';
import Head from 'next/head';
import Web3Context from '../context/Web3Context';

// Import the ABIs
import SolidityStorage from '../artifacts/contracts/SolidityStorage.json';
import VyperStorage from '../artifacts/contracts/VyperStorage.json';

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
    console.log(network.name)
    const { solidity_storage, vyper_storage } = contracts[network.name];
    console.log({ solidity_storage, vyper_storage })

    // Vyper Storage smart-contract
    const vyperStorage = new ethers.Contract(
      vyper_storage,
      VyperStorage.abi,
      signer
    );
    const vyperValue = await vyperStorage.get({gasLimit:100000});

    // Solidity Storage smart-contract
    const solidityStorage = new ethers.Contract(
      solidity_storage,
      SolidityStorage.abi,
      signer
    );
    const solidityValue = await solidityStorage.get({gasLimit:100000});

    setVyper({
      ...vyper,
      value: vyperValue.toString(),
      contract: vyperStorage,
    });
    setSolidity({
      ...solidity,
      value: solidityValue.toString(),
      contract: solidityStorage,
    });
  }

  async function changeSolidity(e) {
    e.preventDefault();

    const input = Number(solidity.input);
    const solidityStorage = solidity.contract;

    const tx = await solidityStorage.set(input);
    await tx.wait();
    const solidityValue = await solidityStorage.get();

    setSolidity({ ...solidity, value: solidityValue.toString(), input: '' });
  }

  async function changeVyper(e) {
    e.preventDefault();

    const input = Number(vyper.input);
    const vyperStorage = vyper.contract;

    const tx = await vyperStorage.set(input);
    await tx.wait();
    const vyperValue = await vyperStorage.get();

    setVyper({ ...vyper, value: vyperValue.toString(), input: '' });
  }

  return (
    <div>
      <Head>
        <title>Brownie Next Mix</title>
        <meta
          name="description"
          content="Everything you need to use NextJS with Brownie! "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1>Your Brownie Mix is installed and ready.</h1>
          <p>
            If your contracts compiled and deployed successfully, you can see
            the current storage values below.
          </p>
        </div>

        <div>
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
        </div>
      </main>
    </div>
  );

}
