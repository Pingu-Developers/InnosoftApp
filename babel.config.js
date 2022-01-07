module.exports = function(api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    plugins: [["inline-dotenv",{ path: '.env', systemVar: 'overwrite' }], 'react-native-reanimated/plugin',]
  };
};
