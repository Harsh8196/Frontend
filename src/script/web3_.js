const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");
 
let web3;
 
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3= new Web3(window.web3.currentProvider);
} else {
  const provider = new HDWalletProvider(
    'comic hero roof harsh main make please ill slush away spice slab',
    'https://api.s0.b.hmny.io'
  );
  
  web3 = new Web3(provider);
}

export default web3