import { STACKS_MAINNET, STACKS_TESTNET } from "@stacks/network";

// 2. Define your addresses
const MAINNET_CONTRACT = "SP3GAYKCWBD2PTNR77WGYWCPPR102C5E0C9MBGPS7";
const TESTNET_CONTRACT = "ST3GAYKCWBD2PTNR77WGYWCPPR102C5E0C9V1H9ZX";
const CONTRACT_NAME = "stx-raffle"; 

// 3. Export the helper map using the constants directly (no 'new' keyword)
export const NETWORK_CONFIG = {
  mainnet: {
    network: STACKS_MAINNET, // <--- No "new StacksMainnet()"
    contractAddress: MAINNET_CONTRACT,
    contractName: CONTRACT_NAME,
    label: "Mainnet",
  },
  testnet: {
    network: STACKS_TESTNET, // <--- No "new StacksTestnet()"
    contractAddress: TESTNET_CONTRACT,
    contractName: CONTRACT_NAME,
    label: "Testnet",
  },
};

export type NetworkKey = keyof typeof NETWORK_CONFIG;