/* eslint-disable no-process-env */

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: '3',
      },
    ],
  ],
};
