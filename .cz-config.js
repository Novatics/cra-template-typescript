module.exports = {
  types: [
    { value: 'feat', name: 'feat: A new feature' },
    { value: 'fix', name: 'fix: A bug fix' },
    { value: 'docs', name: 'docs: Documentation only changes' },
    {
      value: 'style',
      name: 'style: changes that do not affect the meaning of the code (blank space, formatting, missing semicolon, etc)'
    },
    {
      value: 'refactor',
      name: 'refactor: a code change that does not fix a bug or add a feature'
    },
    { value: 'test', name: 'test: Adding missing tests' },
    {
      value: 'chore',
      name: 'chore: Changes in the build process or auxiliary tools and libraries, such as documentation generation'
    },
    { value: 'WIP', name: 'WIP: Work in progress' }
  ],
  scopes: [
    { name: 'projeto' },
    { name: 'integração' },
    { name: 'rotas' },
    { name: 'páginas' },
    { name: 'container' },
    { name: 'components' },
    { name: 'common' },
    { name: 'assets' }
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // override the messages, defaults are as follows
  messages: {
    type: 'Selecione o tipo de mudança que você está commitando:',
    scope: '\nSelecione o SCOPE do commit:',
    customScope: 'Selecione o SCOPE do commit:',
    subject: 'Escreva uma descrição breve e IMPERATIVA da mudança:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'Existe BREAKING CHANGES (optional):\n',
    footer: 'ISSUES resolvidas (optional). E.x.: #31, #34:\n',
    confirmCommit: 'Confirmar commit acima?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 100,
  maxHeaderWidth: '72'
};
