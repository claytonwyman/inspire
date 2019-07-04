import ImageService from "./image-service.js";

var _imageService = new ImageService()

function drawImage() {
    console.log("THE IMAGE IS:", _imageService.Image)
}

export default class ImageController {

    constructor() {
		_imageService.addSubscriber('image', drawImage)
		_imageService.getImage()
	}
}

