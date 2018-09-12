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
      }



]