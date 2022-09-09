const { Actor } = require("../../database/models");

const actorsController = {
    list: async (req, res) => {
        try {
            const actors = await Actor.findAll();
            return res.json({
                meta: {
                    status: 200,
                    total: actors.length,
                    url: '/api/actors'                
                },
                data: {actors}
            })
        } catch (error) {
            return res.json(error.message);
        }
    },

    detail: async (req, res) => {
        try {
            const { id } = req.params;
            const actor = await Actor.findByPk(id, {
                include: ['movies']
            });
            return res.json({
                meta: {
                    status: 200,
                    url: '/api/actors/detail/id'                
                },
                data: {actor}
            })
        } catch (error) {
            return res.json(error.message);
        }
    }
}

module.exports = actorsController