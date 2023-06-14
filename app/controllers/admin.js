module.exports.formulario_inclusao_noticia = function(application, req, res) {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = function(application, req, res) {
    var noticia = req.body;

    // console.log(noticia);
    req.assert("titulo", "Título deve ser preenchido").notEmpty();
    req.assert("resumo", "Resumo deve ser preenchido").notEmpty();
    req.assert("resumo", "Resumo deve ter de 10 a 100 caracteres").len(10, 100);
    req.assert("autor", "Autor deve ser preenchido").notEmpty();
    req.assert("data_noticia", "Data deve ser preenchida").notEmpty().isDate({ format: "YYYY-MM-DD" });
    req.assert("noticia", "Noticia deve ser preenchida").notEmpty();

    var erros = req.validationErrors();
    // console.log(erros);

    if (erros) {
      res.render("admin/form_add_noticia", {
        validacao: erros,
        noticia: noticia,
      });
      return;
    }

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function (error, result) {
      // res.render("noticias/noticias", {noticias: result});
      res.redirect("/noticias");
    });

}
