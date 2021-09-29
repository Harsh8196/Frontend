import WalletConnectProvider from "@walletconnect/web3-provider";
const Web3 = require('web3');

 
let web3;
 
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3= new Web3(window.web3.currentProvider);
} else {
  const providers = new  Web3.providers.HttpProvider('https://api.s0.b.hmny.io')
  web3 = new Web3(providers);
}

export default web3