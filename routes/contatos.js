var express = require('express');
var router = express.Router();
const contatosController = require('../controllers/contatos')



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET lista contato com id
router.get('/:id',)

router.get('/:id', contatosController.listarContatos,)

//POST cria novo contato
router.post('/', contatosController.criar)

//PUT atualiza contato pelo id
router.put('/:id',)

//DELETE deleta um contato pelo id
router.delete('/:id', contatosController.exibir)

module.exports = router;
