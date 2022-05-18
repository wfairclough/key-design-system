// Husky Config

module.exports = {
  hooks: {
    'pre-commit': ['npm run hooks:pre-commit', 'pretty-quick --staged'].join(
      ' && '
    ),
  },
};
