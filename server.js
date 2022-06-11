const path = require('path');
const express = require('express');
const expHbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const controllers = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3010;

const sequelize = require('./config/connection');

const session = require('express-session');

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

const bodyParser = require('body-parser');
const hbs = expHbs.create({ 
  layoutsDir: 'views/layouts',
  defaultLayout: 'main',
  extname: 'hbs',
  helpers 
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
// app.set('views', 'views')


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));
});