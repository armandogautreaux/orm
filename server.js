var express = require('express');
var exphbs = require('express-handlebars');
var routes = require('./controllers/controllers.js');
var PORT = process.env.PORT || 3000;
var app = express();

//static folder
app.use(express.static('public'));

//midleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//routes
app.use(routes);

app.listen(PORT, function() {
  console.log('listening on PORT ' + PORT);
});
