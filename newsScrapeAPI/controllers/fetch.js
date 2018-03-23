var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("../models");

module.exports = {
    scrape: function(req, res) {
        axios.get("http://www.echojs.com/").then(function(response) {
            var $ = cheerio.load(response.data);
            $("article h2").each(function(i, element) {
                var result = {};
                result.title = $(this)
                    .children("a")
                    .text();
                result.link = $(this)
                    .children("a")
                    .attr("href");

                db.Headline.create(result)
                    .then(function(dbHeadline) {
                        console.log(dbHeadline);
                    })
                    .catch(function(err) {
                        return res.json(err);
                    });
            });
            res.send("Scrape Complete");
        });
    },
    viewArticles: function(req, res) {
        res.render("/", "../public/index.html");
    }
};