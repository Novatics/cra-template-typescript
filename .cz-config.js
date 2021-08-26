module.exports = {
  types: [
    {
      value: 'feat',
      name: 'A new feature'
    },
    {
      value: 'fix',
      name: 'A bug fix'
    },
    {
      value: 'docs',
      name: 'Documentation only changes'
    },
    {
      value: 'style',
      name: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
    },
    {
      value: 'refactor',
      name: 'A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: 'perf',
      name: 'A code change that improves performance'
    },
    {
      value: 'test',
      name: 'Adding missing tests'
    },
    {
      value: 'chore',
      name: 'Changes to the build process or auxiliary tools and libraries such as documentation generation'
    },
    {
      value: 'revert',
      name: 'Revert to a commit'
    },
    {
      value: 'WIP',
      name: 'Work in progress'
    }
  ],
  // Neste local adicionar os contextos da aplicação: Cadastro, Usuário e etc..
  scopes: [
    { name: 'project' },
    { name: 'login' },
    { name: 'register' },
    { name: 'auth' },
    { name: 'services' }
  ],
  subjectLimit: 100,
  allowCustomScopes: true,
  subjectLimit: 100,
  maxHeaderWidth: '72'
};
