const path = require('path');

module.exports = {
    pageExtensions: ['js', 'jsx'],
    webpack(config) {
        config.resolve.alias['@'] = path.join(__dirname, 'src/app');
        return config;
    },
    experimental: {
        appDir: true,
    },
};
