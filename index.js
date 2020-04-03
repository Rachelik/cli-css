var nodeDoc = process.argv;

const convertHexToRgb = require("./hextorgb.js");
const convertHexToHsl = require("./hextohsl.js");
const convertRgbToHex = require("./rgbtohex.js");
const convertRgbToHsl = require("./rgbtohsl.js");

//Part 3 separate your conversion functions out into separate module files
    if (nodeDoc[2] === "hex") {
        var red = convertHexToRgb.hexToRgb(nodeDoc[3]).r;
        var green = convertHexToRgb.hexToRgb(nodeDoc[3]).g;
        var blue = convertHexToRgb.hexToRgb(nodeDoc[3]).b;
        var colorInRgb = "rgb( " + red + ", " + green + ", " + blue + " )"
        console.log(colorInRgb);

        var colorInHsl = convertHexToHsl.hexToHsl(nodeDoc[3]);
        console.log(colorInHsl);


        // [color; font-weight]
        // 31 red, 32 green, 34 blue, 38 black, 37 grey
        // 1 is bold, 2 is normal, 3 is italic, 4 underline...
        console.log(`\x1b[31m%s\x1b[0m`, colorInRgb);

    } else if (nodeDoc[2] === "rgb") {
        var red = parseInt(nodeDoc[3]);
        var green = parseInt(nodeDoc[4]);
        var blue = parseInt(nodeDoc[5]);
        var colorInHex = convertRgbToHex.rgbToHex(red, green, blue);
        console.log(`\x1b[31m%s\x1b[0m`, colorInHex);

        var colorInHSL = convertRgbToHsl.rgbToHsl(red, green, blue);
        console.log(colorInHSL);
    };

// var colors = require('./colors.txt');

// var func = function(data) {
//     console.log('Line: ' + data);
// };

// var readlines = function(input, func) {
//     var remaining = '';

//     input.on('data', function(data) {
//         remaining += data;

//         var index = remaining.indexOf('\n');
//         while (index > -1) {
//             var line = remaining.substring(0, index);
//             remaining = remaining.substring(index + 1);
//             func(line);
//             index = remaining.indexOf('\n');
//         };
//     });

//     input.on('end', function() {
//         if (remaining.length > 0) {
//             func(remaining);
//         };
//     });
// };

// var input = colors.createReadStream('colors.txt');
// var dataHex = readLines(input, func);