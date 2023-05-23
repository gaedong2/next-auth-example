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

  check('publicfacilities')
    .exists()
    .withMessage('MISSING')
    .custom((value) => {
      if (!Array.isArray(value) || value.length < 1) {
        return false
      }
      return true
    })
    .withMessage('공용시설은 하나 이상 선택하세요'),

  check('facilities')
    .exists()
    .withMessage('MISSING')
    .custom((value) => {
      if (!Array.isArray(value) || value.length < 1) {
        return false
      }
      return true
    })
    .withMessage('편의시설은 하나 이상 선택하세요'),
  check('services'),
  check('environments')
    .exists()
    .withMessage('MISSING')
    .custom((value) => {
      if (!Array.isArray(value) || value.length < 1) {
        return false
      }
      return true
    })
    .withMessage('주변환경은 하나 이상 선택하세요'),
  check('leisures'),
  check('onedesc'),
  check('locationdesc'),
  check('description'),
  check('openSchedule.openType'),
  check('openSchedule.openRange'),
  check('openSchedule.openDay'),
  check('openSchedule.openTime'),
  check('operationDays.operationCamp'),
  check('operationDays.operationPicnic'),
  check('operationDays.operationExperience'),
  check('maxBookingDate'),
  check('mannerSTime'),
  check('mannerETime'),
  check('policy'), // 캠핑장운영정책
  check('campgroundCheckInTime'), // 캠핑장 체크인시간
  check('campgroundCheckOutTime'), // 캠핑장 체크아웃시간
  check('picnicCheckInTime'), // 피크닉 체크인시간
  check('picnicCheckOutTime'), // 피크닉 체크아웃시간

  // 성수기 시작일 검증
  check('peakStart')
    .if((value, { req }) => req.body.peakEnd)
    .isNumeric()
    .withMessage('성수기 시작일은 유효한 시간 값이어야 합니다.')
    .custom((value, { req }) => {
      if (req.body.peakEnd) {
        if (value >= req.body.peakEnd) {
          throw new Error(
            '성수기 시작일은 성수기 종료일보다 앞에 있어야 합니다.'
          )
        }
      }
      return true
    }),
  // 성수기 종료일 검증
  check('peakEnd')
    .if((value, { req }) => req.body.peakStart)
    .isNumeric()
    .withMessage('성수기 종료일은 유효한 시간 값이어야 합니다.')
    .custom((value, { req }) => {
      if (req.body.peakStart) {
        if (value <= req.body.peakStart) {
          throw new Error(
            '성수기 종료일은 성수기 시작일보다 뒤에 있어야 합니다.'
          )
        }
      }
      return true
    }),
  // 준성수기 시작일 검증
  check('semiPeakStart')
    .if((value, { req }) => req.body.semiPeakEnd)
    .isNumeric()
    .withMessage('준성수기 시작일은 유효한 시간 값이어야 합니다.')
    .custom((value, { req }) => {
      if (req.body.semiPeakEnd) {
        if (value >= req.body.semiPeakEnd) {
          throw new Error(
            '준성수기 시작일은 준성수기 종료일보다 앞에 있어야 합니다.'
          )
        }
      }
      return true
    }),
  // 준성수기 종료일 검증
  check('semiPeakEnd')
    .if((value, { req }) => req.body.semiPeakStart)
    .isNumeric()
    .withMessage('준성수기 종료일은 유효한 시간 값이어야 합니다.')
    .custom((value, { req }) => {
      if (req.body.semiPeakStart) {
        if (value <= req.body.semiPeakStart) {
          throw new Error(
            '준성수기 종료일은 준성수기 시작일보다 뒤에 있어야 합니다.'
          )
        }
      }
      return true
    }),
  check('mainImgUrl'),

  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateUpdateCampground }
