import { makeAutoObservable } from 'mobx';

class store {
	photos = [];
	constructor() {
		makeAutoObservable(this);
	}
	getPhotos(items) {
		this.photos = items;
	}
}

export default new store();
