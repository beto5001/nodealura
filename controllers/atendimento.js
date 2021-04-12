const Atendimento = require('../models/atendimento');

module.exports = app => {
    app.get('/atendimento', (req, res) => {
        Atendimento.listarAtendimentos(res);
    });

    app.get('/atendimento/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Atendimento.getAtendimentoById(id, res);
    });

    app.post('/atendimento', (req, res) => {
        console.log(req.body);
        const atendimento = req.body;

        Atendimento.adicionarAtendimento(atendimento, res);
    });

    app.patch('/atendimento/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;

        Atendimento.alterarAtendimento(id, valores, res);
    });

    app.delete('/atendimento/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Atendimento.deletarAtendimento(id, res);
    });
}
