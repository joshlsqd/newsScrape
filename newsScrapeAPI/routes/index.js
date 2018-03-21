const express = require('express');
const router = express.Router();

const controller = require('../controllers/fetch');
const headlineController = require('../controllers/headline');

router.get("/", controller.viewArticles);
// A GET route for scraping the echojs website
router.get("/scrape", controller.scrape);

// Route for getting all Articles from the db
router.get("/articles", headlineController.getArticles);

// Route for grabbing a specific Article by id, populate it with it's note
router.get("/articles/:id", headlineController.getArticle);

// Route for saving/updating an Article's associated Note
router.post("/articles/:id", headlineController.updateArticle);

module.exports = router;