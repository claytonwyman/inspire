import ImageService from "./image-service.js";

var _imageService = new ImageService()

function drawImage() {
    console.log("THE IMAGE IS:", _imageService.Image)

	document.getElementById("bg-image").setAttribute('style', "background-image:" + "url(" + _imageService.Image.pic + ")");

	console.log("BG Applied")
}

export default class ImageController {

    constructor() {
		_imageService.addSubscriber('image', drawImage)
		_imageService.getImage()
	}
}

