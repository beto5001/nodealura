const connection = require('../infra/connection')

class Atendimento {

    adicionarAtendimento(atendimento) {
        const sql = 'INSERT INTO atendimentos SET ?'

        connection.query(sql, atendimento, (err, result) => {
            
            if (err) {
                console.error(err);
            } else {
                console.log('Result', result);
            }
        });
    }
}

module.exports = new Atendimento;
