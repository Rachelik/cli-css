var nodeDoc = process.argv;

// PART 1 Convert hex to rgb ****************************
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

// PART 2 Convert rgb to hex ****************************
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

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
}