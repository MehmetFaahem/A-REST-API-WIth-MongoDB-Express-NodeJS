const express = require('express')
const router = express.Router()

const { getPoints, SetPoints, UpdatePoints, DeletePoints } = require('../controllers/pointControllers')

router.route('/')
    .get(getPoints)
    .post(SetPoints)

router.route('/:id')
    .put(UpdatePoints)
    .delete(DeletePoints)


module.exports = router