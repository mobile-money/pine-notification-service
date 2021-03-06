const config = {
  api: {
    version: 'v1',
    port: 50427,
    rateLimit: {
      burst: 5,
      rate: 1,
      ip: true, // Set to true if directly exposed to the internet.
      xff: false, // Set to true if behind a reverse proxy or similar.
      maxKeys: 100000
    }
  },
  apn: {
    production: false,
    bundleId: 'se.blockfirm.Pine',
    token: {
      key: '', // Path to .p8 key file.
      keyId: '',
      teamId: ''
    },
    notifications: {
      newPayment: {
        message: 'You just received a new payment!'
      },
      contactRequest: {
        title: '${address}',
        message: 'wants to add you as a contact'
      },
      contactRequestAccepted: {
        title: '${address}',
        message: 'accepted your contact request'
      }
    }
  }
};

export default config;
