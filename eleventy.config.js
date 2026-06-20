module.exports = function (eleventyConfigure) {
    // Asset Passthrough Engines
    eleventyConfigure.addPassthroughCopy("src/css");
    eleventyConfigure.addPassthroughCopy("src/js");
    eleventyConfigure.addPassthroughCopy("src/assets/images");
    eleventyConfigure.addPassthroughCopy("src/assets/docs");

    return {
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "docs"
        }
    };
};
