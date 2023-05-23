const Campground_area_site = require('../../../models/campground_area_site')
const { buildErrObject } = require('../../../middleware/utils')
const { ObjectId } = require('mongodb')
/**
 * Checks if a city already exists in database
 * @param {string} name - name of item
 */
const campgroundSiteExists = (name = '', campgroundId , campgroundAreaId) => {
  console.log('유효성  체크')
  console.log(`name=${name}`)
  console.log(`campgroundId=${campgroundId}`)
  return new Promise((resolve, reject) => {
    Campground_area_site.findOne(
      {
        name,
        campgroundId: new ObjectId(campgroundId),
        campgroundAreaId: new ObjectId(campgroundAreaId)
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, '해당구역이 에 동일한 사이트명이 존재합니다'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { campgroundSiteExists }
