const { getDefaultConfig } = require('expo/metro-config');

const blacklist = require('metro-config/src/defaults/exclusionList');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer/expo')
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
    blacklistRE: blacklist([/react-native-localize\/node_modules\/.*/])
  };

  return config;
})();
