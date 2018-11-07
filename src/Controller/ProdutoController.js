module.exports = function(app){

    var controller = {};
    var produto = app.Model.ProdutoModel;

    controller.getProdutos = function(req, res, next){ console.log("teste"); return res.send("teste")}

    return controller;
}