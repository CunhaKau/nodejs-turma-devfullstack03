const express = require ('express');

//express aplicativo - configurando as funções
const app = express();
const path = require('path');
app.use(express.static((__dirname, 'public')));

app.set('view engine', 'ejs');




//acessando a rota
app.get('/', (req, res) => {
//res.sendFile('./views/index.html', { root: __dirname});

//passagem de parâmetro para o body
const blogs = [
{titulo: 'Charmander', conteudo: 'A ponta do seu rabo está constamente em chamas e se for apagada pode resultar em sua morte.'},
{titulo: 'Squirtle', conteudo: 'Seu casco reduz a resistência contra a àgua fazendo com que ele nade mais rápido.'},
{titulo: 'Bulbasaur', conteudo:'Ao evoluir o bulbo começa a desabrochar até se tornar uma grande flor na evolução final.'},
];

//passando parâmetro head
res.render('index', { titulo: 'Home', blogs });
});

//nova rota
app.get('/sobre', (req, res) => {
    //res.sendFile('./views/sobre.html', { root: __dirname});
    res.render('sobre', { titulo: 'Sobre'});
});

//redirecionamento de página
app.get('/sobrenos', (req, res) => {
    res.redirect('/sobre');
});

app.get('/blog/criar', (req, res) =>{
res.render('criar', { titulo: 'Criar novo Blog'});
});


app.use((req, res) =>{
//res.status(400).sendFile('./views/404.html', { root: __dirname});
res.status(404).render('404');
});

app.listen(3009);