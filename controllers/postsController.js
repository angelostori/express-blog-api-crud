/*
Milestone 1

Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers. 

All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente 
si trovano nel router (al momento restituiscono solo dei messaggi). 
*/

const index = (req, res) => {
    res.json(posts)
}

const show = (req, res) => {
    const id = Number(req.params.id)
    const thisPost = posts.find(post => post.id === id)
    // res.send(`Show the post with id: ${req.params.id}`)

    if (!thisPost) {
        res.send(`The post with id: ${req.params.id} doesn't exist`)
    }

    res.json(thisPost)
}

const store = (req, res) => {
    res.send('Store a new post here')
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