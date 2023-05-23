const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateUpdateCampground = [
  check('id')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('company.name')
    .exists()
    .withMessage('MISSING')
    .isLength({ min: 1, max: 50 })
    .withMessage('캠핑장이름이 잘못되었습니다.'),
  check('company.address')
    .exists()
    .withMessage('MISSING')
    .isLength({ min: 1, max: 50 })
    .withMessage('캠핑장주소는 필수 입니다.'),
  check('company.address')
    .exists()
    .withMessage('MISSING')
    .isLength({ min: 1, max: 50 })
    .withMessage('캠핑장주소는 필수 입니다.'),
  check('company.phoneNumber')
    .exists()
    .withMessage('MISSING')
    .isLength({ min: 1, max: 50 })
    .withMessage('캠핑장 전화번호는 필수 입니다.'),
  check('company.president')
    .exists()
    .withMessage('MISSING')
    .isLength({ min: 1, max: 50 })
    .withMessage('대표자명이 입력되지 않았습니다.'),
  check('company.bizNo')
    .exists()
    .withMessage('MISSING')
    .isLength({ min: 1, max: 50 })
    .withMessage('사업자번호가 입력되지 않았습니다.'),
  check('company.campRegNo')
    .exists()
    .withMessage('MISSING')
    .isLength({ min: 1, max: 50 })
    .withMessage('야영장 등록번호가 입력되지 않았습니다.'),
  check('facilities')
    .exists()
    .withMessage('MISSING')
    .custom((value) => {
      if (!Array.isArray(value) || value.length < 1) {
        return false
      }
      return true
    })
    .withMessage('공용시설은 하나 이상 선택하세요'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateUpdateCampground }
