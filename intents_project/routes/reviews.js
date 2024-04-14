const express = require('express');
const router = express.Router({ mergeParams: true });
const Campground = require("../models/campgrounds");
const Review = require("../models/review.js");
const reviews = require("../controllers/reviews.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware.js');
const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync');

router.post("/", isLoggedIn, validateReview, catchAsync(reviews.createReview));

router.delete("/:reviewId", isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports = router;