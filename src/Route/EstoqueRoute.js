module.exports = function(app){

const controller = app.Controller.EstoqueController;

app.get('/produto/getAll', controller.getAll);
app.get('/produto/getById/:id', controller.getById);
app.get('/produto/getByProduto/:codigo', controller.getByProduto);
app.post('/estoque/insert', controller.insert);
// app.put('/produto/update/:_id', controller.update);
app.put('/estoque/updateReserva/:_id', controller.updateReservado);

}
