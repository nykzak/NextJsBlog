const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {

  if(phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'vercel-admin-user',
        mongodb_password: 'L1g9cDyqz3hhkrkA',
        mongodb_clustername: '@cluster0',
      },
    };
  }

  return {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      return config;
    },
  };
};