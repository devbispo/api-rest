const contatos = [
    {
        id: 1,
        name: "josé",
        fone: "8888-8888"
    },
    {
        id: 2,
        name: "maria",
        fone: "9999-8888"
    }
]

function listarContatos(req, res, next) {
    res.json(contatos)
}

function exibir(req, res, next) {
    const contatoLocalizado = contatos.find(contato => contato.id === Number(req.params.id));
    if(!contatoLocalizado){
        return res.status(404).json({ message: "contato não encontrado!"})
    }
    res.json(contatoLocalizado)
}

function criar(req, res, next) {
    const novoContato = {
        id:contatos.length +1,
        nome: req.body.name,
        fone: req.body.fone
    }
    contatos.push(novoContato);
    res.status(201).json(novoContato);
}

function atualizar(req, res, next) {
    const contatoLocalizado = contatos.find(contato => contato.id === req.body.id);
    if(!contatoLocalizado){
        return res.status(404).json({message: "contato não encontrado!"})
    }
    contatoLocalizado.name = req.body.name;
    contatoLocalizado.fone = req.body.fone;
    res.status(204).end();
}

function remover(req, res, next) {
    const posicaoContato = contatos.findIndex(contato =>
        contato.id === Number(req.params.id));
        if(posicaoContato < 0) {
            return res.status(404).json({message: "contato não encontrado!"})
        }
        contatos.splice(posicaoContato, 1);
        res.status(204).end();
}

module.exports = { listarContatos, exibir, criar, atualizar, remover }