// PART 2 Convert rgb to hex ****************************
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

module.exports.componentToHex = componentToHex;
module.exports.rgbToHex = rgbToHex;