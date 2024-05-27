import Joi from 'joi';

export const getListingsSchema = Joi.object({
  title: Joi.string().optional(),
  categoryId: Joi.number().integer().positive().optional(),
  typeId: Joi.number().integer().positive().optional(),
  city: Joi.string().optional(),
  country: Joi.string().optional(),
  minPrice: Joi.number().optional(),
  maxPrice: Joi.number().optional(),
  minNumberOfNights: Joi.number().integer().positive().optional(),
  maxNumberOfGuests: Joi.number().integer().positive().optional(),
  startDate: Joi.date().optional(),
  endDate: Joi.date().min(Joi.ref('startDate')).optional(),
  amenities: Joi.array().items(Joi.number().integer().positive()).optional(),
  page: Joi.number().integer().positive().optional(),
});

const createListingSchema = Joi.object({
  title: Joi.string().required(),
});

const updateListingSchema = Joi.object({
  title: Joi.string().optional(),
  summary: Joi.string().optional(),
  categoryId: Joi.number().integer().positive().optional(),
  typeId: Joi.number().integer().positive().optional(),
  latitude: Joi.number().optional(),
  longitude: Joi.number().optional(),
  pricePerNight: Joi.number().optional(),
  city: Joi.string().optional(),
  country: Joi.string().optional(),
  numberOfBeds: Joi.number().integer().positive().optional(),
  numberOfRooms: Joi.number().integer().positive().optional(),
  numberOfBathrooms: Joi.number().integer().positive().optional(),
  minNumberOfNights: Joi.number().integer().positive().optional(),
  maxNumberOfGuests: Joi.number().integer().positive().optional(),
  statusId: Joi.number().integer().positive().optional(),
});

const addImageToListingSchema = Joi.object({
  imageUrl: Joi.string().required(),
});

const addAmenityToListingSchema = Joi.object({
  amenityId: Joi.number().integer().positive().required(),
});

const getListingAvailabilitySchema = Joi.object({
  startDate: Joi.date().required(),
  endDate: Joi.date().min(Joi.ref('startDate')).required(),
});

export default {
  updateListingSchema,
  createListingSchema,
  addImageToListingSchema,
  addAmenityToListingSchema,
  getListingAvailabilitySchema,
  getListingsSchema,
};
