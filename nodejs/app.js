const express = require ('express');

//express aplicativo - configurando as funções
const app = express();
app.set('view engine', 'ejs');

app.listen(3006);

//acessando a rota
app.get('/', (req, res) => {
//res.sendFile('./views/index.html', { root: __dirname});
res.render('index');
});

//nova rota
app.get('/sobre', (req, res) => {
    //res.sendFile('./views/sobre.html', { root: __dirname});
    res.render('sobre');
});

//redirecionamento de página
app.get('/sobrenos', (req, res) => {
    res.redirect('/sobre');
});

app.use((req, res) =>{
//res.status(400).sendFile('./views/404.html', { root: __dirname});
res.status(404).render('404');
});

