/**
 * @license AHMAD - All rights reserved
 * @author Muhammad Ahmad <contact muhammadahmadmughal0987@gmail.com>
 */
"use strict";

/**
 *  Add ripple effect on an element
 * @param {Node} $rippleElement Element for the ripple effect
 */

// Define the ripple function
//export funtion  global.js file
export const ripple = function ($rippleElement) {
  // Add event listener for the pointerdown event
  //This event occurs when the mouse button is pressed down over the element.
  $rippleElement.addEventListener("pointerdown", function (e) {
    // Prevent multiple ripples from appearing simultaneously
    e.stopImmediatePropagation();

    // Create a new div element for the ripple effect
    const $ripple = document.createElement("div");
    $ripple.classList.add("ripple");

    // Append the ripple element to the clicked element
    this.appendChild($ripple);

    // Define function to remove the ripple effect
    const removeRipple = (e) => {
      // Fade out the ripple effect with animations
      $ripple.animate({ opacity: 0 }, { fill: "forwards", duration: 100 });

      // Remove the ripple element from the DOM after a delay
      setTimeout(() => {
        $ripple.remove();
      }, 1000);
    };

    // Add event listeners for pointerup and pointerleave events to remove the ripple effect
    //pointerup event occurs when the user releases a pointer device (like a mouse or touchpad) while it's over an element.
    this.addEventListener("pointerup", removeRipple);
    this.addEventListener("pointerleave", removeRipple);

    // Check if the clicked element is not an icon button
    const /**{boolean} */ isNotIconButton =
        !this.classList.contains("icon-button");

    // Position and size the ripple effect based on the click position and element size
    if (isNotIconButton) {
      const rippleSize = Math.max(this.clientWidth, this.clientHeight);
      // Set the top position of the ripple effect relative to its parent element
      $ripple.style.top = `${e.layerY}px`;

      // Set the left position of the ripple effect relative to its parent element
      $ripple.style.left = `${e.layerX}px`;

      // Set the width of the ripple effect to rippleSize
      $ripple.style.width = `${rippleSize}px`;

      // Set the height of the ripple effect to rippleSize
      $ripple.style.height = `${rippleSize}px`;
    }
  });
};
