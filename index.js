var nodeDoc = process.argv;

const convertRgbToHex = require("./rgbtohex.js");
const convertHexToRgb = require("./hextorgb.js");



//Part 3 separate your conversion functions out into separate module files
if (nodeDoc[2] === "hex") {
    var red = convertHexToRgb.hexToRgb(nodeDoc[3]).r;
    var green = convertHexToRgb.hexToRgb(nodeDoc[3]).g;
    var blue = convertHexToRgb.hexToRgb(nodeDoc[3]).b;

    var conversionInRgb = "rgb( " + red + ", " + green + ", " + blue + " )"
    console.log(conversionInRgb);

    // [color; font-weight]
    // 31 red, 32 green, 34 blue, 38 black, 37 grey
    // 1 is bold, 2 is normal, 3 is italic, 4 underline...
    console.log(`\x1b[31;1;${red};${green};${blue}m%s\x1b[0m`, conversionInRgb);

} else if (nodeDoc[2] === "rgb") {
    var red = parseInt(nodeDoc[3]);
    var green = parseInt(nodeDoc[4]);
    var blue = parseInt(nodeDoc[5]);
    var conversionInHex = convertRgbToHex.rgbToHex(red, green, blue);

    console.log(conversionInHex);
    // set as red
    var rred = 255;
    var bblue = 0;
    var ggreen = 0;
    console.log(`\x1b[31;1;${red};${green};${blue}m%s\x1b[0m`, conversionInHex);
};



// this special console will create colored output