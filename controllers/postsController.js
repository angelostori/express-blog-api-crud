const posts = require('../data/posts.js')

const index = (req, res) => {
    // Inizialmente, il menu filtrato corrisponde a quello originale
    let filteredPosts = posts
    // Se la richiesta contiene un filtro, allora filtriamo la lista dei post
    if (req.query.ingredient) {
        filteredPosts = menubar.filter(post => post.tag.includes(req.query.tag))
    }
    // restituiamo la variabile filteredPost
    // potrebbe essere stata filtrata o contenere la lista originale
    res.json(filteredPosts)
    // URL test: http://localhost:3000/api/posts?tag=dolci
}

const show = (req, res) => {
    const id = Number(req.params.id)
    const thisPost = posts.find(post => post.id === id)
    // res.send(`Show the post with id: ${req.params.id}`)

    if (!thisPost) {
        return res.status(404).json({
            error: true,
            message: 'Post not found!'
        })
    }

    res.json(thisPost)
}

const store = (req, res) => {
    const newPost = {
        id: Date.now(),
        "title": "Crostata alla Marmellata",
        "content": "Un classico intramontabile delle cucine di casa, la crostaa alla marmellata è quel dolce che profuma di domeniche lente e colazioni genuine. Un impasto semplice di farina, burro e zucchero che, lavorato con calma e un po’ di pazienza, diventa una base friabile capace di esaltare qualsiasi marmellata: albicocca, ciliegia o quella fatta in casa dalla nonna. Bastano pochi gesti – stendere la frolla, aggiungere la marmellata e intrecciare le strisce – per ritrovare quell’atmosfera familiare che ci accompagna fin da piccoli. Una fetta di crostata è perfetta per iniziare la giornata con dolcezza o per una merenda che sa di tradizione e semplicità.",
        "image": "#",
        "tags": [
            "Dolci",
            "Crostata",
            "Ricette vegetariane",
            "Ricette tradizionali"
        ]
    }

    posts.push(newPost)

    res.status(201).json(newPost);
}

const update = (req, res) => {
    res.send(`Update the post with id: ${req.params.id}`)
}

const modify = (req, res) => {
    res.send(`Modify the post with id: ${req.params.id}`)
}

const destroy = (req, res) => {
    const id = Number(req.params.id)
    const thisPost = posts.find(post => post.id === id)

    if (!thisPost) {
        return res.status(404).json({
            error: true,
            message: 'Post not found!'
        })
    }

    posts.splice(posts.indexOf(thisPost), 1)

    res.sendStatus(204)
}


const postsController = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}


module.exports = postsController