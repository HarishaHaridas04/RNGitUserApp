module.exports = {
  presets: [['module:metro-react-native-babel-preset', {
    unstable_disableES6Transforms: true
  }]],
  plugins: [
    [
      'module-resolver',
      
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          "@components": "./src/components",
          "@theme": "./src/theme",
          "@screens": "./src/screens",
        }
      }
    ],
    ['module:react-native-dotenv']
  ]
};
