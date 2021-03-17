const customExpress = require('./config/customExpress');
const connection = require('./infra/conection');

connection.connect((err) => {
    if (err) {
        console.error('Error connection: ' + err.stack);
        return;
    }
    
    console.log('DB connection succeeded: ' + connection.threadId);

    const app = customExpress();
    app.listen(3000, () => console.log('listen http://localhost:' + 3000));
});


