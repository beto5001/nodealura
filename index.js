const customExpress = require('./config/customExpress');
const connection = require('./infra/connection');
const Tabelas = require('./infra/tabelas');

connection.connect((err) => {
    if (err) {
        console.error('Error connection: ' + err.stack);
        return;
    }
    
    Tabelas.init(connection);
    console.log('DB connection succeeded: ' + connection.threadId);

    const app = customExpress();
    app.listen(3000, () => console.log('listen http://localhost:' + 3000));
});
