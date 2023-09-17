require('dotenv').config();
const process = require("node:process");

module.exports = {
  /**
   * Set application options
   *
   * These values are used to configure application behaviour.
   * See: https://getindiekit.com/configuration/#application
   */
  application: {
    url: "https://indiekit.robwatts.org",
    mongodbUrl: process.env.MONGO_URL,
  },
  /**
   * Add plug-ins.
   *
   * See: https://getindiekit.com/configuration/#plugins
   */
  plugins: [
    "@indiekit/store-github",
    "@indiekit/syndicator-mastodon",
    "@indiekit/preset-jekyll",
  ],
  /**
   * Set publication options
   *
   * These values are used to configure application behaviour.
   * See: https://getindiekit.com/configuration/#publication
   */
  publication: {
    locale: "en-GB",
    me: "https://robwatts.org",
    postTypes: [{
      type: "article",
      name: "Article",
      post: {
        path: "articles/{yyyy}-{MM}-{dd}-{slug}.md",
        url: "{yyyy}/{DDD}/a{n}/{slug}/"
      },
      media: {
        path: "media/{yyyy}/{DDD}/a{n}/{filename}",
        url: "{yyyy}/{DDD}/a{n}/{filename}"
      }
    }, {
      type: "note",
      name: "Note",
      post: {
        path: "notes/{yyyy}-{MM}-{dd}-{n}.md",
        url: "{yyyy}/{DDD}/n{n}/"
      }
    }, {
      type: "photo",
      name: "Photo",
      post: {
        path: "photos/{yyyy}-{MM}-{dd}-{n}.md",
        url: "{yyyy}/{DDD}/p{n}/"
      },
      media: {
        path: "media/{yyyy}/{DDD}/p{n}/{filename}",
        url: "{yyyy}/{DDD}/p{n}/{filename}"
      }
    }, {
      type: "bookmark",
      name: "Bookmark",
      post: {
        path: "bookmarks/{yyyy}-{MM}-{dd}-{slug}.md",
        url: "{yyyy}/{DDD}/b{n}/{slug}/"
      }
    }, {
      type: "reply",
      name: "Reply",
      post: {
        path: "replies/{yyyy}-{MM}-{dd}-{n}.md",
        url: "{yyyy}/{DDD}/r{n}/"
      }
    }],
    slugSeparator: "_",
    timeZone: "Europe/London",
  },
  /**
    * GitHub content store options.
    *
    * Other content stores are available.
    * See: https://getindiekit.com/plugins/stores
    */
  "@indiekit/store-github": {
    user: "robertwatts",
    repo: "robwatts-content",
    branch: "main",
    token: process.env.GITHUB_TOKEN
  },
  /**
   * Mastodon syndicator options.
   *
   * Multiple syndicators can be added.
   * See: https://getindiekit.com/plugins/syndicators
   */
  "@indiekit/syndicator-mastodon": {
    checked: true,
    forced: true,
    url: "https://social.lol",
    user: "robwatts",
    accessToken: process.env.MASTODON_ACCESS_TOKEN
  },
};
