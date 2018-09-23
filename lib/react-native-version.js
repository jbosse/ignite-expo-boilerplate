const { pathOr, is } = require('ramda')

// the default React Native version for this boilerplate
// updated to version 0.55.4, since that's what is used by Expo SDK v30
// https://blog.expo.io/expo-sdk-30-0-0-is-now-available-e64d8b1db2a7
const REACT_NATIVE_VERSION = '0.55.4'

// where the version lives under gluegun
const pathToVersion = ['parameters', 'options', 'react-native-version']

// accepts the context and returns back the version
const getVersionFromContext = pathOr(REACT_NATIVE_VERSION, pathToVersion)

/**
 * Gets the React Native version to use.
 *
 * Attempts to read it from the command line, and if not there, falls back
 * to the version we want for this boilerplate.  For example:
 *
 *   $ ignite new Custom --react-native-version 0.44.1
 *
 * @param {*} context - The gluegun context.
 */
const getReactNativeVersion = (context = {}) => {
  const version = getVersionFromContext(context)
  return is(String, version) ? version : REACT_NATIVE_VERSION
}

module.exports = {
  REACT_NATIVE_VERSION,
  getReactNativeVersion
}
