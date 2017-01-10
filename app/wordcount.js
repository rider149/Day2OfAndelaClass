'use strict';

module.exports = function words(str){
var wordcount = {};
var text=str.split(/\s+/);
for(var i = 0; i< text.length; i++) {
    var unique = text[i];
    wordcount[unique] = +wordcount[unique] ? wordcount[unique]+1 : 1;
}
return wordcount;
}