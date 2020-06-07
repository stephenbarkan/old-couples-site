const htmlmin = require("html-minifier");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = eleventyConfig => {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);



  eleventyConfig.addFilter("markdownify", markdownString => {
    const MarkdownIt = require("markdown-it")
    const markdownItClass = require('@toycode/markdown-it-class')

    const mapping = { 
      ol: 'space-y-1',
      li: ['flex', 'items-baseline', 'py-2', 'space-x-4', 'font-light']
    }

    const md = MarkdownIt({
      html: true,
      linkify: true,
      typographer: true
    })
      .use(markdownItClass, mapping)

    return md.render(markdownString)
  })

  // Minify our HTML
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  // Layout aliases
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk")
  eleventyConfig.addLayoutAlias("interior", "layouts/interior.njk")

  // Include our static assets
  eleventyConfig.addPassthroughCopy("site/images")
  eleventyConfig.addPassthroughCopy("site/webfonts")

  // eleventyConfig.addCollection("recipes", collection => {
  //   return collection.getFilteredByTag("recipe").reverse();
  // })

  return {
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,

    dir: {
      input: "site",
      output: "dist",
      includes: "includes",
      data: "data"
    }
  }
}