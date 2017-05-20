
module.exports = function valueAt (array, index, newValue, isCloned){

	isCloned = typeof isCloned === 'undefined' ? true : isCloned;

	//if a negative value is given, count from the end of the array
	var newIndex = index < 0 ? array.length + index : index;

	if (typeof newValue !== 'undefined') {
		var newArray = isCloned ? array.slice(0) : array;
		newArray[newIndex] = newValue;
		return newArray;

	} else {
		return array[newIndex];
	}

}
