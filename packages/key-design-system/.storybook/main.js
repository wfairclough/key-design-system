const rootMain = require('../../../.storybook/main');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(
  ...['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)']
);

const addons = ['@storybook/addon-controls'];
rootMain.addons = Array.from(new Set([...rootMain.addons, ...addons]));

rootMain.staticDirs = [
  ...(rootMain.staticDirs ?? []),
  '../../../dist/packages/key-design-system/dist/',
];

module.exports = rootMain;
