const apiKey = "sk_staging_36ZTndrQJB4SMDkQYrhag8TakSYHGDJyEgw95QeQLnswG62pMNy5Zt8tpzwf2pode4FHEGjy5cyoYVtEWfsrWMtPsZ4vj4NKh74eLhNu4txL3b14Zz4ukkmX8cb2eAja2i9dPoubdBFtjr6tSjJic3jhojaumgWrJvgkC68WJkuZhe6jNRRQv3jafnVNU3MhqCch9UvJHdp8BkqDhLNhNzf";
const chain = "solana"; // or "polygon-amoy", "ethereum-sepolia", ...
const env = "staging"; // or "www"
const recipientEmail = "blattersean@outlook.com";
//const walletAddress = 'DAzkMX5p77bqwGQxdArAUU4uit9QR3r4MeLDaUztA1yo'
const recipientAddress = `email:${recipientEmail}:${chain}`;

const url = `https://${env}.crossmint.com/api/2022-06-09/collections/default/nfts`;
const options = {
    method: "POST",
    headers: {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key": apiKey,
    },
    body: JSON.stringify({
        recipient: recipientAddress,
        metadata: {
            name: "Saasquatch",
            image: "https://picsum.photos/400",
            description: "Sasquatch believes",
        },
    }),
};



fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));



