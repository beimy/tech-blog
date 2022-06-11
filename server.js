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
const hbs = require('hbs');


hbs.registerPartials(__dirname + '/views/partials');

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
app.use(session(sess));

app.engine('handlebars', handlebars.engine({
  layoutsDir:  __dirname + '/views/layouts',
  defaultLayout: 'main',
  partialsDir: __dirname + '/views/partials',
  extname: 'handlebars',
  helpers 
}));
app.set('view engine', 'handlebars');


app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
});