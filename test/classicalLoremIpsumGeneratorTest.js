var assert = require('assert'),
    Lorem = require('../src/classicalLoremIpsumGenerator.js');
describe('Lorem', function(){
  describe('.removeDuplicates', function() {
    it('removes duplicate words from an array', function() {
      var wordsWithDuplicates = ['foo', 'bar', 'dolor', 'foo'],
          uniqueWords = ['foo', 'bar', 'dolor'];
      assert.strictEqual(compareArrays(
        Lorem.removeDuplicates(wordsWithDuplicates),
        uniqueWords), true);
    });

    it('does not shorten array without duplicates', function() {
      var wordsWithoutDuplicates = ['foo', 'bar', 'dolor', 'ipsum'];
      assert.strictEqual(compareArrays(
        Lorem.removeDuplicates(wordsWithoutDuplicates),
        wordsWithoutDuplicates), true);
    });
  });

  describe('.sentencize', function(){
    it('should return a string', function(){
      assert.strictEqual(typeof Lorem.sentencize(['foo', 'bar', 'dolor']),
        'string');
    });

    it('should end with a period', function(){
      var sentencedWords = Lorem.sentencize(['foo', 'bar', 'dolor']);
      assert.strictEqual(sentencedWords[sentencedWords.length - 1], '.');
    });
  })
});

function compareArrays(arrayOne, arrayTwo) {
  var isEqual = true;
  if (!(arrayOne instanceof Array || arrayTwo instanceof Array)) {
    return false;
  };

  if (arrayOne.length !== arrayTwo.length) { return false };

  for (var i = arrayOne.length - 1; i >= 0; i--) {
    if(arrayTwo.indexOf(arrayOne[i]) === -1){
      isEqual = false;
      break;
    }
  };

  return isEqual;
}
