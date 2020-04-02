var nodeDoc = process.argv;

//Part 3 separate your conversion functions out into separate module files
if (nodeDoc[2] === "hex") {
    var red = hexToRgb(nodeDoc[3]).r;
    var green = hexToRgb(nodeDoc[3]).g;
    var blue = hexToRgb(nodeDoc[3]).b;
    console.log("rgb( " + red + ", " + green + ", " + blue + " )");

} else if (nodeDoc[2] === "rgb") {
    var red = parseInt(nodeDoc[3]);
    var green = parseInt(nodeDoc[4]);
    var blue = parseInt(nodeDoc[5]);
    console.log(rgbToHex(red, green, blue));
};