const campgroundSite = require('../../models/campground_area_site')
const { updateItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateCampgroundSite = async (req, res) => {
  try {
    const id = await isIDGood(req.body._id)
    req = matchedData(req)
    console.log(req)
    res.status(200).json(await updateItem(id, campgroundSite, req))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateCampgroundSite }
