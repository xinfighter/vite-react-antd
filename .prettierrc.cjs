module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: false,
  jsxBracketSameLine: false,
  trailingComma: "none",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  // htmlWhitespaceSensitivity: "ignore",
  endOfLine: "auto",
  singleAttributePerLine: false,
  proseWrap: "never",

  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^vite',
    '^react',
    '^antd',
    '^@',
    '^[./]',

  ],
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true
}
