// hex = #0033ff
PART 1 Convert hex to rgb ****************************
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

var red = hexToRgb(process.argv[3]).r;
var green = hexToRgb(process.argv[3]).g;
var blue = hexToRgb(process.argv[3]).b;

console.log("rgb( " + red + ", " + green + ", " + blue + " )");