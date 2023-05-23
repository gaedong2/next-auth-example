const campgroundArea = require('../../models/campground_area')
const { updateItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateCampgroundArea = async (req, res) => {
  try {
    const id = await isIDGood(req.body._id)
    req = matchedData(req)
    console.log(req)
    res.status(200).json(await updateItem(id, campgroundArea, req))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateCampgroundArea }
