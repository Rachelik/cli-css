var nodeDoc = process.argv;

var fs = require('fs');

const convertHexToRgb = require("./hextorgb.js");
const convertHexToHsl = require("./hextohsl.js");
const convertRgbToHex = require("./rgbtohex.js");
const convertRgbToHsl = require("./rgbtohsl.js");

//Part 3 separate your conversion functions out into separate module files (convert to HSL as well)
//Part 4 able to  take in a number of colors that is, to convert colors.txt file too
if (nodeDoc[2] === "hex") {
    for(var i = 3; i < nodeDoc.length; i++) {

        var red = convertHexToRgb.hexToRgb(nodeDoc[i]).r;
        var green = convertHexToRgb.hexToRgb(nodeDoc[i]).g;
        var blue = convertHexToRgb.hexToRgb(nodeDoc[i]).b;

        //convert hex to rgb
        var colorInRgb = "rgb( " + red + ", " + green + ", " + blue + " )";

        //convert hex to hsl
        var colorInHsl = convertHexToHsl.hexToHsl(nodeDoc[i]);

        console.log(nodeDoc[i]);
        console.log(`\x1b[31m%s\x1b[0m`, colorInRgb);
        console.log(`\x1b[35m%s\x1b[0m`, colorInHsl);
    };
} else if (nodeDoc[2] === "rgb") {
    var red = parseInt(nodeDoc[3]);
    var green = parseInt(nodeDoc[4]);
    var blue = parseInt(nodeDoc[5]);
    var colorInHex = convertRgbToHex.rgbToHex(red, green, blue);
    var colorInHsl = convertRgbToHsl.rgbToHsl(red, green, blue);
    console.log(`\x1b[31m%s\x1b[0m`, colorInHex);
    console.log(`\x1b[35m%s\x1b[0m`, colorInHsl);
};