/**
 * @license AHMAD - All rights reserved
 * @author Muhammad Ahmad <contact muhammadahmadmughal0987@gmail.com>
 */
"use strict";

/**
 *
 * @param {NodeList}$element Nodelist
 * @param {string}eventType  Event type eg "click
 * @param {Funtion} callback Callback funtion
 *
 */

// Define a function called addEventOnElements to add an event listener to multiple elements
export const addEventOnElements = function ($elements, eventType, callback) {
  // Iterate over each element in the NodeList $elements
  $elements.forEach(($element) =>
    // Add an event listener to each element in the NodeList
    $element.addEventListener(eventType, callback)
  );
};

