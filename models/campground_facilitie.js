const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const campgroundsFacilitieSchema = new mongoose.Schema(
  {
    facilities: { type: [String], default: '' },
    environments: { type: [String], default: '' },
    publicfacilities: { type: [String], default: '' },
    services: { type: [String], default: '' },
    leisures: { type: [String], default: '' }
  },
  { timestamps: true }
)
campgroundsFacilitieSchema.plugin(mongoosePaginate)
module.exports = mongoose.model(
  'campgrounds_facilite',
  campgroundsFacilitieSchema
)
