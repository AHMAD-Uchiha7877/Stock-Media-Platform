/**
 * @license AHMAD - All rights reserved
 * @author Muhammad Ahmad <contact muhammadahmadmughal0987@gmail.com>
 */
"use strict";
/**
        1. Select the root HTML element.
        2. Determine if the user's system prefers a dark color scheme by default.
        3. Check if a theme preference is stored in sessionStorage:
        - If a preference exists, set the theme of the root HTML element to the stored value.
        - If no preference is stored, set the theme based on the system's preferred color scheme.
        4. Define a function to toggle between light and dark themes:
        - Retrieve the current theme from sessionStorage.
        - Toggle the theme and store it in sessionStorage.
        - Set the dataset theme attribute of the root element based on the toggled theme.
        5. When the window and all its resources finish loading:
        - Select the button responsible for toggling themes using its data attribute.
        - Add a click event listener to the theme button to execute the theme toggling function.

 */

/**
 The dataset property of an HTML element provides access to all custom data attributes (data-*) set on that element. It allows JavaScript to read and modify these custom data attributes directly through a simple key-value (e.g data-* attributes,#id,.class) interface. This enables developers to store additional information within HTML elements for scripting purposes without using inline JavaScript.
 */

//selects the root element for the  data-theme

// /**{RootElement} */ <html lang="en" data-theme="light">
const $HTML = document.documentElement;

// Determine if the user's system prefers a dark color scheme by default setting///
let /**{Boolean} */ isDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

/**
     sessionStorage is similar to localStorage, but data stored in it is cleared when the page    session ends.   
     A page session lasts as long as the tab or browser window remains open and persists over page reloads and restores. Each tab/window maintains its own separate sessionStorage. 
   */

/**The dataset read-only property of the HTMLElement interface provides read/write access to custom data attributes (data-*) on elements.  */

// Check if a theme preference is stored in sessionStorage
if (sessionStorage.getItem("theme")) {
  // If a theme preference exists, set the theme of the root HTML element to the stored value
  //here theme is from <html lang="en" data-theme="light">  data-theme  in dataset we take word  only after '-'
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  // If no theme preference is stored, set the theme of the root HTML element based on the system's preferred color scheme
  if (isDark) {
    // If the system prefers a dark color scheme, set the theme to "dark"
    $HTML.dataset.theme = "dark";
  } else {
    // If the system prefers a light color scheme, set the theme to "light"
    $HTML.dataset.theme = "light";
  }
}

// Function to toggle between light and dark theme
const changeTheme = function () {
  // Retrieve the current theme from session storage
  isDark = sessionStorage.getItem("theme");

  // Check if the current theme is "dark"
  if (isDark === "dark") {
    // If the current theme is "dark", set it to "light" and store in session storage
    sessionStorage.setItem("theme", "light");
    // Set the dataset theme attribute of the root element to "light"
    $HTML.dataset.theme = "light";
  } else {
    // If the current theme is not "dark" (presumably "light"), set it to "dark" and store in session storage
    sessionStorage.setItem("theme", "dark");
    // Set the dataset theme attribute of the root element to "dark"
    $HTML.dataset.theme = "dark";
  }
};

// When the window and all its resources finish loading, execute the following function
window.addEventListener("load", () => {
  // Select the button responsible for toggling themes using its data attribute
  const $themeBtn = document.querySelector("[data-theme-toggler]");

  // Add a click event listener to the theme button
  $themeBtn.addEventListener("click", changeTheme);
});
