const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates create new item request
 */
const validateUpdateCampgroundSite = [
  check('name')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('사이트명 필수입니다')
    .trim(),

  check('campgroundId'),
  check('etcSetting'),
  check('desc'),
  check('areaType'),
  check('sizeWidth'),
  check('sizeHeight'),
  check('floorTypes'),
  check('areaFacilities'),
  check('charges'),
  check('isPeopleLimit'),
  check('isPeopleExtra'),
  check('isCaravan'),
  check('peopleMaxCnt'),
  check('peopleStdCnt'),
  check('peopleAdultStdCnt'),
  check('peopleAdultMaxCnt'),
  check('peopleKidStdCnt'),
  check('peopleKidMaxCnt'),
  check('extraCharges'),
  check('isExtraCar'),
  check('carExtraAddFixDiv'),
  check('carStdCnt'),
  check('carMaxCnt'),
  check('petAllow'),
  check('petFix'),
  check('petType'),
  check('petStdCnt'),
  check('petMaxCnt'),
  check('picUrl'),
  check('petStdCnt'),
  check('petStdCnt'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateUpdateCampgroundSite }
