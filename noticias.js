var http = require("http");

var server = http.createServer( function(req, res){

  var categoria = req.url;

  if(categoria == '/tecnologia'){
    res.end(`
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Portal de Tecnologia</title>
    </head>
    <body>
      <h1>Portal de Tecnologia</h1>

    </body>
    </html>
  `);
  } else if (categoria == '/moda'){
    res.end(`
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Portal de Moda</title>
    </head>
    <body>
      <h1>Portal de Moda</h1>

    </body>
    </html>
  `);
  } else if (categoria == '/beleza'){
    res.end(`
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Portal de Beleza</title>
    </head>
    <body>
      <h1>Portal de Beleza</h1>

    </body>
    </html>
  `);
  } else {
    res.end(`
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Portal de Notícias</title>
    </head>
    <body>
      <h1>Portal de Notícias</h1>

    </body>
    </html>
  `);
  }

}).listen(3000);
