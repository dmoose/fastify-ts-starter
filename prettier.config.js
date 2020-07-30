// prettier config
module.exports = {
  printWidth: 100,
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  overrides: [
    {
      files: '.editorconfig',
      options: { parser: 'yaml' },
    },
    {
      files: 'LICENSE',
      options: { parser: 'markdown' },
    },
  ],
}
