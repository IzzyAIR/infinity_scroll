import { makeAutoObservable } from 'mobx';

class store {
	photos = [];
	constructor() {
		makeAutoObservable(this);
	}
	getPhotos(items) {
		this.photos.push(...items)
	}
}

export default new store();
