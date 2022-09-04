require("dotenv").config();
const { AssetCache } = require("@11ty/eleventy-cache-assets");
const Airtable = require("airtable");

// You configure here…
const airtableBaseId = "appZAykA0vRAQ2I6e";
const airtableTable = "news";
const airtableTableView = "Main";
const assetCacheId = "airtableCMS";

var base = new Airtable({ apiKey: process.env.AIRTABLE_API }).base(
  airtableBaseId
);

module.exports = () => {
  let asset = new AssetCache(assetCacheId);
  
  // Cache the data in 11ty for one day
  if (asset.isCacheValid("1m")) {
    console.log("Serving airtable data from the cache…");
    return asset.getCachedValue();
  }

  // The 11ty cache is cold… so we need to talk to Airtable
  return new Promise((resolve, reject) => {
    let allDatasets = [];

    base(airtableTable)
      .select({
        view: airtableTableView,
        // optional sorting params
        sort: [{ field: "article_date", direction: "desc" }],
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach((record) => {
            allDatasets.push({
                "id": record.get('id'),
                "date": record.get('article_date'),
                "title": record.get('title'),
                "body": record.get('body'),
                "source": record.get('source'),
                "links": [
                    {
                        "href": record.get('link_URL'),
                        "linkText": "Article link"
                    }],
                "image": {
                        "link": record.get('link_URL'),
                        "src": record.get('image_URL'),
                        "alt": record.get('image_alt_text'),
                        "caption": record.get('image_caption'),
                   }, 
            });
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err);
          } else {
            // Put the data into the 11ty cache
            asset.save(allDatasets, "json");
            resolve(allDatasets);
          }
        },
      );
  });
};