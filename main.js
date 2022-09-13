// Triangle Perimeter Assignment Start Code
document.getElementById("calculateBtn").addEventListener("click", btnClicked)

// Distance
function btnClicked() {
    let xAPoint = +document.getElementById("xA-point").value;
    let yAPoint = +document.getElementById("xA-point").value;
    let xBPoint = +document.getElementById("xB-point").value;
    let yBPoint = +document.getElementById("xB-point").value;
    let xCPoint = +document.getElementById("xC-point").value;
    let yCPoint = +document.getElementById("xC-point").value;

    // Result
    document.getElementById('resultAB').innerHTML = dist(xAPoint, yAPoint, xBPoint, yBPoint)
    document.getElementById('resultAC').innerHTML = dist(xAPoint, yAPoint, xCPoint, yCPoint)
    document.getElementById('resultBC').innerHTML = dist(xBPoint, yBPoint, xCPoint, yCPoint)
    // Perimeter Calculation
    document.getElementById('perimeter-result').innerHTML = dist(xAPoint, yAPoint, xBPoint, yBPoint) + dist(xAPoint, yAPoint, xCPoint, yCPoint) + dist(xBPoint, yBPoint, xCPoint, yCPoint)
}
// Distance Function
function dist(x1Point, y1Point, x2Point, y2Point) {
    let distance = Math.sqrt((x1Point - x2Point)**2 + (y1Point, y2Point)**2);
    return distance;
}

