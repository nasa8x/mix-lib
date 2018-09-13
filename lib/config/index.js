module.exports = [
    {

        name: 'GeekCash',
        alias: 'GEEK',
        pubkeyhash: 0x26,
        privatekey: 0xcc,
        scripthash: 0x10,
        xpubkey: 0x488b21e,    // 'xpub' (Bitcoin Default)
        xprivkey: 0x488ade4,   // 'xprv' (Bitcoin Default)
        networkMagic: 0xbf0c6bbd,
        port: 6888,
        dnsSeeds: [
            'ns01.geekcash.org',
            'ns02.geekcash.org',
            'ns03.geekcash.org',
            'ns04.geekcash.org',
            'ns05.geekcash.org'
        ]

    },
    {


        name: 'Dash',
        alias: 'DASH',
        pubkeyhash: 0x4c,
        privatekey: 0xcc,
        scripthash: 0x10,
        xpubkey: 0x488b21e,    // 'xpub' (Bitcoin Default)
        xprivkey: 0x488ade4,   // 'xprv' (Bitcoin Default)
        networkMagic: 0xbf0c6bbd,
        port: 9999,
        dnsSeeds: [
            'dnsseed.darkcoin.io',
            'dnsseed.dashdot.io',
            'dnsseed.masternode.io',
            'dnsseed.dashpay.io'
        ]
    },

    {
        name: 'Bitcoin',
        alias: 'BTC',
        pubkeyhash: 0x00,
        privatekey: 0x80,
        scripthash: 0x05,
        xpubkey: 0x0488b21e,
        xprivkey: 0x0488ade4,
        networkMagic: 0xf9beb4d9,
        port: 8333,
        dnsSeeds: [
            'seed.bitcoin.sipa.be',
            'dnsseed.bluematt.me',
            'dnsseed.bitcoin.dashjr.org',
            'seed.bitcoinstats.com',
            'seed.bitnodes.io',
            'bitseed.xf2.org'
        ]
    },

    {
        name: 'PIVX',
        alias: 'PIVX',
        pubkeyhash: 0x1e,
        privatekey: 0xd4,
        xpubkey: 0x0488b21e,
        xprivkey: 0x0488ade4,
        port: 51472,

    },

    {
        name: 'Litecoin',
        alias: 'LTC',
        pubkeyhash: 0x30,
        privatekey: 0xb0,
        xpubkey: 0x0488b21e,
        xprivkey: 0x0488ade4,
        port: 9333,

    },

    {
        name: 'ColossusXT',
        alias: 'COLX',
        pubkeyhash: 0x1e,
        privatekey: 0xd4,
        xpubkey: 0x0488b21e,
        xprivkey: 0x0488ade4,
        port: 51572,

    },
    {
        name: 'Aegeus',
        alias: 'AEG',
        pubkeyhash: 0x17,
        privatekey: 0x97,
        xpubkey: 0x0488b21e,
        xprivkey: 0x0488ade4,
        port: 9292,
    },
    {
        name: 'MetaCash',
        alias: 'META',
        pubkeyhash: 0x32,
        privatekey: 0xb2,
        xpubkey: 0x0488b21e,
        xprivkey: 0x0488ade4,
        port: 40293,
    },

    {
        name: 'LightPayCoin',
        alias: 'LPC',
        pubkeyhash: 0x31,
        privatekey: 0xb3,
        xpubkey: 0x0488b21e,
        xprivkey: 0x0488ade4,
        port: 39797,
    },
    {
        name: 'Northern',
        alias: 'NORT',
        pubkeyhash: 0x33,
        privatekey: 0x2e,
        xpubkey: 0x0488b21e,
        xprivkey: 0x0488ade4,
        port: 6942,
    },
    {
        name: 'DeepOnion',
        alias: 'ONION',
        pubkeyhash: 0x1f,
        privatekey: 0x9f,
        xpubkey: 0x0488b21e,
        xprivkey: 0x0488ade4,
        
    },
    {
        name: 'DigiByte',
        alias: 'DGB',
        pubkeyhash: 0x1e,
        privatekey: 0x9e,
        xpubkey: 0x0488b21e,
        xprivkey: 0x0488ade4,        
    },

    {
        name: 'Zcash',
        alias: 'ZEC',
        pubkeyhash: 0x1c,
        privatekey: 0x80,
        xpubkey: 0x0488b21e,
        xprivkey: 0x0488ade4,   
        port:8233
    },


    

    
    
    // {
    //     name: 'MMOCoin',
    //     alias: 'MMO',
    //     pubkeyhash: 0x32,
    //     privatekey: 0xb2,
    //     xpubkey: 0x0488b21e,
    //     xprivkey: 0x0488ade4,
    //     port: 40293,
    // },

    

    

]