const express = require('express');
const router = express.Router();

const moviesController = require('../../controllers/api/moviesController');

router.get('/', moviesController.list);
router.get('/new', moviesController.new);
router.get('/recommended', moviesController.recommended);
router.get('/detail/:id', moviesController.detail);

//Rutas exigidas para la creación del CRUD

// router.get('/add', moviesController.add);
router.post('/create', moviesController.create);
// router.get('/edit/:id', moviesController.edit);
router.put('/update/:id', moviesController.update);
// router.get('/delete/:id', moviesController.delete);
router.delete('/delete/:id', moviesController.destroy);

router.post('/search', moviesController.buscar);

router.get('/filtrar', moviesController.filtrar);


module.exports = router;