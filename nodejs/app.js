const express = require ('express');

//express aplicativo - configurando as funções
const app = express();

app.listen(3001);

//acessando a rota
app.get('/', (req, res) => {
res.sendFile('./views/index.html', { root: __dirname});
});

app.get('/sobre', (req, res) => {
    res.sendFile('./views/sobre.html', { root: __dirname});
});

