const Formulas = {
RadiusDiameter: (x) => x*2,
DiameterRadius: (x) => x/2,
RadiusCircumference: (x) => (x*2)*Math.PI,
CircumferenceRadius: (x) => x/(2*Math.PI),
RadiusArea: (x) => Math.PI * (x*x),
AreaRadius: (x) => Math.sqrt(x/Math.PI),
DiameterCircumference: (x) => x*Math.PI,
CircumferenceDiameter: (x) => x/Math.PI,
DiameterArea: (x) => Math.PI * ((x/2)**2),
AreaDiameter: (x) => Math.sqrt((4*x)/Math.PI),
CircumferenceArea: (x) => (x*x)/(4*Math.PI),
AreaCircumference: (x) => Math.sqrt(x*Math.PI) * 2,

SurfaceAreaHeightVolume: (x,y) => 
SurfaceAreaDiameter: (x) => 
SurfaceAreaHeight: (x) => 
VolumeSurfaceArea: (x) => 
VolumeDiameter: (x) => 
VolumeHeight: (x) => 
DiameterSurfaceArea: (x) => 
DiameterVolume: (x) => 
DiameterHeight: (x) => 
HeightSurfaceArea: (x) => 
HeightVolume: (x) => 
HeightDiameter: (x) => 
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

function screenthing(event){
  if (event.target.tagName === 'SELECT' | event.target.id == 'textinput') {
    if (inputselect.value == solveselect.value){
      SolutionText.innerHTML = 1
      return
    }
    let newstring = [inputselect.value, solveselect.value].join('')
    console.log(newstring)
    let number = Formulas[newstring](Textinput.value)
    console.log(number)
    SolutionText.innerHTML = number.toString().replace(/e\+(\d+)/, 'x10^$1')
    console.log(SolutionText.innerHTML)
  }
}
document.addEventListener('change', function(event) {
  if (event.target.tagName === 'SELECT') {
    screenthing(event)
  }
});

Textinput.addEventListener('input', function(event) {
  Textinput.value = Textinput.value.replace(/[^0-9.]+|(?<=\..*)\./g, "")
  screenthing(event)
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

  inputselect.innerHTML = ''
  solveselect.innerHTML = ''

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
      InsertDivInDiv(inputselect, "option", "SurfaceArea", "Surface Area")
      InsertDivInDiv(inputselect, "option", "Volume", "Volume")
      InsertDivInDiv(inputselect, "option", "Diameter", "Circumference")
      InsertDivInDiv(inputselect, "option", "Height", "Area")

      InsertDivInDiv(solveselect, "option", "SurfaceArea", "Surface Area")
      InsertDivInDiv(solveselect, "option", "Volume", "Volume")
      InsertDivInDiv(solveselect, "option", "Diameter", "Circumference")
      InsertDivInDiv(solveselect, "option", "Height", "Area")
    default:
      break;
  }
}

