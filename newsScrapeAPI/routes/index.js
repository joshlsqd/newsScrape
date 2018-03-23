const express = require('express');
const router = express.Router();

const controller = require('../controllers/fetch');
const headlineController = require('../controllers/headline');
const noteController = require('../controllers/note');

router.get("/api", controller.viewArticles);
router.get("/api/scrape", controller.scrape);
router.get("/api/articles", headlineController.getArticles);
router.post("/api/notes/:id", noteController.createNote);
router.put("/api/articles/:headlineId", headlineController.updateArticleSave);
router.get("/api/notes/:id", noteController.getNotes);
router.delete("/api/notes/:noteId/:headlineId", noteController.deleteNote);

module.exports = router;