<div align="center">
  <h1>🚀 cra-template-typescript 🚀</h1>
  Um modelo TypeScript básico para Create React App.
</div>

## 💻 Pré-requisitos

- Você deve ter **[Node.js](https://nodejs.org/)** instalado em uma versão igual ou superior **`v12.21`**

## ✨ Instalação e execução

```sh
https://github.com/Novatics/cra-template-typescript.git
```

Na raiz do projeto são fornecidos alguns comandos integrados:

1. Copiar o conteúdo do `.env.staging` para o arquivo padrão `.env.local`

```sh
cp .env.staging .env.local
```

2. Instalar as dependências

```sh
yarn install
```

3. Executar o projeto

```sh
yarn start
```

O projeto deve executar em modo de desenvolvimento. Abra http://localhost:3000 para visualizá-lo no navegador.

## 🛠 Fluxo de trabalho de desenvolvimento

### Linting

Um linter é uma ferramenta que verifica seu código para

- problemas que o farão quebrar quando for executado, ou
- estilo de código que viola um determinado conjunto de regras que o projeto está seguindo.

Serve como uma primeira linha de defesa contra bugs na produção. Seu projeto será criado para usar uma versão do popular linter [ESLint](https://eslint.org). Você pode aplicar seu código e aplicar correções automáticas, executando o `yarn lint -- --fix`.

### Testes

Os testes são ótimos. Os testes são a segunda linha de defesa contra bugs que acabam em produção. Ao cobrir sua aplicação em testes unitários e de integração, você pode ter certeza de que não quebrou nada quando, por exemplo, enviou o código refatorado para a produção. Seu novo projeto React vem com testes incorporados. Ao executar o `yarn test` você iniciará o test runner, [Jest](https://jestjs.io/en/). Ao adicionar testes ou fazer alterações em seu código, a Jest executará novamente os testes e lhe mostrará os resultados. O aplicativo virá com a `react-testing-library` configurada para escrever testes UI para seus componentes React. Confira o `__tests__/App.spec.jsx` para exemplo.

### Desenvolvimento

Utilizar um editor de texto de preferência, por exemplo, **Visual Studio Code**.

| Comandos     | Descrição                                         |
| ------------ | ------------------------------------------------- |
| `yarn start` | Executa a aplicação em modo de desenvolvimento    |
| `yarn build` | Executa a transpilação da aplicação para produção |

Para executar os testes por linha de comando:

| Comandos             | Descrição                                                            |
| -------------------- | -------------------------------------------------------------------- |
| `yarn test`          | Executa o inspetor de teste em um modo interativo                    |
| `yarn test:ci`       | Executa os testes da aplicação para o CI                             |
| `yarn test:coverage` | Executa os testes da aplicação com informações de cobertura de teste |

Para executar os linting:

| Comandos        | Descrição                                               |
| --------------- | ------------------------------------------------------- |
| `yarn lint`     | Executa a verificação do ESLint                         |
| `yarn prettier` | Executa a verificação do Prettier                       |
| `yarn validate` | Executa a validações dos linters e verificação de Types |

### Commit

Ao finalizar o seu trabalho e tentar executar um commit automaticamente irá rodar o script `yarn validate` e o `yarn test:coverage`,
sendo este último configurado pelo `coverageThreshold` no arquivo `package.json` e irá impedir que seu commit seja postado até que a cobertura de código
chegue ao valor mínimo configurado.
Uma vez validado, seu commit irá passar pelo `commitlint` que irá lhe guiar para que seu commit siga a estrutura definida pelo Conventional Commits de boas práticas em commits. Seu commit irá seguir a seguinte estrutura:
```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
```
Os tipos aceitos são:
chore: Atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas.
feat: São adições de novas funcionalidades ou de quaisquer outras novas implantações ao código.
fix: Essencialmente definem o tratamento de correções de bugs.
refactor: Utilizado em quaisquer mudanças que sejam executados no código, porém não alterem a funcionalidade final da tarefa impactada.
docs: Inclusão ou alteração somente de arquivos de documentação.
style: Alterações referentes a formatações na apresentação do código que não afetam o significado do código, como por exemplo: espaço em branco, formatação, ponto e vírgula ausente etc.
test: Adicionando testes ausentes ou corrigindo testes existentes nos processos de testes automatizados (TDD).
revert: Reverter uma alteração recente.
wip: Para um commit intermediário, significa trabalho em andamento.

Você não precisa escrever o tipo pois será automaticamente adicionado quando você selecionar o tipo no CLI que vai se abrir.

#### Exemplos de Commits:
- chore: add commitlint e husky
- chore(eslint): obrigar o uso de aspas duplas no jsx
- refactor: refatorando a tipagem
- feat: add axios / buscando e tratando os dados
- feat(page/home): criando o roteamentento no next


## 📂 Estrutura do repositório

Nossa estrutura de pastas se organiza dessa forma:

```

├─ public/
│  ├─ favicon.ico                   # Ícone exibido no browser
│  ├─ index.html                    # Index base do projeto
│  └─ manifest.json                 # Arquivo de metadados para o browser
├─ src/
│  ├─ assets/
│  │  └─ images/                    # Imagens do projeto
│  ├─ common/
│  │  └─ constants/                 # Constantes
│  │  └─ hooks/                     # Hooks
│  │  └─ i18n/                      # Traduções
│  │  └─ styles/                    # Estilos globais
│  │  └─ utils/                     # Funções úteis
│  ├─ components/                   # Componentes reutilizáveis
│  ├─ containers/                   # Containers reutilizáveis com implementações dos components
│  ├─ pages/                        # Páginas com implementações dos containers
│  └─ routes/                       # Rotas de acesso as páginas
│  └─ services/                     # Arquivos de comunicação com API
├─ .czrc                            # Configurações do commitizen
├─ .editorconfig                    # Configurações de CodeStyle do editor
├─ .env.staging                     # Váriaveis de ambiente
├─ .eslintrc.js                     # Preferências do ESlint
├─ .gitignore                       # Lista de arquivos para serem ignorados pelo git
├─ commitlint.config.js             # Configuração das mensagens de commit
├─ dependency.yaml                  # Configuração para a GMUD automática
├─ lint-staged.config.js            # Configuração dos comandos para tarefas automatizadas
├─ package.json                     # Metadados do projeto, fornecido para o node.js
├─ prettier.config.js               # Configurações de formatação do Prettier
├─ tsconfig.json                    # Configurações de compilação do typescript
```

## 📖 Recursos úteis

- [React JS](https://pt-br.reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [EditorConfig](https://editorconfig.org)
- [ESLint](https://eslint.org/docs/user-guide/getting-started)
- [CommitLint](https://commitlint.js.org)
- [Conventional Commits](https://www.conventionalcommits.org)

## 👍 Merge Requests

Para qualquer código novo que irá para homologação (`release/*`) ou para produção (`master`), trabalharemos através de _merge requests_. **NENHUM** código, **SEM EXCEÇÕES**, será implementado diretamente nessas branches sem ao mínimo 2 (duas) aprovações em _merge requests_.

Padrões de desenvolvimento, por mais chato que sejam, foram criados para manter a casa em ordem e tornar a comunicação sobre determinado projeto ou linguagem mais simples e objetiva, portanto, siga-os. Caso contrário, vosso MR não passarás.
