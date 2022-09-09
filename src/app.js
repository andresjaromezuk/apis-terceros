const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const cors = require('cors')


app.use(cors())
// api routes

const APIindexRouter = require('./routes/api/index');
const APImoviesRoutes = require('./routes/api/moviesRoutes');
const APIgenresRoutes = require('./routes/api/genresRoutes');
const APIactorsRoutes = require('./routes/api/actorsRoutes');


// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));



// API routes

app.use('/api/', APIindexRouter);
app.use('/api/movies', APImoviesRoutes);
app.use('/api/genres', APIgenresRoutes);
app.use('/api/actors', APIactorsRoutes);

const port = process.env.PORT || "3001"
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
