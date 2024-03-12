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
import { addEventOnElements } from "../js/utils/event.js";

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
 * Navbar toggler for mobile screen
 */

// Select the NodeList of navTogglers
const $navTogglers = document.querySelectorAll("[data-nav-toggler]");

// Select the navBar and scrim elements
const $navBar = document.querySelector("[data-navigation]");
const $scrim = document.querySelector("[data-scrim]");

// Add event listeners to each element in the $navTogglers NodeList
$navTogglers.forEach(($navToggler) => {
  $navToggler.addEventListener("click", function () {
    // Toggle the 'show' class on the navBar element
     $navBar.classList.toggle("show");
    // Toggle the 'active' class on the scrim element
    $scrim.classList.toggle("active");
  });
});

/**
 * Filter Funtionality
 */

window.filterObj = {};
