function Lorem(text) {
  this.words = [];

  if(this instanceof Lorem){
    if (!text) {
      text = "lorem ipsum dolor sit amet adipisicing elit";
    }
    this.words = this.removeDuplicates(text.split(/,\s*|\s/));
  } else {
    return new Lorem(text);
  }

}

Lorem.prototype.generate = function(numOfWords) {

};

Lorem.prototype.removeDuplicates = function(text) {
  var cache = {};
  for (var i=0;i<text.length;i++){
    if (!(text[i] in cache)) {
      cache[text[i]] = text[i];
    }
  }
  return Object.keys(cache);
};

Lorem.prototype.enoughUniqueWords = function(numOfWords) {

};
