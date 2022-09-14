var express = require('express');
const contatosController = require('../controllers/contatos');
var router = express.Router();



/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/', contatosController.listarContatos)

// GET lista contato com id
router.get('/:id',contatosController.exibir)

//POST cria novo contato
router.post('/', contatosController.criar)

//PUT atualiza contato pelo id
router.put('/:id',contatosController.atualizar)

//DELETE deleta um contato pelo id
router.delete('/:id', contatosController.remover)

module.exports = router;
