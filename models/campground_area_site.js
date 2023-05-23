const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const campgroundAreaSiteSchema = new mongoose.Schema(
  {
    name: { type: String, default: '' }, // 구역명
    campgroundId: { type: Object },
    campgroundAreaId: { type: Object },
    etcSetting: { type: Boolean, default: false }, // 사이트별도설정
    desc: { type: String, default: '' }, // 설명
    sizeWidth: { type: String, default: '' }, // 가로
    sizeHeight: { type: String, default: '' }, // 세로
    floorTypes: [], // 바닥타입
    areaFacilities: [], // 구역편의시설
    charges: {
      // 이용요금
      normal: {
        // 평상시
        weekday: { type: Number, defult: 0 }, // 주중임
        weekend: { type: Number, defult: 0 } // 주말
      },
      semiPeak: {
        // 준성수기
        weekday: { type: Number, defult: 0 }, // 주중
        weekend: { type: Number, defult: 0 } // 주말
      },
      peak: {
        // 성수기
        weekday: { type: Number, defult: 0 }, // 주중
        weekend: { type: Number, defult: 0 } // 주말
      }
    },

    isPeopleLimit: { type: Boolean }, // 인원제한
    isPeopleExtra: { type: Boolean }, // 방문자허용여부
    isCaravan: { type: Boolean, default: false }, // 카라반허용여부
    peopleMaxCnt: { type: Number, default: 0 }, // 최대인원
    peopleStdCnt: { type: Number, default: 0 }, // 기준인원
    peopleAdultStdCnt: { type: Number, default: 0 }, // 기준성인
    peopleAdultMaxCnt: { type: Number, default: 0 }, // 최대성인
    peopleKidStdCnt: { type: Number, default: 0 }, // 기준소인
    peopleKidMaxCnt: { type: Number, default: 0 }, // 최대성인

    extraCharges: {
      // 추가요금
      adult: { type: Number, defult: null }, // 성인
      kid: { type: Number, defult: null }, // 소인
      car: { type: Number, defult: null }, // 차량
      pet: { type: Number, defult: null }, // 펫
      caravan: { type: Number, defult: null } // 카라반
    },

    isExtraCar: { type: Boolean }, // 차량추가 가능여부

    carStdCnt: { type: Number, default: 0 }, // 기준차량
    carMaxCnt: { type: Number, default: 0 }, // 최대차량

    petAllow: { type: Boolean }, // 펫허용
    petFix: { type: Boolean }, // 펫필수
    petType: { type: String }, // 펫타입
    petStdCnt: { type: Number }, // 기준펫수량
    petMaxCnt: { type: Number }, // 최대 펫숲량
    picUrl: { type: String, default: '' } // 대표사진
  },

  { timestamps: true }
)
campgroundAreaSiteSchema.plugin(mongoosePaginate)
module.exports = mongoose.model(
  'campgrounds_areas_site',
  campgroundAreaSiteSchema
)
