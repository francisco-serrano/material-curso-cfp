class DecodedImage {
    private image: string;

    constructor(image: string) {
        this.image = image;
    }

    public toString(): string {
        return this.image + ": is decoded";
    }
}

interface ImageReader {
    getDecodeImage(): DecodedImage;
}


class GifReader implements ImageReader {
    private decodedImage: DecodedImage;

    constructor(image: string) {
        this.decodedImage = new DecodedImage(image);
    }

    public getDecodeImage(): DecodedImage {
        return this.decodedImage;
    }
}

class JpegReader implements ImageReader {
    private decodedImage: DecodedImage;

    constructor(image: string) {
        this.decodedImage = new DecodedImage(image);
    }

    public getDecodeImage(): DecodedImage {
        return this.decodedImage;
    }
}

let args: string[] = process.argv.slice(2);

let decodedImage: DecodedImage;
let reader: ImageReader = null;

let image: string = args[0];
let format: string = image.substring(image.indexOf('.') + 1, (image.length));

if (format === "gif") 
    reader = new GifReader(image);

if (format === "jpeg") 
    reader = new JpegReader(image);

if (reader != null)
    throw new Error("COMPLETAR");

decodedImage = reader.getDecodeImage();

console.log(decodedImage);