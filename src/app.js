const express  = require('express')
const app = express() // criar instancia


//rota padrão
app.get('/', (req, res) => {
    res.send('ola mundo3')
})

