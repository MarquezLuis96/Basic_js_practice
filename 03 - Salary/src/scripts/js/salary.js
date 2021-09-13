//COUNTRIES LIST
const colombia = [];
const uruguay = [];
const venezuela = [];

//CAPITALIZE
function capitalize(personName) {
    var lower = personName.toLowerCase();
    var first = personName.charAt(0).toUpperCase();
    var capitalized = first + lower.slice(1);
    return capitalized;
}

//ADD TO
function addTo(countryName, personName, personSalary) {
    eval(countryName.toLowerCase()).push(
        {
            name: capitalize(personName),
            salary: parseInt(personSalary)
        }
    );
}

//EVENT LISTENER AND ADDING TO A LIST
var buttonAdd = document.getElementById("buttonAdd");
buttonAdd.addEventListener('click', function(event) {
    var pcountry = document.getElementById("personCountryList").value;
    var pname = document.getElementById("personName").value;
    var psalary = document.getElementById("personSalary").value;
    addTo(pcountry, pname, psalary);
});