import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { getWeb3 } from '../utils/getWeb3';
import { getEthereum } from '../utils/getEthereum';
import map from '../artifacts/deployments/map.json';

export default function Home() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [chainid, setChainid] = useState(null);

  const [vyperStorage, setVyperStorage] = useState(null);
  const [vyperValue, setVyperValue] = useState(0);
  const vyperInput = useRef(null);

  const [solidityStorage, setSolidityStorage] = useState(null);
  const [solidityValue, setSolidityValue] = useState(0);
  const solidityInput = useRef(null);

  useEffect(() => {
    (async () => {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Try and enable accounts (connect metamask)
      try {
        const ethereum = await getEthereum();
        ethereum.enable();
      } catch (e) {
        console.log(`Could not enable accounts. Interaction with contracts not available.
            Use a modern browser with a Web3 plugin to fix this issue.`);
        console.log(e);
      }

      // Use web3 to get the user's accounts
      const accounts = await web3.eth.getAccounts();

      // Get the current chain id
      const chainid = parseInt(await web3.eth.getChainId());

      setWeb3(web3);
      setAccounts(accounts);
      setChainid(chainid);
    })();
  }, []);

  useEffect(() => {
    // Second callback
    (async () => await loadInitialContracts())();
  }, [web3, accounts, chainid]);

  const loadContract = async (chain, contractName) => {
    // Load a deployed contract instance into a web3 contract object
    // Get the address of the most recent deployment from the deployment map
    let address;
    try {
      address = map[chain][contractName][0];
      console.log(address);
    } catch (e) {
      console.log(
        `Couldn't find any deployed contract "${contractName}" on the chain "${chain}".`
      );
      return undefined;
    }

    // Load the artifact with the specified address
    let contractArtifact;
    try {
      contractArtifact = await import(
        `../artifacts/deployments/${chain}/${address}.json`
      );
    } catch (e) {
      console.log(
        `Failed to load contract artifact "../artifacts/deployments/${chain}/${address}.json"`
      );
      return undefined;
    }

    return new web3.eth.Contract(contractArtifact.abi, address);
  };

  const loadInitialContracts = async () => {
    // <=42 to exclude Kovan, <42 to include kovan
    if (chainid < 42) {
      // Wrong Network!
      return;
    }
    console.log(chainid);

    var _chainID = 0;
    if (chainid === 42) {
      _chainID = 42;
    }
    if (chainid === 1337) {
      _chainID = 'dev';
    }
    console.log(_chainID);
    const vyperStorage = await loadContract(_chainID, 'VyperStorage');
    const solidityStorage = await loadContract(_chainID, 'SolidityStorage');

    if (!vyperStorage || !solidityStorage) {
      return;
    }

    const vyperValue = await vyperStorage.methods.get().call();
    const solidityValue = await solidityStorage.methods.get().call();

    setVyperStorage(vyperStorage);
    setVyperValue(vyperValue);

    setSolidityStorage(solidityStorage);
    setSolidityValue(solidityValue);
  };

  const changeVyper = async (e) => {
    e.preventDefault();
    const value = parseInt(vyperInput.current.value);
    if (isNaN(value)) {
      alert('invalid value');
      return;
    }
    await vyperStorage.methods
      .set(value)
      .send({ from: accounts[0] })
      .on('receipt', async () => {
        setVyperValue(await vyperStorage.methods.get().call());
      });

    setVyperValue(value);
    vyperInput.current.value = '';
  };

  const changeSolidity = async (e) => {
    e.preventDefault();
    const value = parseInt(solidityInput.current.value);
    if (isNaN(value)) {
      alert('invalid value');
      return;
    }
    await solidityStorage.methods
      .set(value)
      .send({ from: accounts[0] })
      .on('receipt', async () => {
        setSolidityValue(await vyperStorage.methods.get().call());
      });

    setSolidityValue(value);
    solidityInput.current.value = '';
  };

  if (!web3) {
    return <div>Loading Web3, accounts, and contracts...</div>;
  }

  // <=42 to exclude Kovan, <42 to include Kovan
  if (isNaN(chainid) || chainid < 42) {
    return (
      <div>
        Wrong Network! Switch to your local RPC "Localhost: 8545" in your Web3
        provider (e.g. Metamask)
      </div>
    );
  }

  if (!vyperStorage || !solidityStorage) {
    return (
      <div>Could not find a deployed contract. Check console for details.</div>
    );
  }

  const isAccountsUnlocked = accounts ? accounts.length > 0 : false;

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
        <h1>Your Brownie Mix is installed and ready.</h1>
        <p>
          If your contracts compiled and deployed successfully, you can see the
          current storage values below.
        </p>
        {!isAccountsUnlocked ? (
          <p>
            <strong>
              Connect with Metamask and refresh the page to be able to edit the
              storage fields.
            </strong>
          </p>
        ) : null}
        <h2>Vyper Storage Contract</h2>

        <div>The stored value is: {vyperValue}</div>
        <br />
        <form onSubmit={(e) => changeVyper(e)}>
          <div>
            <label>Change the value to: </label>
            <br />
            <input name="vyperInput" type="text" ref={vyperInput} />
            <br />
            <button type="submit" disabled={!isAccountsUnlocked}>
              Submit
            </button>
          </div>
        </form>

        <h2>Solidity Storage Contract</h2>
        <div>The stored value is: {solidityValue}</div>
        <br />
        <form onSubmit={(e) => changeSolidity(e)}>
          <div>
            <label>Change the value to: </label>
            <br />
            <input name="solidityInput" type="text" ref={solidityInput} />
            <br />
            <button type="submit" disabled={!isAccountsUnlocked}>
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
