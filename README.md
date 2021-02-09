# NodeJS TODO

Autor: Wallisson Rony de M. N.

Este é um projeto feito em NodeJS com o intuito de prover um CRUD de atividades (TODO).

## Como Utilizar

Para executar esse projeto você vai precisar um gerenciador de pacotes de aplicações Node instalado, como o `npm` ou `yarn`. Esse projeto foi desenvolvido utilizando o `yarn` na versão 1.22.5, logo, recomendo que utilize o mesmo para evitar erros ou, caso tenha conhecimentos sobre versionamento e queira utilizar o `npm`, verifique a compatibilidade e utilize. Para executar o projeto de forma local, após baixá-lo, você precisa seguir os passos abaixo estando dentro da pasta:

- Crie o arquivo .env seguindo a estrutura do arquivo .env.example para que a conexão com o banco de dados suceda normalmente.
- Instale os pacotes do projeto com o comando `npm intall` ou `yarn`;

Agora o projeto está pronto para ser executado :).

## Pacotes Presentes neste Repositório.

 - ts-node
 - ts-node-dev
 - express
 - cors
 - crypto
 - dotenv-safe
 - knex *
 - pg
 - jsonwebtoken
 - typescript

*: pacotes que têm um * na frente indicam versionamento específico por causarem problemas em versões mais recentes ou informações mais detalhadas a serem explicadas a seguir.

knex *: por padrão, nesse projeto, foi inserida a configuração de client do knex para utilizar PostgreSQL. Então, basta inserir as credenciais apresentadas no arquivo 'knexfile.ts' em um arquivo .env.

## Scripts Prontos:

 - 'start': o script start deverá ser utilizado quando o projeto estiver em produção, assim, será utilizado o pacote ts-node para execução dos arquivos Typescript.

 - 'dev': deverá ser utilizado quando o projeto estiver em desenvolvimento. Isso fará com que o pacote ts-node-dev seja executado ao invés do ts-node, deixando a experiência de testes mais tranquila através da constante insistência em deixar o servidor online, "respawnando" a instância da aplicação serve que ouver alguma alteração e também ignorando arquivos desnecessários de verificação, como a pasta node_modules.

 - 'knex:migrate': deverá ser utilizado quando há uma nova atualização a ser realizada no banco de dados.

 - 'knex:migrate:rollback': deverá ser utilizado quando for necessário desfazer uma atualização realizada no banco de dados.

 - 'knex:seed': deverá ser executado quando for necessário inserir 'seeds' (dados básicos) ao banco de dados, como, por exemplo, uma lista de produtos que já estarão cadastrados para primeiro funcionamento.