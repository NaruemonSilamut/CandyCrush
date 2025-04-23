import * as ratingService from "../service/rating.service.js";

export const getAllRatings = async (req, res) => {
  try {
    const ratings = await ratingService.getAllRatings();
    res.status(200).json(ratings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching ratings" });
  }
};
export const getRatingById = async (req, res) => {
  try {
    const ratingId = req.params.id;
    const rating = await ratingService.getRatingById(ratingId);
    if (!rating) {
      return res.status(404).json({ message: "Rating not found" });
    }
    res.status(200).json(rating);
  } catch (error) {
    res.status(500).json({ message: "Error fetching rating" });
  }
};
export const createRating = async (req, res) => {
  try {
    const newRating = req.body;
    const createdRating = await ratingService.createRating(newRating);
    res.status(201).json(createdRating);
  } catch (error) {
    res.status(500).json({ message: "Error creating rating" });
  }
};
export const updateRating = async (req, res) => {
  try {
    const ratingId = req.params.id;
    const updatedRating = req.body;
    const rating = await ratingService.updateRating(ratingId, updatedRating);
    if (!rating) {
      return res.status(404).json({ message: "Rating not found" });
    }
    res.status(200).json(rating);
  } catch (error) {
    res.status(500).json({ message: "Error updating rating" });
  }
};
export const deleteRating = async (req, res) => {
  try {
    const ratingId = req.params.id;
    const deletedRating = await ratingService.deleteRating(ratingId);
    if (!deletedRating) {
      return res.status(404).json({ message: "Rating not found" });
    }
    res.status(200).json({ message: "Rating deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting rating" });
  }
};
