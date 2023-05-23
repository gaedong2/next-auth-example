const { matchedData } = require('express-validator')
const Campground = require('../../models/campground')
const { getItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getCampground = async (req, res) => {
  try {
    req = matchedData(req)
    console.log(req)
    const id = await isIDGood(req.id)
    console.log(id)
    res.status(200).json(await getItem(id, Campground))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getCampground }
