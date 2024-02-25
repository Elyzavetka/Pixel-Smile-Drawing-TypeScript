// create the image data
var imageWidth = 20;
var imageHeight = 10;
var imageData = createImageData();
// draw head
drawRectangle(0, 0, 20, 10);
//browns
drawHorizontalLine(6, 2, 3);
drawHorizontalLine(11, 2, 3);
// eyes
drawDot(7, 3);
drawDot(12, 3);
// smile
drawDot(4, 5);
drawHorizontalLine(4, 6, 12);
drawDot(15, 5);
// output what we drew to the console
outputImage();
function drawRectangle(x, y, width, height) {
    // top
    drawHorizontalLine(x, y, width);
    // bottom
    drawHorizontalLine(x, y + height - 1, width);
    // left
    drawVerticalLine(x, y, height);
    // right
    drawVerticalLine(x + width - 1, y, height);
}
function drawHorizontalLine(x, y, length) {
    for (var i = 0; i < length; i++) {
        drawDot(x + i, y);
    }
}
function drawVerticalLine(x, y, length) {
    for (var i = 0; i < length; i++) {
        drawDot(x, y + 1);
    }
}
function drawDot(x, y) {
    if (isPointInImage(x, y)) {
        imageData[y * imageWidth + x] = true;
    }
}
/**
 * Gets if the provided point is in the image.
 * @param x - The horizontal position within
 * the image.
 * @param y - The vertical position within
 * the image.
 */
function isPointInImage(x, y) {
    return x >= 0 && x < imageWidth && y >= 0 && y < imageHeight;
}
/**
 * Outputs the image data state to the console.
 * @param onChar - Character to render an
 * "on" pixel with.
 * @param offChar - Character to render an
 * "off" pixel with.
 */
function outputImage(onChar, offChar) {
    if (onChar === void 0) { onChar = "X"; }
    if (offChar === void 0) { offChar = " "; }
    var text = "";
    for (var i = 0; i < imageData.length; i++) {
        if (i > 0 && i % imageWidth === 0) {
            text += "\n"; // new line
        }
        text += imageData[i] ? onChar : offChar;
    }
    console.log(text);
}
/**
 * Creates an array of booleans where a pixel
 * is "on" when the value is `true` and "off"
 * when the value is `false`.
 */
function createImageData() {
    var length = imageWidth * imageHeight;
    var imageData = new Array(length);
    for (var i = 0; i < length; i++) {
        imageData[i] = false;
    }
    return imageData;
}
