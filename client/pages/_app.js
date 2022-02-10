import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import Navbar from '../components/Navbar';
import Web3Context from '../context/Web3Context';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  let [balance, setBalance] = useState('0');
  let [address, setAddress] = useState('0x0');
  let [signer, setSigner] = useState(null);

  useEffect(() => {
    loadWeb3Data();
  }, []);

  async function loadWeb3Data() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const balance = await provider.getBalance(address);

    setSigner(signer);
    setAddress(address);
    setBalance(ethers.utils.formatEther(balance));
  }

  async function refreshAddress() {
    await loadWeb3Data();
  }

  if (!signer) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar
        signer={signer}
        balance={balance}
        address={address}
        refreshAddress={refreshAddress}
      />

      <Web3Context.Provider value={{ signer }}>
        <main className="mt-16 p-10">
          <Component {...pageProps} />
        </main>
      </Web3Context.Provider>
    </div>
  );
}

export default App;
