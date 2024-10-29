# Sasquatch-Solana-NFT

This guide explains how to mint a compressed NFT using the Crossmint API plugin, which utilizes the Merkle Tree method (note that the Merkle Tree logic will not be detailed in this document, but it is employed when calling the Crossmint API).

When using the Crossmint API to mint the compressed NFT, you need to specify the correct API endpoint and environment. The Staging Environment allows for testing, while the Deployment Environment requires API credits.
In this example:

    We used an API endpoint (modified for security reasons).
    We chose Solana as the minting chain.
    We operated within Crossmint's Staging Environment.
    We minted the NFT and created a crypto wallet for the recipient's email. (There is currently an option to send directly to another crypto wallet instead of creating a new wallet based on an email.)

Within the Crossmint Staging Environment, we sent a POST request (in JSON format). The POST request includes:

    The recipient of the NFT.
    The name of the NFT.
    The image of the Non-Fungible Token.
    A description of the NFT.

Finally, we run and debug the script. If everything works as it should, the Debug Console should print a message similar to:

/////////////
bash
/usr/local/bin/node ./mintNFT.js
{id: '3df1fc10-a720-4985-9318-f944aada1c73', onChain: {…}, actionId: '3df1fc10-a720-4985-9318-f944aada1c73'}
mintNFT.js:30
No debugger available, can not send 'variables'
//////////////


Make sure to copy the actionId, as you will need it for the final command. While you can post this command in your CLI or as part of the JavaScript code, I elected to run it in my CLI.


///////////
bash
ENV="staging" 
API_KEY="<YOUR_API_KEY>" 
MINT_ACTION_ID="<MINT_ACTION_ID>"
curl --header "x-api-key: $API_KEY" \
  -X GET \
  https://${ENV}.crossmint.com/api/2022-06-09/actions/${MINT_ACTION_ID}
////////////


After running this final command in your CLI, with the updated actionId, you have successfully minted your compressed NFT through the Crossmint API and Staging Environment to the blockchain! Check your email or wallet to confirm the arrival of the NFT.
