function handleRadio(event) {
  event.preventDefault();
  const radioS1 = parseInt(document.querySelector('input[name=q1]:checked').value);
  const radioS2 = parseInt(document.querySelector('input[name=q2]:checked').value);
  const radioS3 = parseInt(document.querySelector('input[name=q3]:checked').value);
  const radioS4 = parseInt(document.querySelector('input[name=q4]:checked').value);
  const radioS5 = parseInt(document.querySelector('input[name=q5]:checked').value);
  function acccumulateAnswers() {
    const radioSelection = (radioS1 + radioS2 + radioS3 + radioS4 + radioS5) / 5;
    return radioSelection;
  }
  
  if (radioSelection = 1) {
    removeAttribute
  }
  const finalSelection = acccumulateAnswers();
  return finalSelection;
}

window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
})