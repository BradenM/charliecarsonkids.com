module.exports = {
  client: {
    name: 'charliecarsonkids-saleor',
    includes: ['app/**/*.js', 'app/**/*.jsx', 'app/**/*.graphql'],
    service: {
      name: 'charliecarson-kids-saleor',
      url: 'https://api.charliecarsonkids.com/graphql/',
    },
  },
};
