document.querySelector('input[name=q2]:checked').value;
document.querySelector('input[name=q3]:checked').value;
document.querySelector('input[name=q4]:checked').value;
document.querySelector('input[name=q5]:checked').value;

document.getElementById(survey).submit()

function acccumulateAnswers() {

}

function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector('input[name=q1]:checked').value;
  return radioSelection
}

window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
})