# Boas-vindas ao repositório do Projeto Store Manager!


# API de Gerenciamento de Vendas

Esta é a documentação do projeto Store Manager. API de gerenciamento de vendas, desenvolvida utilizando a arquitetura MSC (model-service-controller).

## Arquitetura MSC

A arquitetura MSC é uma abordagem comum para desenvolver aplicativos web modernos. Ela divide a aplicação em três camadas principais:

1. Model (Modelo): Lida com a lógica de negócio e a interação com o banco de dados.
2. Service (Serviço): Implementa a lógica de negócio da aplicação, fazendo uso dos modelos.
3. Controller (Controlador): Lida com as requisições HTTP, invoca os serviços apropriados e retorna as respostas adequadas.

## Tecnologias Utilizadas

- Node.js: Ambiente de execução JavaScript.
- Express.js: Framework web para criação de APIs RESTful.
- MySQL: Banco de dados relacional para armazenamento de dados.
- Sequelize: ORM (Object-Relational Mapping) para interagir com o banco de dados MySQL.
- Docker Compose: Ferramenta para definir e executar aplicativos multi-contêiner com Docker.

## Funcionalidades da API

A API permite realizar as seguintes operações:

- Criar um novo produto
- Visualizar um produto existente
- Atualizar um produto existente
- Deletar um produto
- Criar uma nova venda
- Visualizar uma venda existente
- Atualizar uma venda existente
- Deletar uma venda

## Rotas da API

A seguir estão as rotas disponíveis na API juntamente com os métodos HTTP correspondentes:

### Produtos

- `GET /products`: Retorna todos os produtos cadastrados.
- `GET /products/:id`: Retorna um produto específico com base no ID fornecido.
- `POST /products`: Cria um novo produto.
- `PUT /products/:id`: Atualiza um produto existente com base no ID fornecido.
- `DELETE /products/:id`: Deleta um produto existente com base no ID fornecido.

### Vendas

- `GET /sales`: Retorna todas as vendas cadastradas.
- `GET /sales/:id`: Retorna uma venda específica com base no ID fornecido.
- `POST /sales`: Cria uma nova venda.
- `PUT /sales/:id`: Atualiza uma venda existente com base no ID fornecido.
- `DELETE /sales/:id`: Deleta uma venda existente com base no ID fornecido.

## Configuração do Banco de Dados

A API utiliza o banco de dados MySQL para armazenar os dados. Certifique-se de ter o MySQL instalado em seu ambiente de desenvolvimento.

## Executando a API

Siga as etapas abaixo para executar a API:

1. Clone este repositório para o seu ambiente de desenvolvimento local:

```bash
git clone https://github.com/matheusPrado007/project-store-manager
```
2. Abra o terminal e navegue até o diretório raiz do projeto.

3. Execute o comando ```npm install``` para instalar as dependências do projeto.

4. Execute o comando ```npm start``` para iniciar

## Testes Unitários

A API foi testada com testes unitários para garantir a qualidade e a integridade do código. Os testes foram desenvolvidos utilizando uma estrutura de teste adequada, como o Jest ou o Mocha, e cobrem as principais funcionalidades da API.

Ao contribuir para o projeto ou realizar modificações no código, é recomendado executar os testes unitários para verificar se as alterações não afetaram o comportamento esperado da API.

Para executar os testes unitários, utilize o seguinte comando: ```npm test```. Certifique-se de ter dado ```npm install```antes



