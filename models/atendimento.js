const moment = require('moment');
const connection = require('../infra/connection');

class Atendimento {
    adicionarAtendimento(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data =  moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

        const isDataValida = moment(data).isSameOrAfter(dataCriacao);
        const isClienteValido = atendimento.cliente.length >= 5;

        //Cria o objeto de validações de erro;
        const validacoes = [
            {
                nome: 'data',
                valido: isDataValida,
                mensagem: 'Data deve ser maior ou igual a data atual.'
            },
            {
                nome: 'Cliente',
                valido: isClienteValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres.'
            }
        ];

        //Filtra o array por erros;
        const erros = validacoes.filter(campo => !campo.valido);
        const hasErros = erros.length;

        if (hasErros){
            res.status(400).json(erros);
        } else {
            const atendimentoDatado = {...atendimento, dataCriacao, data}
            const sql = 'INSERT INTO atendimentos SET ?';
            connection.query(sql, atendimentoDatado, (err, result) => {
                if (err) {
                    res.status(400).json(err);
                } else {
                    res.status(201).json(result);
                }
            });
        }
    }
}

module.exports = new Atendimento;
