import { createContext } from 'react';

const Web3Context = createContext({
  signer: null,
  network: null
});

export default Web3Context;
