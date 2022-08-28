require('dotenv').config()
const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORTSERV|| 5000;

console.clear()
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/Lolp', function (err) {err});
//contenido estático
app.use(express.static('public'))

app.get('/', (rq, res)=>{
    res.render('home', {
        autor: 'Chuck Schuldiner',
        título:'Servidor web'
    })
})
app.get('/generic', (rq, res)=>{
    res.render('generic', {
        autor: 'Chuck Schuldiner',
        título:'Servidor genérico'
    })
})

//app.get('/generic', (req, res)=>{
//    res.sendFile('/public/generic.html')
//})
//app.get('/elements', (req, res)=>{
//    res.sendFile('/public/elements.html')
//})
//
//app.get('*', (req, res)=>{
//    res.sendFile(__dirname +'/public/404.html')
//})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}...`);
    });
  //Naguara
 