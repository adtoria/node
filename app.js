const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000); // automatically infers that we need to use localhost

app.get('/', (req, res) => {
    // res.send('<p>home page</p>'); // it infers the type of content automatically & also the status code
    res.sendFile('./views/index.html', { root: __dirname});
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>'); // it infers the type of content automatically & also the status code
    res.sendFile('./views/about.html', { root: __dirname});
});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page
// this should be at the very bottom
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname});
});