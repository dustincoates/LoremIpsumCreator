function Lorem(text) {
  if(this instanceof Lorem){
    if (!text) {
      text = "lorem ipsum dolor sit amet adipisicing elit"
    };
    this.words = text.split(/,\s*|\s/);
  } else {
    return new Lorem(text);
  };
};

Lorem.prototype.generate = function(numOfWords) {
};
