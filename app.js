const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer();
const POST = 3000;

app.listen(POST, () => {
    console.log(`Example app listening on port ${POST}`);
 });

 app.set('view engine', 'ejs');
 app.set('views', './views');
 app.get('/', (req, res) => {
    res.render("register");
 });

 const arrayUser = [];
 app.post('/user/register', upload.none(), (req, res) => {
    if (req.body.username && req.body.password) {
        const user = {
            username: req.body.username,
            password: req.body.password
        }
 
        arrayUser.push(user);
        console.log(arrayUser);
        res.render("success", { user: user });
    } else {
        res.render("error");
    }
 });

 