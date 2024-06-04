const express = require('express');
const app = express();

app.route('/').get((req, res) => {
    res.send('<h1>Aplicacao exemplo - versão 2.0</h1>');
});

app.listen(8080, () => {
    console.log('Aplicacao rodando na porta 3000');
});
