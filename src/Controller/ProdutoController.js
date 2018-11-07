module.exports = function(app){

    var controller = {};
    var produto = app.Model.ProdutoModel;

    controller.getProdutos = function(req, res, next){ 
        produto.find({}, (err, data) => {
            if (err) {
                return  res.status(500).json({ error: true, data: err });
            }
            return  res.status(201).json({ error: false, data: data });
        });
    }

    controller.insert = (req, res, next) => {
        var body = req.body;
        produto.create(body, (err, data) => {
            if (err) {
                return  res.status(500).json({ error: true, data: err });
            }
            return  res.status(201).json({ error: false, data: data });
        });
    };

    return controller;
}