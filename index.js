document.getElementById("display-el")
document.getElementById("length-el")
document.getElementById("volume-el")
document.getElementById("mass-el")


let length = document.getElementById("length-el")
let volume = document.getElementById("volume-el")
let mass = document.getElementById("mass-el")



function lengthCalc() {
    
    meterOutput = document.getElementById("display-el").value * 3.2808
    feetOutput = document.getElementById("display-el").value * 0.3048
    length.textContent =  document.getElementById("display-el").value + " meters = " + meterOutput.toFixed(3) + " feet (foot) | " + document.getElementById("display-el").value + " feet (foot) = " + feetOutput.toFixed(3) + " meters"
}
function volumeCalc() {
    literOutput = document.getElementById("display-el").value * 0.2641
    gallonsOutput = document.getElementById("display-el").value * 3.7854
    volume.textContent =  document.getElementById("display-el").value + " liters = " + literOutput.toFixed(3) + " gallons | " + document.getElementById("display-el").value + " gallons = " + gallonsOutput.toFixed(3) + " liters"
}
function massCalc() {
    kiloOutput = document.getElementById("display-el").value * 3.2808
    poundOutput = document.getElementById("display-el").value * 0.3048
    mass.textContent = document.getElementById("display-el").value + " kilos = " + kiloOutput.toFixed(3) + " pounds | " + document.getElementById("display-el").value + " pounds = " + poundOutput.toFixed(3) + " kilos"
}