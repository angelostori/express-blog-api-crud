const express = require('express')
const app = express()
const PORT = 3000
const postsRouter = require('./routes/posts')

// server entry point
app.get('/', (req, res) => {
    res.send('Welcome to my blog API server')
})

// register the static assets
app.use(express.static('public'));

// register the body parser
app.use(express.json())

app.use('/api/posts', postsRouter)

// MIDDLEWARE 404
app.use((req, res, next) => {
    res.status(404).json({
        error: true,
        message: 'Endpoint non trovato'
    });
});

// MIDDLEWARE DI ERRORE
app.use((err, req, res, next) => {
    console.error("Errore interno:", err);

    res.status(500).json({
        error: true,
        message: 'Errore interno del server'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

})