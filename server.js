/*
Bonus
Provare a restituire un singolo post dalla rotta show, sempre in formato json
*/
const express = require('express')
const app = express()
const PORT = 3000
const postsRouter = require('./routes/posts')

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

})

// server entry point
app.get('/', (req, res) => {
    res.send('Welcome to my blog API server')
})

app.use('/api/posts', postsRouter)