create database portal_noticias;
use portal_noticias;
	create table noticias(
	  id_noticia int not null primary key auto_increment,
	  titulo varchar(100),
	  noticia text,
	  data_criacao timestamp default current_timestamp);
select * from noticias;
	insert into noticias(titulo, noticia)values('titulo da noticia', 'conteudo da noticia');
select * from noticias;
	insert into noticias(titulo, noticia) values('outra noticia', 'conteudo da outra noticia');
    insert into noticias(titulo, noticia) values('Título da noticia', 'Aplicando Design Patterns');

use portal_noticias;
	alter table noticias add column resumo varchar(100);
	alter table noticias add column autor varchar(30);
	alter table noticias add column data_noticia date;