// Triangle Perimeter Assignment Start Code
document.getElementById("calculateBtn").addEventListener("click", btnClicked)


function btnClicked() {
    // Points
    let xAPoint = +document.getElementById("xA-point").value;
    let yAPoint = +document.getElementById("xA-point").value;
    let xBPoint = +document.getElementById("xB-point").value;
    let yBPoint = +document.getElementById("xB-point").value;
    let xCPoint = +document.getElementById("xC-point").value;
    let yCPoint = +document.getElementById("xC-point").value;
    // Distance Var
    let abSide = dist(xAPoint, yAPoint, xBPoint, yBPoint)
    let acSide = dist(xAPoint, yAPoint, xCPoint, yCPoint)
    let bcSide = dist(xBPoint, yBPoint, xCPoint, yCPoint)

    // Result
    document.getElementById('resultAB').innerHTML = abSide
    document.getElementById('resultAC').innerHTML = acSide
    document.getElementById('resultBC').innerHTML = bcSide
    // Perimeter Calculation
    document.getElementById('perimeter-result').innerHTML = abSide + acSide + bcSide
}
// Distance Function
function dist(x1Point, y1Point, x2Point, y2Point) {
    let distance = Math.sqrt((x1Point - x2Point)**2 + (y1Point, y2Point)**2);
    return distance;
}

