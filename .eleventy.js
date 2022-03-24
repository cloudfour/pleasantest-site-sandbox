module.exports = function (eleventyConfig) {
  // Copy over various static files
  eleventyConfig.addPassthroughCopy(
    "src/**/*.(gif|ico|jpg|png|svg|woff|woff2)"
  );

  // Refresh without re-building for Rollup JS changes
  eleventyConfig.setBrowserSyncConfig({
    files: ["dist/**/*.js", "dist/**/*.css"],
  });

  // Collections by status

  const sortByDate = (a, b) => a.date - b.date;

  eleventyConfig.addCollection("approved", function (collectionApi) {
    return collectionApi
      .getAll()
      .filter((item) => {
        return (
          "status" in item.data &&
          item.data.status.trim().toLowerCase() === "approved"
        );
      })
      .sort(sortByDate);
  });

  eleventyConfig.addCollection("archived", function (collectionApi) {
    return collectionApi
      .getAll()
      .filter((item) => {
        return (
          "status" in item.data &&
          item.data.status.trim().toLowerCase() === "archived"
        );
      })
      .sort(sortByDate);
  });

  eleventyConfig.addCollection("review", function (collectionApi) {
    return collectionApi
      .getAll()
      .filter((item) => {
        return (
          "status" in item.data &&
          item.data.status.trim().toLowerCase() === "review"
        );
      })
      .sort(sortByDate);
  });

  eleventyConfig.addCollection("wip", function (collectionApi) {
    return collectionApi
      .getAll()
      .filter((item) => {
        const status = item.data.status || "wip";

        return status.trim().toLowerCase() === "wip";
      })
      .sort(sortByDate);
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
