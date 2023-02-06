// User Interface Logic

function hideResults() {
  document.getElementById("Sharp").setAttribute("class", "hidden");
  document.getElementById("JavaS").setAttribute("class", "hidden");
  document.getElementById("Python").setAttribute("class", "hidden");
  document.getElementById("Ruby").setAttribute("class", "hidden");
}

    

window.onload = function() {
  hideResults();
  
  let form= document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const radioS1 = parseInt(document.querySelector('input[name=q1]:checked').value);
    const radioS2 = parseInt(document.querySelector('input[name=q2]:checked').value);
    const radioS3 = parseInt(document.querySelector('input[name=q3]:checked').value);
    const radioS4 = parseInt(document.querySelector('input[name=q4]:checked').value);
    const radioS5 = parseInt(document.querySelector('input[name=q5]:checked').value);
    console.log(radioS1)

      const radioSelection = Math.round(radioS1 + radioS2 + radioS3 + radioS4 + radioS5) / 5;
      if (radioSelection === 1) {
        document.getElementById("Sharp").removeAttribute("class");
      } else if (radioSelection === 2) {
        document.getElementById("JavaS").removeAttribute("class");
      } else if (radioSelection === 3) {
        document.getElementById("Python").removeAttribute("class");
      } else if (radioSelection === 4) {
        document.getElementById("Ruby").removeAttribute("class");
      }
  };
};

// window.addEventListener("load", function() {
//   document.getElementById("radio-form").addEventListener("submit", handleRadio);
// })