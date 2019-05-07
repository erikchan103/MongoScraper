var cheerio = require("cheerio");
var axios = require("axios");

axios.get("https://www.nytimes.com").then(function (response) {
    var $ = cheerio.load(response.data);
    var articles = [];
    $(".css-8atqhb").each(function (i, element) {
        var head = $(this).children(".esl82me0").text().trim();
        var sum = $(this).children(".e1n8kpyg0").text().trim();
        var dataToAdd={
            headline:head,
            summary:sum
        }
        articles.push(dataToAdd)
    });
    console.log(articles);
});
