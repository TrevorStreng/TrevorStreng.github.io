/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  const textArea = document.querySelector('#input-text')
  const encryptButton = document.getElementById('encrypt-it');
  const result = document.querySelector('#result')
  const caps = document.querySelector('#all-caps')
  const twentyfour = document.getElementById('24pt')
  window.addEventListener("load", init);
  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    encryptButton.addEventListener('click', cipher);
    
  }
  
  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  const cipher = function() {
    let str = textArea.value
    let final = '';
    let hold;
    for(let i = 0; i < str.length; i++) {
      hold = str.charCodeAt(i);
      if(hold === 90) hold = 64
      if(hold === 122) hold = 96
      final += String.fromCharCode(hold+1);
    }
    if(caps.checked) {
      final = final.toUpperCase();
    }
    if(twentyfour.checked) {
      result.style.fontSize = "24pt"
    } else {
      result.style.fontSize = '12pt'
    }
    result.innerHTML = final
  }
  
})();
