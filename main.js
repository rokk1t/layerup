<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Layer UP</title>
    <link rel="stylesheet" href="style.css" />
    <script type="module">
      import React from "https://esm.sh/react";
      import { createRoot } from "https://esm.sh/react-dom/client";
      import { ethers } from "https://esm.sh/ethers@6.7.0";

      function App() {
        const [address, setAddress] = React.useState(null);

        async function connectWallet() {
          if (typeof window.ethereum !== "undefined") {
            try {
              const provider = new ethers.BrowserProvider(window.ethereum);
              const accounts = await provider.send("eth_requestAccounts", []);
              setAddress(accounts[0]);
            } catch (err) {
              console.error("Wallet connection error:", err);
            }
          } else {
            alert("MetaMask not found. Please install it.");
          }
        }

        return React.createElement(
          'div',
          { style: { textAlign: 'center' } },
          React.createElement('h1', {}, 'Layer UP'),
          React.createElement('p', {}, 'Gamified Web3 TaskFi platform with quests, rewards and profile progression.'),
          address
            ? React.createElement('div', { style: { marginTop: '1em' } }, `Connected: ${address}`)
            : React.createElement(
                'button',
                {
                  onClick: connectWallet,
                  style: {
                    marginTop: '1em',
                    padding: '10px 20px',
                    fontSize: '1rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                  }
                },
                'Connect MetaMask'
              )
        );
      }

      const container = document.getElementById('root');
      const root = createRoot(container);
      root.render(React.createElement(App));
    </script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
