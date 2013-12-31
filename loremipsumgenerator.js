function lorem(count, text){
    var theWell = text.split(" ");
    var output = [];
    var wordCounter = 0;
    if (isNaN(count)){
        count = parseInt(count, 10);
        if (isNaN(count)){
        return "You must specify a number.";}
    }

    function enoughUniqueWords(){
        var cache = {};
        for (i=0;i<theWell.length;i++){
            if (!(theWell[i] in cache)) {
                cache[theWell[i]] = theWell[i];
            };
        }
        return Object.keys(cache).length < 3;
    }

    if (enoughUniqueWords()){
        return "You must have at least three unique words separated by spaces.";
    }

    // check if the word counter is less than the number of words the user wanted
    // if so, keep going; if not, return
    // this'll be using a recursive function
   function loremCreator(wordCounter, count, periodCounter, wordWithPeriod,sentenceCounter,sentenceWithNewLine){
        // if we've reached the number the user wants, let's return it
        if(wordCounter === count){
            return output.join(" ")+".";
        }
        // Choose which word gets a period after and count words until you get there
        if (!periodCounter || wordWithPeriod < periodCounter){
            periodCounter = 0;
            wordWithPeriod = Math.floor(Math.random()*8+5);
        }
        if (!sentenceCounter || sentenceWithNewLine < sentenceCounter){
            sentenceCounter = 0;
            sentenceWithNewLine = Math.floor(Math.random()*4+3);
        }
        // choose a random word from the well of words
        var randomNumber = Math.floor(Math.random()*theWell.length);
        var randomWord = theWell[randomNumber];
            // if word matches either of the previous two words, try again
            if (randomWord === output[output.length-1] || randomWord === output[output.length-2]){
                return loremCreator(wordCounter,count,periodCounter,wordWithPeriod,sentenceCounter,sentenceWithNewLine);
            }
            // if first word of sentence, capitalize, if first word of paragraph, add new line
            if (count - wordCounter > 3){
                if (periodCounter === 0){
                    randomWord = randomWord.charAt(0).toUpperCase() + randomWord.slice(1);
                    if (sentenceCounter === sentenceWithNewLine){
                        randomWord = "\n\n" + randomWord;
                    }
                }
            // if we're at the word that needs a period, append it to the end
            else if (periodCounter === wordWithPeriod ){
                randomWord = randomWord+".";
                sentenceCounter++;
            }}
            // add the word to the end of the array
             output.push(randomWord);
        // start over, increasing the current word count by 1
        return loremCreator(wordCounter+1,count,periodCounter+1,wordWithPeriod,sentenceCounter,sentenceWithNewLine);
   }
   return loremCreator(wordCounter, count);
}

console.log(lorem(500, "random word lorem ipsum generator now"));
