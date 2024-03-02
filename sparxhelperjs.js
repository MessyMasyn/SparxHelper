const Formulas = {
RadiusDiameter: (x) => x*2,
DiameterRadius: (x) => x/2,
RadiusCircumference: (x) => (x*2)*Math.PI,
CircumferenceRadius: (x) => x/(2*Math.PI),
RadiusArea: (x) => Math.PI * (x^2),
AreaRadius: (x) => sqrt(x/Math.PI),
DiameterCircumference: (x) => x*Math.PI,
CircumferenceDiameter: (x) => x/Math.PI,
DiameterArea: (x) => Math.PI * ((x/2)**2),
AreaDiameter: (x) => sqrt((4*x)/Math.PI),
CircumferenceArea: (x) => (x^2)/(4*Math.PI),
AreaCircumference: (x) => sqrt(x*Math.PI) * 2
}

const overlayDiv = document.getElementById("overlay-div");
const elements = document.getElementsByClassName('roundedsquare');
const elementArray = Array.from(elements);
const BackButton = document.getElementById('backbutton')
const SolutionText = document.getElementById('solution')
const Textinput = document.getElementById('textinput')
BackButton.addEventListener('click', () =>{
  overlayDiv.classList.remove("overlayactive");
})

document.addEventListener('change', function(event) {
  if (event.target.tagName === 'SELECT' | event.target.id == 'textinput') {
    if (inputselect.value == solveselect.value){
      SolutionText.innerHTML = 1
      return
    }
    let newstring = [inputselect.value, solveselect.value].join('')
    console.log(newstring)
    SolutionText.innerHTML = Formulas[newstring](Textinput.value)
  }
});

var ScreenDisplayed = false
elementArray.forEach(element => {
  element.addEventListener('click', () => {
    DisplayScreen(element.id)
  });
});
function InsertDivInDiv(container, elementType, value, innerhtml){
  let SelectOption = document.createElement(elementType);
  SelectOption.value = value; // Set the value attribute
  SelectOption.innerHTML = innerhtml; // Set the innerHTML
  container.appendChild(SelectOption); // Append the option to the select element
}
function DisplayScreen(butname){
  if (ScreenDisplayed){
    return;
  }
  const myDiv = document.getElementById('displaytitle');
  myDiv.innerHTML = butname;
  
  overlayDiv.classList.add("overlayactive");
  const inputselect = document.getElementById("inputselect");
  const solveselect = document.getElementById("solveselect")
  switch (butname) {
    case "Circle Formula":
      InsertDivInDiv(inputselect, "option", "Radius", "Radius")
      InsertDivInDiv(inputselect, "option", "Diameter", "Diameter")
      InsertDivInDiv(inputselect, "option", "Circumference", "Circumference")
      InsertDivInDiv(inputselect, "option", "Area", "Area")

      InsertDivInDiv(solveselect, "option", "Radius", "Radius")
      InsertDivInDiv(solveselect, "option", "Diameter", "Diameter")
      InsertDivInDiv(solveselect, "option", "Circumference", "Circumference")
      InsertDivInDiv(solveselect, "option", "Area", "Area")
      break;
    case "Cylinder Formula":

    default:
      break;
  }
}

