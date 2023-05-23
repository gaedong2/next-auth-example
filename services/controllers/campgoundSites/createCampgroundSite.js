const campgroundArea = require('../../models/campground_area')
const campgroundAreaSite = require('../../models/campground_area_site')
const { createItem } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { campgroundAreaExists } = require('./helpers')
const { ObjectId } = require('mongodb')
/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createCampgroundSite = async (req, res) => {
  console.log('areaCreate')
  try {
    req = matchedData(req) // 요청된 데이터를 받아들여
    const { campgroundId, beforeName, createSiteCnt } = req // 각각이름을 담는다
    console.log(`campgroundId = ${campgroundId}`)
    console.log(`beforeName = ${beforeName}`)
    console.log(`createSiteCnt = ${createSiteCnt}`)

    const { campgroundId: _, ...rest } = req
    const doesCampgroundAreaExists = await campgroundAreaExists(
      req.name,
      campgroundId
    ) // 캠핑아이디에 이름이 중복되어있는지 확인한다
    if (!doesCampgroundAreaExists) {
      // 중복된 이름이 없으며
      const campgroundAreaData = {
        campgroundId: new ObjectId(campgroundId),
        ...rest
      } // 캠피아이디와 구역내용을 합쳐서 담는다
      const createdCampgroundArea = await createItem(
        campgroundAreaData,
        campgroundArea
      ) // 그리고는 테이블에 데이터를 하나 넣는다

      const createdSites = [] // 해당된사이트를 만든다
      for (let i = 1; i <= createSiteCnt; i++) {
        // 입력된 사이트수 갯수만큼 반복한다

        console.log(`생성${i}`)

        const siteNumber = i.toString().padStart(2, '0') // 1자리 숫자에 '0'을 붙이도록 수정
        const name = `${beforeName}${siteNumber}` // 사이트명
        console.log(`siteName${name}`)
        const siteData = {
          campgroundId: new ObjectId(campgroundId),
          campgroundAreaId: createdCampgroundArea._id,
          name
        } // 만들어진사이트명
        const createdSite = await createItem(siteData, campgroundAreaSite) // 생성할사이트갯수만큼 반복한다
        createdSites.push(createdSite) // 만들어진사이트에 넣는다
      }

      let createdCampgroundAreaObject = createdCampgroundArea.toObject();
      createdCampgroundAreaObject.numberOfSites = createdSites.length;
      res.status(201).json({
        createdCampgroundArea: createdCampgroundAreaObject
      })
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createCampgroundSite }
