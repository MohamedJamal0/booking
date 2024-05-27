import listingsService from '../../../services/listings/index.js';

export const addImageToListing = async (req, res) => {
  const { id } = req.params;
  const { imageUrl } = req.body;
  const image = await listingsService.addImageToListing({
    id,
    user: req.user,
    imageUrl,
  });
  res.status(201).json(image);
};
