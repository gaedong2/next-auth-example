
import mongoose from 'mongoose';
const campgroundSchema = new mongoose.Schema(
    {
        name: { type: String, default: '' },
        phoneNumber: { type: String, default: '' },
        shortDescription: { type: String, default: '' },
        mannerSTime: { type: String, default: '' },
        mannerETime: { type: String, default: '' },
        company: {
            address: { type: String, default: '' },
            campRegNo: { type: String, default: '' },
            name: { type: String, default: '' },
            president: { type: String, default: '' },
            bizNo: { type: String, default: '' },
            phoneNumber: { type: String, default: '' }
        },
        operationDays: {
            // 캠핑장운영일자
            operationCamp: {
                // 캠핑장
                mon: { type: Boolean },
                tue: { type: Boolean },
                wed: { type: Boolean },
                thu: { type: Boolean },
                fri: { type: Boolean },
                sat: { type: Boolean },
                sun: { type: Boolean }
            }, // 피크닉
            operationPicnic: {
                mon: { type: Boolean },
                tue: { type: Boolean },
                wed: { type: Boolean },
                thu: { type: Boolean },
                fri: { type: Boolean },
                sat: { type: Boolean },
                sun: { type: Boolean }
            },
            operationExperience: {
                // 기타운영
                mon: { type: Boolean },
                tue: { type: Boolean },
                wed: { type: Boolean },
                thu: { type: Boolean },
                fri: { type: Boolean },
                sat: { type: Boolean },
                sun: { type: Boolean }
            }
        },
        openSchedule: {
            // 예약스케줄
            openType: { type: String }, // 타입 일 , 주 ,월
            openRange: { type: String }, // 기간
            openDay: { type: String }, // 오픈일
            openTime: { type: String } // 오픈시간
        },
        maxBookingDate: { type: Number, default: 2 },
        policy: { type: String, default: '' }, // 캠핑장 운영정책
        onedesc: { type: String, default: '' }, // 한줄소개
        locationdesc: { type: String, default: '' }, // 위치소개
        description: { type: String, default: '' }, // 캠핑장소개
        publicfacilities: { type: [String], default: '' }, // 공용시설
        facilities: { type: [String], default: '' }, // 시설
        environments: { type: [String], default: '' }, // 주변환경
        services: { type: [String], default: '' }, // 서비스
        leisures: { type: [String], default: '' }, // 레저
        bankName: { type: String, default: '' }, // 은행명
        bankAccountNumber: { type: String, default: '' }, // 계좌번호
        addr1: { type: String, default: '' }, // 주소1
        addr2: { type: String, default: '' }, // 주소2
        campingtags: { type: [String], default: '' }, // 캠핑테그
        isActive: { type: Boolean, default: '' }, // 활성화여부
        campgroundCheckInTime: { type: String, default: '' }, // 캠핑장 체크인 시간
        campgroundCheckOutTime: { type: String, default: '' }, // 캠핑장 체크아웃 시간
        picnicCheckInTime: { type: String, default: '' },
        picnicCheckOutTime: { type: String, default: '' },
        peakStart: { type: Number, default: null },
        peakEnd: { type: Number, default: null },
        semiPeakStart: { type: Number, default: null },
        semiPeakEnd: { type: Number, default: null },
        mainImg: { url: { type: String }, accKey: { type: String } } // 캠핑장 대표이미지
    },
    { timestamps: true }
);

const Campground = mongoose.models.campground || mongoose.model('campground', campgroundSchema);
export default Campground;
