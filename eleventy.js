const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");

async function imageUrlShortcode(src) {
  let metadata = await Image(src, {
    widths: [800],
    formats: ["jpeg"],
    outputDir: "./dist/img/",
    urlPath: "/img/",
  });
  return metadata.jpeg[0].url;
}

async function imageShortcode(src, alt, sizes = "(min-width: 1024px) 400px, 200px") {
  let metadata = await Image(src, {
    widths: [200, 400, 800],
    formats: ["avif", "webp", "jpeg"],
    outputDir: "./dist/img/",
    urlPath: "/img/",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addAsyncShortcode("image", imageShortcode);
  eleventyConfig.addAsyncShortcode("imageUrl", imageUrlShortcode);
  // Add plugins
    eleventyConfig.addPlugin(sitemap, {
        sitemap: {
        hostname: "https://www.toscana49.com",
        },
    });
    eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Passthrough copy for assets
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("dist/css/styles.css");

    return {
        pathPrefix: "/",
        dir: {
        input: "src",
        output: "dist",
        includes: "_includes",
        data: "_data",
        },
        templateFormats: ["njk", "md", "html"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};