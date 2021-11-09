require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remember company harvest battle frame giant'; 
let testAccounts = [
"0xb61f6bea8543946496b56db5ea1a9e5128703c7a8a59136cfa5b18e340039d09",
"0x101e9324ce450ca4b8dce8c984a3d46163e65f86bc2428ce941230845070dea0",
"0x8c9b18f9a3fe6ef8a9b1a01124416f3b1e5e6fd20ff498c23ffa582bd453434d",
"0x464cd526bc95a4075548c6373498a805d7a701f10617a8278b73041f638cc3e8",
"0x10b17c0580560ef9f213fb6841ceb6c6e8f5ce1fd87f43b34b5f0e43e5a063db",
"0x305d1fcbd346bfac26b059f77c185ecc7fbecaa44e2d5cbf5d9935df4c659959",
"0x3200b583e7183fa967ecf1ec529f1df1d38670a1e95ca3a4197a1512beb8e6c0",
"0x576dee3f1f464208d30eabed086b60ea2ea2688acc50cbc479388662d2b9e771",
"0x2cc70063891717b462cf75340131c745fabc76f64b12951adccff11176ed917b",
"0x23cb9368451243337a734acab239cb125da5757f6b1b00ca80f2afdcafca7ed8"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

