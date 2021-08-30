document.getElementById("btn-square-area").addEventListener("click", function() {
    const initialP = "<p id='square-area-p'>Area: </p>";

    document.getElementById("square-area").innerHTML = initialP;
    var side = document.getElementById("square-side").value;

    var squareArea = Math.pow(side, 2);

    var spanResult = document.createElement("span");
    var result = document.createTextNode(squareArea + " cm.");
    spanResult.appendChild(result);

    document.getElementById("square-area-p").appendChild(spanResult);
});

document.getElementById("btn-rectangle-area").addEventListener("click", function() {
    const initialP = "<p id='rectangle-area-p'>Area: </p>";

    document.getElementById("rectangle-area").innerHTML = initialP;
    var base = document.getElementById("rectangle-base").value;
    var height = document.getElementById("rectangle-height").value;

    var rectangleArea = base * height;

    var spanResult = document.createElement("span");
    var result = document.createTextNode(rectangleArea + " cm.");
    spanResult.appendChild(result);

    document.getElementById("rectangle-area-p").appendChild(spanResult);
});

document.getElementById("btn-triangle-area").addEventListener("click", function() {
    const initialP = "<p id='triangle-area-p'>Area: </p>";

    document.getElementById("triangle-area").innerHTML = initialP;
    var base = document.getElementById("triangle-base").value;
    var height = document.getElementById("triangle-height").value;

    var triangleArea = ((base * height)/2);

    var spanResult = document.createElement("span");
    var result = document.createTextNode(triangleArea + " cm.");
    spanResult.appendChild(result);

    document.getElementById("triangle-area-p").appendChild(spanResult);
});