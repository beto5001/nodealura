const moment = require('moment');
const connection = require('../infra/connection');

class Atendimento {
    adicionarAtendimento(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data =  moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO atendimentos SET ?';

        connection.query(sql, atendimentoDatado, (err, result) => {
            
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
        });
    }
}

module.exports = new Atendimento;
