const router = require ('express').Router();
const {category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req,res) => {
    try{
        const categoryData = await Category.findAll({
            include:[{ model:Reader }],
        });
        res.status(200).json(categoryData);   
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/:id', (req, res) => {

})
