const campgroundArea = require('../../models/campground_area')
const { checkQueryString, getItems } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getCampgroundAreas = async (req, res) => {
  try {
    const query = await checkQueryString(req.query)
    const campgroundAreas = await campgroundArea.aggregate([
      {
        $lookup: {
          from: "campgrounds_areas_sites", // 다른 컬렉션 이름
          localField: "_id", // 현재 컬렉션(campgroundArea)의 필드
          foreignField: "campgroundAreaId", // 다른 컬렉션(campgrounds_sites)의 필드
          as: "campgrounds_sites" // 결합된 데이터를 저장할 새로운 필드
        }
      },
      {
        $addFields: { numberOfSites: { $size: "$campgrounds_sites" } } // 각 campgroundArea에 연결된 campgrounds_sites의 수를 계산
      }
      // $project 연산자를 삭제하여 campgrounds_sites 필드를 유지
    ]);
    res.status(200).json(campgroundAreas);
  } catch (error) {
    handleError(res, error)
  }
}
module.exports = { getCampgroundAreas }
