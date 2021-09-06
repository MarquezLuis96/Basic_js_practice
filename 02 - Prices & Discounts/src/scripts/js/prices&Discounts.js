function calculateDiscountAmount(pdiscount, pprice) {
    return (((pdiscount)*(pprice))/100);
}

function calculateTaxesAmount(pTaxes, pprice) {
    return (((pTaxes)*(pprice))/100);
}

function printTotalPrice(pprice, taxesAmount, pTaxes, pdiscount, discountAmount) {
    var totalPrice = (pprice - discountAmount) + taxesAmount;
    var totalPercentaje = (100 - pdiscount) + pTaxes;
    document.getElementById("print-percentaje-finalprice").innerText = "" + totalPercentaje + "%";
    document.getElementById("print-money-finalprice").innerText = "" + totalPrice + "$";
}

function printTaxes(pTaxes, taxesAmount) {
    document.getElementById("print-percentaje-taxes").innerText = "" + pTaxes + "%";
    document.getElementById("print-money-taxes").innerText = "" + taxesAmount + "$";
}

function printDiscount(pdiscount, discountAmount) {
    document.getElementById("print-percentaje-discount").innerText = "" + pdiscount + "%";
    document.getElementById("print-money-discount").innerText = "" + discountAmount + "$";
}

function printPrice(pprice) {
    document.getElementById("print-percentaje-price").innerText = "100%";
    document.getElementById("print-money-price").innerText = "" + pprice + "$";
}

function pCalculations() {
    var pprice = document.getElementById("pprice").value;
    var pdiscount = document.getElementById("pdiscount").value;
    var pTaxes = document.getElementById("pTaxes").value;

    pprice = parseInt(pprice);
    pdiscount = parseInt(pdiscount);
    pTaxes = parseInt(pTaxes);

    var discountAmount = calculateDiscountAmount(pdiscount, pprice);
    var taxesAmount = calculateTaxesAmount(pTaxes, pprice);

    printPrice(pprice);
    printDiscount(pdiscount, discountAmount);
    printTaxes(pTaxes, taxesAmount);
    printTotalPrice(pprice, taxesAmount, pTaxes, pdiscount, discountAmount);
}