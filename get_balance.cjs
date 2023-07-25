const web3 = require("@solana/web3.js");

require('dotenv').config();

const getBalance = async () => {
  const connect = new web3.Connection(process.env.ENDPOINT);
  const publicKey = new web3.PublicKey(`9VhsSZ6ni7dZtmKRHE81yAd3UQW1oKu9LNEWRGFMA5wj`);
  const balance = await connect.getBalance(publicKey) / web3.LAMPORTS_PER_SOL;
  console.log(`Balance of ${publicKey.toString()} is ${balance}`);
};
getBalance();
