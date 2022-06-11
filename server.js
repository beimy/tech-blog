const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');
const handlebars = require('express-handlebars');
const controllers = require('./controllers');
const helpers = require('./utils/helpers');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3010;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Not sure yet',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const hbs = handlebars.create({ 
  layoutsDir:  __dirname + '/views/layouts',
  defaultLayout: 'main',
  extname: 'hbs',
  partialsDir: __dirname + '/views/partials',
  helpers 
});

app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine);

app.set('views', 'views');
app.set('partials', 'views/partials');

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
});