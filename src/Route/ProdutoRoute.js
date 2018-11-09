module.exports = function(app){

const controller = app.Controller.ProdutoController;

app.get('/produto/getAll', controller.getAll);
app.get('/produto/getById/:id', controller.getById);
app.get('/produto/getByCodigo/:codigo', controller.getByCodigo);
app.post('/produto/insert', controller.insert);
app.put('/produto/update/:_id', controller.update);

}
