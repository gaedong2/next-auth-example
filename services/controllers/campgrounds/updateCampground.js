const Campground = require('../../models/campground')
const { updateItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateCampground = async (req, res) => {
  try {
    const id = await isIDGood(req.body._id)
    req = matchedData(req)
    console.log('리턴된데이터')
    console.log(req)
    res.status(200).json(await updateItem(id, Campground, req))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateCampground }
