const Campground_area = require('../../../models/campground_area')
const { buildErrObject } = require('../../../middleware/utils')
const { ObjectId } = require('mongodb')
/**
 * Checks if a city already exists in database
 * @param {string} name - name of item
 */
const campgroundAreaExists = (name = '', campgroundId) => {
  console.log('유효성  체크')
  console.log(`name=${name}`)
  console.log(`campgroundId=${campgroundId}`)
  return new Promise((resolve, reject) => {
    Campground_area.findOne(
      {
        name,
        campgroundId: new ObjectId(campgroundId)
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, '이미존재하는 구역명입니다.'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { campgroundAreaExists }
