const Atendimento = require('../models/atendimento');

module.exports = app => {
    app.get('/atendimento', (req, res) => res.send('Rota de atendimento GET.'));

    app.post('/atendimento', (req, res) => {
        console.log(req.body);
        const atendimento = req.body;

        Atendimento.adicionarAtendimento(atendimento, res);
    });
}
