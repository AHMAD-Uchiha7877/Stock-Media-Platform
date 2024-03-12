/**
 * @license AHMAD - All rights reserved
 * @author Muhammad Ahmad <contact muhammadahmadmughal0987@gmail.com>
 */

/**
 * convert Object to Url
 * @param {Object} urlObj  url object
 * @returns url string
 *
 */

export const urlEncode = (urlObj) => {
    // Check if the provided object is valid
    if (typeof urlObj !== "object" || urlObj === null) {
      throw new Error("Invalid input: urlObj must be a non-null object");
    }
  
    // Encode the object into a query string
    const queryString = Object.entries(urlObj)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join("&");
  
    return queryString;
  };
  