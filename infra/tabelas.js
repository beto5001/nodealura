const consign = require("consign/lib/consign");

class Tabelas {
    init(connection) {
       this.connection = connection; 

       this.criarAtendimentos();
    }

    criarAtendimentos() {
        const sql = `CREATE TABLE IF NOT EXISTS Atendiementos (
                        id int NOT NULL AUTO_INCREMENT, 
                        client varchar(50) NOT NULL, 
                        pet varchar(20), 
                        servico varchar(20) NOT NULL,
                        status varchar(20) NOT NULL,
                        observacoes text, 
                        PRIMARY KEY(id)
                    )`

        this.connection.query(sql, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Tabela Atendimentos criada.');
            }
        });
    }
}

module.exports = new Tabelas;