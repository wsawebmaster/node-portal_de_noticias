# Curso de NodeJS (Portal de Notícias)


✔ Ganhando produtividade com o NPM,  Express, EJS e Nodemon

✔ Modulando nosso projeto com CommonJS

✔ Conectando ao banco de dados MySQL

✔ Models e ganhando produtividade com Consign (sucessor do Express-Load)

✔ Recebendo dados de formulários com Body-parser

✔ Implementando classes em JavaScript

✔ Ganhando produtividade com o Express Validator

✔ Implementando controllers e entendendo o designer pattern MVC

✔ Utilizando recursos estáticos como imagens, arquivos de estilo e scripts


<strong>Express: </strong>Framework

<strong>EJS: </strong>Módulo que permite escrever códigos html dinâmicos, deixando em uma estrutura a parte para que possa renderizar.

## NodeJS
Necessário baixar e instalar o NodeJS
## Nodemon
`npm install -g nodemon` - Instala o Nodemon

## Alguns Comandos
`npm install mysql --save` - Instala o MySQL

Faça o download do MySQL Server do site MySQL e instale o mesmo
  - Server only
  - Password root: 1234
  - Desmarque: Start the MySQL Server at System Startup

Execute o MySQL abrindo Executar: `services.msc`
  - Botão direito sobre o MySQL, iniciar
  - Vá no diretório `C:\Program Files\MySQL\MySQL Server 8.0\bin` e acesse via prompt de comando
  `mysql -u root -p` para solicitar password e digite a senha
  `show databases;` exibe bancos existentes
  `create database portal_noticias;` cria novo banco
  `use portal_noticias;` acessa o banco

        create table noticias(
          id_noticia int not null primary key auto_increment,
          titulo varchar(100),
          noticia text,
          data_criacao timestamp default current_timestamp);

  `show tables;` Exibe tabelas existentes

  `select * from noticias;` seleciona a tabela
  tecle enter e digite o comando abaixo

  `insert into noticias(titulo, noticia)values('titulo da noticia', 'conteudo da noticia');` Insere as duas colunas ao título, pois as demais serão adicionadas automaticamente

  `select * from noticias;` exibe registros da tabela

  ### Criando a conexão com o MySQL e recuperando dados

  `noticias.js`

    module.exports = function(app) {

      app.get("/noticias", function (req, res) {

          var mysql = require('mysql');

          var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'portal_noticias'
          });

          connection.query('select * from noticias', function (error, result) {
            res.send(result);
          });
          // res.render('noticias/noticias');
      });
    };

Obs.: Caso não consiga estabelecer a conexão tente efetuar um reset na senha utilizando os comandos abaixo após acessar o MySQL via prompt

`ALTER USER 'root'@'localhost' IDENTIFIED BY '1234';`

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';`

Adicionando mais informação a tabela noticias
No MySQL via prompt execute os comandos abaixo:

`use portal_noticias` seleciona o banco

`insert into noticias(titulo, noticia) values('outra noticia', 'conteudo da outra noticia');`


`select * from noticias;` exibe os registros da tabela

## Instalar Consign
`npm install consign --save`
Consign - Módulo que inclui automaticamente as rotas, design patterns MVC... na aplicação

Para realizar testes com banco é necessário

Iniciar o serviço em `services.msc`

Acessar o serviço em `C:\Program Files\MySQL\MySQL Server 8.0\bin` via prompt de comando

`mysql -u root -p` 1234

`http://localhost:3000/noticias`

## Instalar o módulo Body Parser
`npm install body-parser --save`

Antes de realizar testes de inserção de dados é necessário

`use portal_noticias;`

`select * from noticias;`

## Instalar o módulo Express Validator
`npm install --save express-validator@3.2.0 -E`

`alter table noticias add column resumo varchar(100);`

`alter table noticias add column autor varchar(30);`

`alter table noticias add column data_noticia date;`

<hr>
Para iniciar execução do projeto você precisa seguir os passos anteriores executando o comando

`nodemon app`

<strong>Obs.:</strong> Projeto desenvolvido utilizando banco de dados local.
