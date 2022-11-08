// const express = require("express");
// const router = express.Router();

// let comments = [
//     {
//         id: 1,
//         comment: "Irure minim et consectetur officia laborum eu commodo ullamco.",
//         postId: 1,
//     },
//     {
//         id: 2,
//         comment: "Ex consectetur adipisicing ex quis sint mollit anim ea nulla ullamco.",
//         postId: 1,
//     },
//     {
//         id: 3,
//         comment: "Ipsum consectetur aliquip laborum dolore deserunt qui sint ad cillum esse consequat.",
//         postId: 2
//     }
// ]

// //GET
// router.get("/", (req, res) => {
//     if(req.query.postId){
//         let postId = parseInt(req.query.postId);
//         return res.send(comments.filter(comment => {return comment.postId === postId}));
//     }
//     else if(req.query.commentId){
//         let commentId = parseInt(req.query.commentId);
//         return res.send(comments.filter(comment => {return comment.id === commentId}));
//     } else {
//         return res.send(comments);
//     }
// })


// module.exports = router;