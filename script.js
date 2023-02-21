function calc() {
    var a = document.getElementById("input").value;
    var b = document.getElementById("options").value;
    var calculate;

    if (b == "mili") {
        calculate = a * 25.4;
    } else if (b == "centi") {
        calculate = a * 2.54;
    } else if (b == "meter") {
        calculate = a * 0.0254;
    } else if (b == "kmeter") {
        calculate = a / 39370;
    }else if (b == "foot") {
        calculate = a / 12;
    }

    console.log(calculate);
    document.getElementById("results").innerHTML = calculate;
}