function flipCase(str) {
	var result = "";
	for (var i = 0; i < str.length; i++) {
		var c = str.charAt(i);
		var a = c.toUpperCase();

	if (c==a) {
		result = result + c.toLowerCase(str)
}
	else {
		result = result + c.toUpperCase(str)
	
	}
}
	return result;
}

function maxWord(arr) {
	var mWord= "";
for (var i = 0; i < arr.length; i++) {
	if(mWord.length < arr[i].length) {
		mWord=arr[i];
	}

}
	return mWord;
}

function maxWordSentence(str) {
	var arr= str.split(" ");
	 var ans =maxWord(arr);
	 return ans;
}
