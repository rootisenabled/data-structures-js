class List {
	constructor(listSize, pos, length, dataStore) {
		this.listSize = 0;
		this.pos = 0;
		this.dataStore = [];
	}

	append(elem) {
		this.dataStore.push(elem);
		this.listSize++;
	}

	remove(elem) {
		let index = this.dataStore.indexOf(elem);
		if (~index) {
			this.dataStore.splice(index, 1);
			--this.listSize;
			return true;
		}
		return false;
	}

	length() {
		return this.listSize;
	}

	insert(elem, after) {
		let insertPos = this.dataStore.indexOf(after);
		if (~insertPos) {
			this.dataStore.splice(insertPos + 1, 0, elem);
			++this.listSize;
			return true;
		}
		return;
	}

	clear() {
		delete this.dataStore;
		this.dataStore = [];
		this.listSize = this.pos = 0;
	}

	contains(elem) {
		return ~this.dataStore.indexOf(elem) ? true : false;
	}

	front() {
		this.pos = 0;
	}

	end() {
		this.pos = this.listSize - 1;
	}

	prev() {
		if (this.pos > 0)
			--this.pos;
	}

	next() {
		if (this.pos < this.listSize - 1)
			++this.pos;
	}

	currentPos() {
		return this.pos;
	}

	moveTo(position) {
		this.pos = position;
	}

	getElement() {
		return this.dataStore[this.pos];
	}
}