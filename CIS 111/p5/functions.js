function chToNATO(ch) {
	var ph = { 
	      "A" :["Alpha"],
	      "B" :["Bravo"],
	      "C" :["Charlie"],
	      "D" :["Delta"],
	      "E" :["Echo"],
	      "F" :["Foxtrot"],
	      "G" :["Golf"],
	      "H" :["Hotel"],
	      "I" :["India"],
	      "J" :["Juliett"],
	      "K" :["Kilo"],
	      "L" :["Lima"],
	      "M" :["Mike"],
	      "N" :["November"],
	      "O" :["Oscar"],
	      "P" :["Papa"],
	      "Q" :["Qubec"],
	      "R" :["Romeo"],
	      "S" :["Sierra"],
	      "T" :["Tango"],
	      "U" :["Uniform"],
	      "V" :["Victor"],
	      "W" :["Whisky"],
	      "X" :["Xray"],
	      "Y" :["Yankee"],
	      "Z" :["Zulu"],
	      "1" :["One"], 
	      "2" :["Two"],
	      "3" :["Three"],
	      "4" :["Four"], 
	      "5" :["Five"],
	      "6" :["Six"],
	      "7" :["Seven"],
	      "8" :["Eight"], 
	      "9" :["Nine"],
	      "0" :["Zero"],
}
   if (/^[a-zA-Z0-9]+$/.test(ch)) {
  		return ph[ch.toUpperCase()].toString()
}
  else {
    return ch ;
  }
}

function wordToNATO(word) {
	var result = "";
  for (var i = 0; i < word.length; i++) {
  		result = result + chToNATO(word.charAt(i)) + " ";
	}
  return result ;
}

function sentenceToNATO(sen) {
  var result = "";
  for (var i = 0; i < sen.length; i++) {
    result = result + wordToNATO(sen.charAt(i)) + " ";

  }
  return result ;
}