const path = require('path');
const express = require('express');
const session = require('express-session');
const expressHbs = require('express-handlebars');
const controllers = require('./controllers');
const helpers = require('./utils/helpers');
const bodyParser = require('body-parser');

const app = express();
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

app.set('views', path.join(__dirname, 'views'))


// const hbs = expressHbs.create({ 
//   layoutsDir: 'views/layouts',
//   defaultLayout: 'main',
//   partialsDir: 'views/partials',
//   extname: 'hbs',
//   helpers 
// });

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');



app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
});