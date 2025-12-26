const { generateWallet } = require('@stacks/wallet-sdk');

const mnemonic = process.argv[2];

async function getKey() {
  const wallet = await generateWallet({
    secretKey: mnemonic,
    password: '',
  });
  
  const account = wallet.accounts[0];
  console.log('Account:', JSON.stringify(account, null, 2));
}

getKey();
