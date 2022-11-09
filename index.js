const express = require('express');
const postsRoute = require("./routes/postsRoute");
const commentsRoute = require("./routes/commentsRoute");
const app = express();
const port = 3000;
app.use(express.json());

// app.use("/api/posts", postsRoute);
// app.use("/api/comments", commentsRoute);

let postId = 3;
let commentId = 4;

let posts = [
    {
        id:1,
        title: "Veniam Lorem consequat ex consequat non fugiat excepteur deserunt anim sunt.",
        body: "Ipsum est ipsum elit duis minim cillum dolor in ad dolor labore. Amet sunt officia anim dolor minim labore nostrud officia nisi eu proident et. Officia ipsum incididunt cupidatat consequat deserunt labore nostrud exercitation Lorem eu aliquip culpa ut enim. Minim est officia ipsum elit sit irure voluptate duis esse occaecat excepteur sint est sit. Deserunt tempor magna officia ex et laborum anim incididunt labore do excepteur.",
        image: "https://github.com/mxrguspxrt/mobile/raw/main/cat1.jpeg",
        description: "desc"
    },
    {
        id: 2,
        title: "test",
        body: "body2",
        image: "https://github.com/mxrguspxrt/mobile/raw/main/cat1.jpeg",
        description: "desc"
    }
];

let comments = [
    {
        id: 1,
        comment: "Irure minim et consectetur officia laborum eu commodo ullamco.",
        postId: 1,
    },
    {
        id: 2,
        comment: "Ex consectetur adipisicing ex quis sint mollit anim ea nulla ullamco.",
        postId: 1,
    },
    {
        id: 3,
        comment: "Ipsum consectetur aliquip laborum dolore deserunt qui sint ad cillum esse consequat.",
        postId: 2
    }
]

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//GET
app.get("/api/posts/", (req, res) => {
    return res.send(posts);
})

//GET POST COMMENTS
app.get("/api/posts/:id/comments", (req, res) => {
    let postId = parseInt(req.params.id);
    return res.send(comments.filter(comment => {return comment.postId === postId}));
})

//CREATE
app.post("/api/posts/", (req, res) => {
    let {title, body, image, description} = req.body;
    let newPost = {id: postId, title: title, body: body, image: image, description: description};
    posts.push(newPost);
    postId++;
    return res.send(newPost);
})

//DELETE
app.delete("/api/posts/:id", (req, res) => {
    let postId = parseInt(req.params.id);
    posts = posts.filter(post => { return post.id !== postId});
    return res.send(posts);
})

//GET BY ID
app.get('/api/posts/:id', (req, res) => {
    let postId = parseInt(req.params.id);
    let post = posts.find(post => {return post.id === postId});
    res.send(post);
})

//UPDATE
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

//====================COMMENTS====================
//GET
app.get("/api/comments/", (req, res) => {
    if(req.query.postId){
        let postId = parseInt(req.query.postId);
        return res.send(comments.filter(comment => {return comment.postId === postId}));
    }
    else if(req.query.commentId){
        let commentId = parseInt(req.query.commentId);
        return res.send(comments.filter(comment => {return comment.id === commentId}));
    } else {
        return res.send(comments);
    }
})

app.post("/api/comments", (req, res) => {
    if(!req.body.comment || !req.body.postId){
        return res.send("comment and postId are required");
    }
    let {comment, postId} = req.body;
    let newComment = {id: commentId, comment: comment, postId: postId};
    comments.push(newComment);
    commentId++;

    return res.send(comments);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})