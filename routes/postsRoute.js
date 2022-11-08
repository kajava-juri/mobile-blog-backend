// const express = require("express");
// const router = express.Router();

// let posts = require("../data.js");

// let posts = [{
//     id:1,
//     title: "Veniam Lorem consequat ex consequat non fugiat excepteur deserunt anim sunt.",
//     body: "Ipsum est ipsum elit duis minim cillum dolor in ad dolor labore. Amet sunt officia anim dolor minim labore nostrud officia nisi eu proident et. Officia ipsum incididunt cupidatat consequat deserunt labore nostrud exercitation Lorem eu aliquip culpa ut enim. Minim est officia ipsum elit sit irure voluptate duis esse occaecat excepteur sint est sit. Deserunt tempor magna officia ex et laborum anim incididunt labore do excepteur."
//     },
//     {
//         id: 2,
//         title: "test",
//         body: "body2"
// }];

// //GET
// router.get("/", (req, res) => {
//     return res.send(posts);
// })

// //GET POST COMMENTS
// router.get("/:id/comments", (req, res) => {

// })

// //CREATE
// router.post("/", (req, res) => {
//     let {title, body} = req.body;
//     let newPost = {id: postId, title: title, body: body};
//     posts.push(newPost);
//     postId++;
//     return res.send(newPost);
// })

// //DELETE
// router.delete("/:id", (req, res) => {
//     let postId = parseInt(req.params.id);
//     posts = posts.filter(post => { return post.id !== postId});
//     return res.send(posts);
// })

// //GET BY ID
// router.get('/:id', (req, res) => {
//     let postId = parseInt(req.params.id);
//     let post = posts.find(post => {return post.id === postId});
//     res.send(post);
// })

// //UPDATE
// router.put("/:id", (req, res) => {
//     let post = posts.find(p => p.id == req.params.id);
//     let pId = posts.map(p => p.id).indexOf(parseInt(req.params.id));
//     let newPost = req.body;

//     Object.keys(newPost).forEach(key => {
//         post[key] = newPost[key];
//     })

//     posts[pId] = post;

//     res.status(201).send({newPost: {...post}});

// })

// module.exports = router;