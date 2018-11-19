module.exports = function(app){

    var controller = {};
    var estoque = app.Model.EstoqueModel;

    controller.getAll = function(req, res){ 
        estoque.find({}, (err, data) => {
            if (err) {
                return  res.status(500).json({ error: true, data: err });
            }
            return  res.status(201).json({ error: false, data: data });
        });
    }

    controller.getById = function(req, res){ 
        var id = req.params.id;
        estoque.findOne({_id: id}, (err, data) => {
            if (err) {
                return  res.status(500).json({ error: true, data: err });
            }
            return  res.status(201).json({ error: false, data: data });
        });
    }

    controller.getByProduto = function(req, res){ 
        var idProduto = req.params.idProduto;
        estoque.findOne({produto: idProduto}, (err, data) => {
            if (err) {
                return  res.status(500).json({ error: true, data: err });
            }
            return  res.status(201).json({ error: false, data: data });
        });
    }

    controller.insert = (req, res) => {
        var body = req.body;
        estoque.create(body, (err, data) => {
            if (err) {
                return  res.status(500).json({ error: true, data: err });
            }
            return  res.status(201).json({ error: false, data: data });
        });
    };

    controller.update = (req, res) => {
        var body = req.body;
        var id = req.params._id;
        estoque.updateOne({_id: id}, body, (err, data) => {
            if (err) {
                return  res.status(500).json({ error: true, data: err });
            }
            return  res.status(201).json({ error: false, data: data });
        });
    };

    controller.updateNaoReservado = (req, res) => {
        let id = req.params._id;
        let body = req.body;

        estoque.updateOne({_id: id}, {$inc: {reservado: body.reservado, naoReservado: body.reservado-(body.reservado*2)}}, (err, data) => {
            if (err) {
                return  res.status(500).json({ error: true, data: err });
            }
            return  res.status(201).json({ error: false, data: data });
        });
    };

    controller.updateReservado = (req, res) => {
        let id = req.params._id;
        let body = req.body;
        let corpo;
        if(body.aprovado == true){
            corpo = {$inc: {reservado: body.reservado}};
        }else{
            corpo = {$inc: {reservado: body.reservado-(body.reservado*2), naoReservado: body.reservado }};
        }

        estoque.updateOne({_id: id}, corpo, (err, data) => {
            if (err) {
                return  res.status(500).json({ error: true, data: err });
            }
            return  res.status(201).json({ error: false, data: data });
        });
    };

    return controller;
}