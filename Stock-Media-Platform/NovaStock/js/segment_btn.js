/**
 * @license AHMAD - All rights reserved
 * @author Muhammad Ahmad <contact muhammadahmadmughal0987@gmail.com>
 */

/**
 * Import
 */

import { addEventOnElements } from "../js/utils/event.js";

/***
 *
 */
// Define the segment function to handle segment changes
export const segment = function ($segment, callback) {
  // Select both buttons (images/videos)
  const $segmentBtns = $segment.querySelectorAll("[data-segment-btn]");
  // Currently selected segment button (photo button by default)
  let $lastSelectedSegmentBtn = $segment.querySelector(
    "[data-segment-btn].selected"
  );

  // Add click event listener to each segment button
  $segmentBtns.forEach(($btn) => {
    $btn.addEventListener("click", function () {
      // Remove 'selected' class from the last selected segment button
      $lastSelectedSegmentBtn.classList.remove("selected");
      // Add 'selected' class to the clicked segment button
      this.classList.add("selected");
      // Update the last selected segment button
      $lastSelectedSegmentBtn = this;
      // Execute the callback function with the dataset value of the clicked button
      callback(this.dataset.segmentValue);
    });
  });
};

