require('dotenv').config();
const process = require("node:process");

/**
 * Customise post types.
 * 
 * Publication presets provide default values, but these can be overridden. 
 * See: https://getindiekit.com/configuration/post-types
 * 
 * Use placeholder tokens to customise file paths and URLS.
 * See: https://getindiekit.com/configuration/post-types#path-and-url-tokens
 */ 
const postTypes = [{
  type: "note",
  name: "Note",
  post: {
    path: "posts/{yyyy}-{MM}-{dd}-{slug}.md",
    url: "{slug}",
  },
}];

module.exports = {
  /**
   * Set application options
   * 
   * These values are used to configure application behaviour.
   * See: https://getindiekit.com/configuration/#application
   */ 
  application: {
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
  ],
  /**
   * Set publication options
   * 
   * These values are used to configure application behaviour.
   * See: https://getindiekit.com/configuration/#publication
   */ 
  publication: {
    me: "https://robwatts.org",
    postTypes: postTypes,
  },
  /**
   * GitHub content store options.
   * 
   * Other content stores are available.
   * See: https://getindiekit.com/plugins/stores
   */
  "@indiekit/store-github": {
    user: "robertwatts",
    repo: "blog",
    branch: "master",
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
