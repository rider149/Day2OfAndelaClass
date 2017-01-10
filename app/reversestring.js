'use script';

module.exports = function reserveString(str){
	if (str.length==0){
		return null;
	}

	var reverse = [];
	var text = str.split('').join('');
    var reversed = "";
	for (var i=text.length-1; i>=0; i--){
        reversed+=text[i];
	}
    if (reversed===text){
        return true;
        }
    else {    
    return reversed;
	}
}