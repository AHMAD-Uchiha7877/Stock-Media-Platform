/**
 * @license AHMAD - All rights reserved
 * @author Muhammad Ahmad <contact muhammadahmadmughal0987@gmail.com>
 */

/**
 * Import
 */

import { urlEncode } from "../utils/urlEncode.js";

/**
 *
 * @param {Object} filterObj filter object
 * @param {String} searchType Search type eg. 'videos' or 'photos'
 */

export const updateUrl = (filterObj, searchType) => {
    setTimeout(() => {
      // Get the root URL of the current page
      const root = window.location.origin;
      // Encode the filter object into a query string
      const searchQuery = urlEncode(filterObj);
      // Construct the new URL with search parameters and search type
      window.location = `${root}/pages/${searchType}/${searchType}.html?${searchQuery}`;
    }, 500);
  };
