export const isArray = (arr) => {
	return Object.prototype.toString().call(arr) === '[object Array]';
};

export const getMax = (arr) => {
	return Math.max.apply(null,arr);
};

export const nextId = (arr) => {
	let nextId = arr.length ? getMax(arr) + 1 : 1;
	return nextId;
};

export const arrayUnique = (arr) => {
	return arr.filter((item, pos) => {
		return arr.indexOf(item) === pos;
	});
};

export const copyArray = (arr) => {
	return arr.map(item => item);
};

export const arrayPushUnique = (item, arr) => {
	arr.push(item);
	return arrayUnique(arr);
};

export const arrayRemove = (item, arr) => {
	let uniqueArray = arrayUnique(arr);
	let pos = uniqueArray.indexOf(item);
	if(pos > -1){
		uniqueArray.splice(pos,1);
	}
	return uniqueArray;
};