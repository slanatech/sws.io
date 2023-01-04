const { fetchDocs } = require('./fetchDocs')

module.exports = {
  title: 'CX',
  description: 'AI Powered Continuous CX Testing on a Massive Scale',
  srcDir: '.',
  themeConfig: {
    repo: 'https://github.com/',
    pages: fetchDocs(),
    collections: {
      'Getting started': ['installation', 'upgrading-to-v2', 'using-with-preprocessors', 'optimizing-for-production', 'browser-support', 'intellisense'],
      'Core Concepts': ['responsive-design', 'dark-mode', 'adding-base-styles', 'extracting-components', 'adding-new-utilities'],
    },
  },
}
