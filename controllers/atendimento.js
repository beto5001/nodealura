module.exports = app => {
    app.get('/atendimento', (req, res) => res.send('Rota de atendimento GET.'));

    app.post('/atendimento', (req, res) => {
        console.log(req.body);
        
        res.send('Rota de antendimento POST.');
    });
}
