const { Genre } = require("../../database/models/")

const genresController = {

    list: async (req, res) => {
        try {
            const genres = await Genre.findAll();
            return res.json({
                meta: {
                    status: 200,
                    total: genres.length,
                    url: '/api/genres'                
                },
                data: {genres}
            })
        } catch (error) {
            res.json(error.message)
        }
    },

    
    detail: async (req, res) => {
        try {
            const { id } = req.params
            const genre = await Genre.findByPk(id,{
                include: ['movies']
            });
            return res.json({
                meta: {
                    status: 200,
                    url: '/api/genres/detail/id'                
                },
                data: {genre}
            })
        } catch (error) {
            res.json(error.message)
        }
    }
};

module.exports = genresController;