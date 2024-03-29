import Image from "../../models/image.js"

// @ts-ignore
const imageApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	image: {}
}

let _subscribers = {
	image: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}


export default class ImageService {
	get Image() {
		return _state.image
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getImage() {
		console.log('Fetching an image')
		imageApi.get().then(res => {
			_setState('image', new Image(res.data))
		})
	}
}
