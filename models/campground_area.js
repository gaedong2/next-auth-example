const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const campgroundAreaSchema = new mongoose.Schema(
  {
    campgroundId: { type: Object },
    name: { type: String, default: '' }, // 구역명
    areaBookingType: { type: String, default: '' }, // 예약타입 (선착순,지정석)
    desc: { type: String, default: '' }, // 설명
    areaType: { type: String, default: '' }, // 구역타입
    sizeWidth: { type: String, default: '' }, // 가로
    sizeHeight: { type: String, default: '' }, // 세로
    floorTypes: [], // 바닥타입
    areaFacilities: [], // 구역편의시설
    charges: {
      // 이용요금
      normal: {
        // 평상시
        weekday: { type: Number }, // 주중임
        weekend: { type: Number } // 주말
      },
      semiPeak: {
        // 준성수기
        weekday: { type: Number }, // 주중
        weekend: { type: Number } // 주말
      },
      peak: {
        // 성수기
        weekday: { type: Number }, // 주중
        weekend: { type: Number } // 주말
      }
    },

    isPeopleLimit: { type: Boolean }, // 인원제한
    isPeopleExtra: { type: Boolean }, // 방문자허용여부
    isCaravan: { type: Boolean }, // 카라반허용여부

    peopleMaxCnt: { type: Number }, // 최대인원
    peopleStdCnt: { type: Number }, // 기준인원
    peopleAdultStdCnt: { type: Number }, // 기준성인
    peopleAdultMaxCnt: { type: Number }, // 최대성인
    peopleKidStdCnt: { type: Number }, // 기준소인
    peopleKidMaxCnt: { type: Number }, // 최대성인

    extraCharges: {
      // 추가요금
      adult: { type: Number }, // 성인
      kid: { type: Number }, // 소인
      car: { type: Number }, // 차량
      pet: { type: Number }, // 펫
      caravan: { type: Number } // 카라반
    },

    isExtraCar: { type: Boolean }, // 차량추가 가능여부
    carExtraAddFixDiv: { type: String, default: '' }, // 차량요금 부가단위 (fix: 1회만 , stay : 숙박일수)

    carStdCnt: { type: Number }, // 기준차량
    carMaxCnt: { type: Number }, // 최대차량

    petAllow: { type: Boolean }, // 펫허용
    petFix: { type: Boolean }, // 펫필수
    petType: { type: String }, // 펫타입
    petStdCnt: { type: Number }, // 기준펫수량
    petMaxCnt: { type: Number }, // 최대 펫숲량

    picUrl: { type: String, default: '' }, // 대표사진
    layoutUrl: { type: String, default: '' } // 배치도사진
  },

  { timestamps: true }
)
campgroundAreaSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('campgrounds_area', campgroundAreaSchema)
