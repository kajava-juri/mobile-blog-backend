const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

let postId = 2;

let posts = [{id:1, title: "Veniam Lorem consequat ex consequat non fugiat excepteur deserunt anim sunt.",
body: "Ipsum est ipsum elit duis minim cillum dolor in ad dolor labore. Amet sunt officia anim dolor minim labore nostrud officia nisi eu proident et. Officia ipsum incididunt cupidatat consequat deserunt labore nostrud exercitation Lorem eu aliquip culpa ut enim. Minim est officia ipsum elit sit irure voluptate duis esse occaecat excepteur sint est sit. Deserunt tempor magna officia ex et laborum anim incididunt labore do excepteur."}]

app.get("/api/posts", (req, res) => {
    console.log("received request");
    return res.send(posts);
})

app.post("/api/posts", (req, res) => {
    console.log("received request");
    let {title, body} = req.body;
    let newPost = {id: postId, title: title, body: body};
    posts.push(newPost);
    postId++;
    return res.send(newPost);
})

app.get('/api/posts/:id', (req, res) => {
    let pId = posts.map(p => p.id).indexOf(parseInt(req.params.id));
    res.send(posts[pId]);
})

app.put("/api/posts/:id", (req, res) => {
    let post = posts.find(p => p.id == req.params.id);
    let pId = posts.map(p => p.id).indexOf(parseInt(req.params.id));
    let newPost = req.body;

    Object.keys(newPost).forEach(key => {
        post[key] = newPost[key];
    })

    posts[pId] = post;

    res.status(201).send({newPost: {...post}});

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})