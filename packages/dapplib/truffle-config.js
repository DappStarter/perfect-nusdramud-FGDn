require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth right purpose good narrow forget two'; 
let testAccounts = [
"0xabdb81ff10fb721f39873296cfb5f12fd8578f2d758b33afd96304b10e7b74f4",
"0xc72a51e2d09e665a609f76a6115bc463c7824603dba3a90ff7b22c7d6fdf14c4",
"0x90dbabecb72891cb212ce04a300ce34bd3728aba91c3f04691a17ed4fee6a146",
"0xdb9da67ac082c62d82e915fb43ea8da058278730fd31a6d65c5833d4fa3edd74",
"0x2b65d5f153151848d715e4291cf89090b2fafc425e8316c9296e6f4e01c15728",
"0x530c00584a65c9082639afa331bb65a091bb8b802b247974727e9d1887d30b9b",
"0x7fc33820673ac79ee4962948f563f2df66813320cba9d55cd215ccaf2ebf6ed5",
"0xaf692297e7614c32cfa39d4aa1c767bc29f4dd711a626a6e9ededb3ea42e4f13",
"0xc2798288fa64ed5202d4b483112eaa4dbff496ee510373d099ea63f78eb3aaa5",
"0xda3f59b1729edcffa10808df67a01661d381b70233d1e137b7647237a60f6d87"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

