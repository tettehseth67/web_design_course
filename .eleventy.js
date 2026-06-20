module.exports = function (eleventyConfigure) {
    // 1. Explicitly watch and copy asset directories from src over to public
    eleventyConfigure.addPassthroughCopy("src/css");
    eleventyConfigure.addPassthroughCopy("src/js");

    return {
        // 2. FORCES PLAIN HTML FILES TO PROCESS TEMPLATE ENGINE INCLUDE TAGS
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",

        dir: {
            input: "src",
            output: "public"
        }
    };
};
