const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        headTitle: 'Home Page head title',
        pageTitle: 'Welcome to Express'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page Sample'
    });
});

app.get('/projects', (req, res) => {
    res.render('project.hbs', {
        pageTitle: 'Projects Undertaken',
        bodyText: 'Projects list here'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        code: 404,
        errorMessage: 'Page not found. Try visit here.'
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});