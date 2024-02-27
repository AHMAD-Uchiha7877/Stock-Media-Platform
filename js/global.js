/**
 * @license AHMAD - All rights reserved
 * @author Muhammad Ahmad <contact muhammadahmadmughal0987@gmail.com>
 */

"use strict";

/**
 * Import
 */
// The code imports the ripple function from the ripple.js
import { ripple } from "../js/utils/ripple.js";

/**
 *      Header on-Scroll State
 */

const $header = document.querySelector("[data-header]");
/**
  the "active" class is applied to the ".top-app-bar" element, it changes the background color of the element to the value of the "--surface-container" CSS variable.
 */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    $header.classList.add("active");
  } else {
    $header.classList.remove("active");
  }
});

/**
 * Add ripple effect
 */
//It selects all elements with the attribute data-ripple using document.querySelectorAll("[data-ripple]").
const $rippleElements = document.querySelectorAll("[data-ripple]");
//It iterates over each selected element using forEach and applies the ripple function to each element (ripple funtion is in ripple.js file).
$rippleElements.forEach(($rippleElement) => ripple($rippleElement));

/**
 * Filter Funtionality
 */

window.filterObj = {};
