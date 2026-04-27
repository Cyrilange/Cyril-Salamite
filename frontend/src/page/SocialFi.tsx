import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SocialFii42() {
	const location = useLocation();
  
    useEffect(() => {
      if (location.state?.scrollTo) {
        setTimeout(() => {
          document.getElementById(location.state.scrollTo)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }, [location]);
  return (
    <div className="min-h-screen flex justify-center  p-6">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-8" id="sf2">

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-2">⬡ SocialFii42 — SF2 Token</h1>

        <a
          href="https://github.com/Cyrilange/Tokenizer/tree/main"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline text-sm"
        >
          GitHub Repository
        </a>

        <p className="mt-4 text-gray-700">
          A decentralized social media token built on Ethereum (Sepolia testnet).  
          Own your data. Own your value.
        </p>

        {/* CONTRACT */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">🔗 Contract</h2>

        <div className="bg-gray-700 p-4 rounded text-sm space-y-1">
          <p><b>Network:</b> Ethereum Sepolia</p>
          <p><b>Contract:</b> 0x88198937B1eC5338dAae2dFDb30E5B45Bd525c82</p>
          <p><b>First TX:</b> 0x711307afbf1bbe48a77ad4022ac872387c093f0869c9fa616496606985cc9443</p>
          <p><b>Standard:</b> ERC-20</p>
          <p><b>Symbol:</b> SF2</p>
          <p><b>Decimals:</b> 18</p>
        </div>

        {/* CONTRACT CODE */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">📜 Smart Contract</h2>

        <pre className="bg-gray-700 p-3 rounded text-sm overflow-x-auto">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract SocialFi42 is ERC20, Ownable, ERC20Permit {
    constructor(address initialOwner)
        ERC20("SocialFi42", "SF2")
        Ownable(initialOwner)
        ERC20Permit("SocialFi42") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}`}
        </pre>

        {/* BLOCKCHAIN EXPLAIN */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">🌐 Blockchain</h2>

        <p className="text-gray-700 mb-3">
          Blockchain is a decentralized ledger stored across multiple nodes.
          Transactions are immutable once validated.
        </p>

        <p className="text-gray-700 mb-3">
          Ethereum allows smart contracts — programs executed directly on-chain.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>🧱 Block — batch of transactions</li>
          <li>⛽ Gas — execution fee</li>
          <li>🔑 Private key — wallet control</li>
          <li>📜 Smart contract — immutable code</li>
          <li>🧪 Sepolia — test network</li>
        </ul>

        {/* FRONTEND */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">🚀 Frontend</h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Connect MetaMask</li>
          <li>Check token balance</li>
          <li>Transfer tokens</li>
          <li>Mint tokens (owner)</li>
        </ul>

        <pre className="bg-gray-700 p-3 rounded text-sm mt-3">
{`npm install
npm run dev`}
        </pre>

        {/* TERMINAL */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">🛠️ Terminal (Foundry)</h2>

        <pre className="bg-gray-700 p-3 rounded text-sm overflow-x-auto">
{`cast send 0x3Ce1936445Bf78966faF9E067D06AE4205Ed0036 \
"mint(address,uint256)" \
<RECIPIENT> \
1000000000000000000 \
--rpc-url $RPC_URL \
--private-key $PRIVATE_KEY`}
        </pre>

        <pre className="bg-gray-700 p-3 rounded text-sm mt-3">
{`cast call CONTRACT_ADDRESS \
"balanceOf(address)(uint256)" \
<WALLET>`}
        </pre>

        {/* TRANSACTION */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">📄 Example Transaction</h2>

        <pre className="bg-gray-700 p-3 rounded text-sm">
{`status: success
gasUsed: 71251
block: 10729691`}
        </pre>

        {/* ENV */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">📦 Environment</h2>

        <pre className="bg-gray-700 p-3 rounded text-sm">
{`RPC_URL=your_rpc
PRIVATE_KEY=your_key`}
        </pre>

        <p className="text-red-500 text-sm mt-2">
          ⚠️ Never commit your .env file
        </p>

        {/* TOKENOMICS */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">🗺️ Tokenomics</h2>

        <ul className="list-disc pl-6 text-gray-700">
          <li>User Rewards — 80%</li>
          <li>Marketing — 10%</li>
          <li>Treasury — 10%</li>
        </ul>

        {/* LICENSE */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">📜 License</h2>

        <p className="text-gray-700">
          Non-profit project — 2026  
          Built on Ethereum Sepolia
        </p>

      </div>
    </div>
  );
}