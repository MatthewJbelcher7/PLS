// User Interface Logic

function hideResults() {
  document.getElementById("Sharp").setAttribute("class", "hidden");
  document.getElementById("JavaS").setAttribute("class", "hidden");
  document.getElementById("Python").setAttribute("class", "hidden");
  document.getElementById("Ruby").setAttribute("class", "hidden");
}

window.onload = function() {
  hideResults();

  document.querySelector("radio-form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const radioS1 = parseInt(document.querySelector('input[name=q1]:checked').value);
    const radioS2 = parseInt(document.querySelector('input[name=q2]:checked').value);
    const radioS3 = parseInt(document.querySelector('input[name=q3]:checked').value);
    const radioS4 = parseInt(document.querySelector('input[name=q4]:checked').value);
    const radioS5 = parseInt(document.querySelector('input[name=q5]:checked').value);

      function acccumulateAnswers() {
        const radioSelection = Math.round(radioS1 + radioS2 + radioS3 + radioS4 + radioS5) / 5;
        return radioSelection;
      }
    
      if (radioSelection = 1) {
        document.getElementById("Sharp").removeAttribute("class");
      } else if (radioSelection = 2) {
        document.getElementById("JavaS").removeAttribute("class");
      } else if (radioSelection = 3) {
        document.getElementById("Python").removeAttribute("class");
      } else if (radioSelection = 4) {
        document.getElementById("Ruby").removeAttribute("class");
      }

    const finalSelection = acccumulateAnswers();
    return finalSelection;
  };
};

// window.addEventListener("load", function() {
//   document.getElementById("radio-form").addEventListener("submit", handleRadio);
// })