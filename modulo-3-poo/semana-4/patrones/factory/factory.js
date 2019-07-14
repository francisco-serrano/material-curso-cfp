var DecodedImage = /** @class */ (function () {
    function DecodedImage(image) {
        this.image = image;
    }
    DecodedImage.prototype.toString = function () {
        return this.image + ": is decoded";
    };
    return DecodedImage;
}());
var GifReader = /** @class */ (function () {
    function GifReader(image) {
        this.decodedImage = new DecodedImage(image);
    }
    GifReader.prototype.getDecodeImage = function () {
        return this.decodedImage;
    };
    return GifReader;
}());
var JpegReader = /** @class */ (function () {
    function JpegReader(image) {
        this.decodedImage = new DecodedImage(image);
    }
    JpegReader.prototype.getDecodeImage = function () {
        return this.decodedImage;
    };
    return JpegReader;
}());
var args = process.argv.slice(2);
var decodedImage;
var reader = null;
var image = args[0];
var format = image.substring(image.indexOf('.') + 1, (image.length));
if (format === "gif")
    reader = new GifReader(image);
if (format === "jpeg")
    reader = new JpegReader(image);
if (reader != null)
    throw new Error("COMPLETAR");
decodedImage = reader.getDecodeImage();
console.log(decodedImage);
