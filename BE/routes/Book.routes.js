const router = require('express').Router()
const BookModel = require('../models/Bool.model.js')



router.post('/:id' ,async (req, res) => {

    const newBook = new BookModel(req.body)

    try {

        const book = await newBook.save();

        res.status(200).json(book)
        
    } catch (error) {
        res.status(500).json({error})
    }

})


router.get('/', async (req , res) => {
    try {
        
        const data = await BookModel.find()

        res.status(200).json(data)


    } catch (error) {
        res.status(500).json(error)
    }
})
router.delete('/:id', async (req , res) => {
    try {
        
        await BookModel.findByIdAndDelete(req.params.id)

        res.status(200).json('Done Delete')


    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router