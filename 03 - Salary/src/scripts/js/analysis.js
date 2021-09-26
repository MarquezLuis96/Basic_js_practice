//FUNCTION CALCULATE PROM
function calculateMean(countryToShow) {
    var sum = 0;
    eval(countryToShow).forEach(element => {
        sum += element.salary;
    });
    var mean = ((sum)/(eval(countryToShow).length)).toFixed(2);
    document.getElementById("print-mean").innerText = "" + mean;
}

//FUNCTION CALCULATE MEDIA
function calculateMedian(countryToShow) {
    if ((eval(countryToShow).length % 2) == 0) {
        var mid = parseInt((eval(countryToShow).length / 2));
        var median = eval(countryToShow);
        var medianresult = ((median[mid].salary + median[mid-1].salary)/2);
        document.getElementById("print-median").innerText = medianresult;
    }
    else {
        var mid = parseInt((eval(countryToShow).length / 2));
        var median = eval(countryToShow);
        document.getElementById("print-median").innerText = median[mid].salary;
    }
}

//FUNCTION CALCULATE MODA
function calculateMode(countryToShow) {
    /**/
}

//FUNCTION LIST NAMES & SALARIES
function listNamesAndSalaries(countryToShow) {
    var listOfNames = "";
    var listOfSalaries = "";
    eval(countryToShow).forEach((element, index) => {
        listOfNames += ("<li>" + element.name + "</li>");
        listOfSalaries += ("<li>" + element.salary + "</li>");
    });
    document.getElementById("table__names--list").innerHTML = listOfNames;
    document.getElementById("table__salary--list").innerHTML = listOfSalaries;
    calculateMean(countryToShow);
    calculateMedian(countryToShow);
    calculateMode(countryToShow);
}

//EVENT PRINT
var btnShow = document.getElementById("btn-show").addEventListener('click', function(event) {
    var countryToShow = document.getElementById("showCountrySalary").value.toLowerCase();
    listNamesAndSalaries(countryToShow);
});