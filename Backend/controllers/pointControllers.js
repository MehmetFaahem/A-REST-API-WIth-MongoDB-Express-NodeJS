const asyncHandler = require('express-async-handler')
const { findByIdAndUpdate, findByIdAndDelete } = require('../model/pointModel')

const Point = require('../model/pointModel')

const getPoints = asyncHandler(async (req, res) => {


    const points = await Point.find()

    res.status(200).json(points)
})

const SetPoints = asyncHandler(async (req, res) => {

    if (!req.body.username) {
        res.status(400)
        throw new Error('Please Write Your Name')
    }

    const point = await Point.create({
        username: req.body.username
    })

    res.status(200).json(point)
})

const UpdatePoints = asyncHandler(async (req, res) => {

    const point = await Point.findById(req.params.id)

    if (!point) {
        res.status(400)
        throw new Error('Id Not Found')
    }

    const updatedPoint = await findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedPoint)
})

const DeletePoints = asyncHandler(async (req, res) => {

    const point = await Point.findById(req.params.id)

    if (!point) {
        res.status(400)
        throw new Error('There is No ID')
    }

    await point.remove()

    res.status(200).json({ message: `Deleted Id: ${req.params.id}` })
})

module.exports = { getPoints, SetPoints, UpdatePoints, DeletePoints }