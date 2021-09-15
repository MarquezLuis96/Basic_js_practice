//COUNTRIES LIST
const colombia = [];
const uruguay = [];
const venezuela = [
    {
        name: "Luis",
        salary: 7500
    },
    {
        name: "Maria",
        salary: 6500
    },
    {
        name: "Sofia",
        salary: 5000
    },
    {
        name: "Loly",
        salary: 7500
    },
    {
        name: "José",
        salary: 6500
    }
];

//CAPITALIZE
function capitalize(personName) {
    var lower = personName.toLowerCase();
    var first = personName.charAt(0).toUpperCase();
    var capitalized = first + lower.slice(1);
    return capitalized;
}

function bubbleSort(countryName) {
    var array = eval(countryName.toLowerCase());
    var a;
    for(var i = 0; i < array.length; i++) {
        for(var j = 0; j < array.length - 1; j++) {
            if(array[j].salary > array[j+1].salary) {
                a = array[j];
                array[j] = array[j+1];
                array[j+1] = a;
            }
        }
    }
    return array;
}

//ADD TO
function addTo(countryName, personName, personSalary) {
    eval(countryName.toLowerCase()).push(
        {
            name: capitalize(personName),
            salary: parseInt(personSalary)
        }
    );
    
    eval(countryName.toLowerCase()).sort(function(a,b) {
        return a.salary - b.salary;
    });
}

//EVENT LISTENER AND ADDING TO A LIST
var buttonAdd = document.getElementById("buttonAdd");
buttonAdd.addEventListener('click', function(event) {
    var pcountry = document.getElementById("personCountryList").value;
    var pname = document.getElementById("personName").value;
    var psalary = document.getElementById("personSalary").value;
    addTo(pcountry, pname, psalary);
});