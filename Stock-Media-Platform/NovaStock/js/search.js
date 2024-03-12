/**
 * @license AHMAD - All rights reserved
 * @author Muhammad Ahmad <contact muhammadahmadmughal0987@gmail.com>
 */

/**
 * Import
 */

import { ripple } from "../js/utils/ripple.js";
import { addEventOnElements } from "../js/utils/event.js";
import { segment } from "../js/segment_btn.js";
import { updateUrl } from "../js/utils/updateUrl.js";

const $searchTogglers = document.querySelectorAll("[data-search-toggler]");

const $searchView = document.querySelector("[data-search-view]");
/**
 * If the show class is not present, it is added, and if it's already present, it is removed.
 */
addEventOnElements($searchTogglers, "click", () => {
  $searchView.classList.toggle("show");
});

/**
 *  Search Clear
 */

const /**NodeElement */ $searchField = document.querySelector(
    "[data-search-field]"
  );
const /**NodeElement */ $searchClearBtn = document.querySelector(
    "[data-search-clear-btn]"
  );
$searchClearBtn.addEventListener("click", () => ($searchField.value = ""));

/**
 * Search Type-->images/videos
 */
// DIV containing the buttons (photos-Button, Video-Button)
const $searchSegment = document.querySelector("[data-segment='search']");
// This selects the currently selected segment button
// (photos-Button)
const $searchTypeSegment = document.querySelector(
  "[data-segment-btn].selected"
);

//data-segement value is assigning to window.searchtype
window.searchType = $searchTypeSegment.dataset.segmentValue;

segment($searchSegment, (segmentValue) => (window.searchType = segmentValue));

/**
 * Search Submit button
 */

// Select the Search Submit Button
const /**NodeElement */ $searchSubmitBtn =
    document.querySelector("[data-search-btn]");

// Add event listener to the Search Submit Button
$searchSubmitBtn.addEventListener("click", function () {
  // Retrieve and trim the search input value
  const searchValue = $searchField.value.trim();
  // Update the search history with the search value
  updateSearchHistory(searchValue);

  window.filterObj.query = searchValue;
  updateUrl(window.filterObj, window.searchType);
});

/**
 * Submit search when press 'Enter' Key
 */

$searchField.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13 && $searchField.value.trim()) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with type="submit"
    $searchSubmitBtn.click();
  }
});
/**
 * Search History
 */
/**
 * By storing this history in local storage, you ensure that the data persists even if the user closes the browser or navigates away from the page.
 */
// Initialize searchHistory object
let searchHistory = { items: [] };

// Load search history from local storage or initialize if not found
// Check if search history exists in local storage
if (window.localStorage.getItem("search_history")) {
  //If a key named "search_history" exists in local storage, it retrieves the value associated with that key using window.localStorage.getItem("search_history").
  // If exists, parse and assign to searchHistory variable
  searchHistory = JSON.parse(window.localStorage.getItem("search_history"));
} else {
  // If not exists, initialize searchHistory and store it in local storage
  // initializing an empty history if none exists.
  window.localStorage.setItem("search_history", JSON.stringify(searchHistory));
}

// Define the function to update search history
const updateSearchHistory = (searchValue) => {
  /**
   * If the searched value is already present in the search   list,
   * then remove it and add the search value at the beginning of the search history list.
   *This ensures that the most recent search is at the top of the search history.
   */
  if (searchHistory.items.includes(searchValue)) {
    // Delete the search value from the search history
    //indexOF found the index of this element and 1 is passed as the number of elements to remove, so only the element at that index is removed.
    searchHistory.items.splice(searchHistory.items.indexOf(searchValue), 1);
  }
  //if search value is not exist then
  // Add the search value at the beginning of the search
  searchHistory.items.unshift(searchValue);

  // Save the search history to local storage
  //setItem(keyName, keyValue)
  window.localStorage.setItem("search_history", JSON.stringify(searchHistory));
};

/**
 * Render search history items in search list
 */

// Retrieve the list of search history items
const $searchList = document.querySelector("[data-search-list]");

// Get the length of the search history
const historyLength = searchHistory.items.length;

// Iterate over the search history items and limit to 5 items
for (let i = 0; i < historyLength && i < 5; i++) {
  // Create a new button element for each search history item
  const /**{NodeElement} */ $listItem = document.createElement("button");
  $listItem.classList.add("list-item");

  // Set the inner HTML of the button with search history item  list this inner HTML using for the styling on the classess
  $listItem.innerHTML = `
  <span
    class="material-symbols-outlined leading-icon"
    aria-hidden="true">history</span>
  
    <span class="body-large text">${searchHistory.items[i]}</span>
  
    <div class="state-layer"></div>
  `;
  //ripple effect om item
  ripple($listItem);

  $listItem.addEventListener("click", function () {
    //this refers to the current element that triggered the click event, which is the $listItem button
    //this.children[1].textContent-->second child of the  list item
    //<span class="body-large text">${searchHistory.items[i]}</span>

    // When a search history item is clicked, update the search field value
    // with the text content of the second child element of the clicked list item.
    $searchField.value = this.children[1].textContent;

    // Simulate a click event on the search submit button to trigger a search
    // based on the selected search history item.
    $searchSubmitBtn.click();
  });

  // Append the button to the search list
  $searchList.appendChild($listItem);
}
