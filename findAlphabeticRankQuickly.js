/* 3kyu
 Consider a "word" as any sequence of capital letters A-Z (not limited to just "dictionary words"). For any word with at
 least two different letters, there are other words composed of the same letters but in a different order (for instance,
 STATIONARILY/ANTIROYALIST, which happen to both be dictionary words; for our purposes "AAIILNORSTTY" is also a "word"
 composed of the same letters as these two).

 We can then assign a number to every word, based on where it falls in an alphabetically sorted list of all words made
 up of the same set of letters. One way to do this would be to generate the entire list of words and find the desired
 one, but this would be slow if the word is long.

 Given a word, return its number. Your function should be able to accept any word 25 letters or less in length (possibly
 with some letters repeated), and take no more than 500 milliseconds to run. To compare, when the solution code runs the
 27 test cases in JS, it takes 101ms.

 For very large words, you'll run into number precision issues in JS (if the word's position is greater than 2^53). For
 the JS tests with large positions, there's some leeway (.000000001%). If you feel like you're getting it right for the
 smaller ranks, and only failing by rounding on the larger, submit a couple more times and see if it takes it. If it's
 still a widespread problem, I'll add more leeway.

 Sample words, with their rank:
 ABAB = 2
 AAAB = 1
 BAAA = 4
 QUESTION = 24572
 BOOKKEEPER = 10743
 */
//NOT FINISHED!!!
function listPosition(word) {
    var arr = word.toUpperCase().split('').sort();
    var uniqueChars = {}; //will hold key (letter) and value(times in str)
    var letters = []; //holds unique letters
    for (var i= 0, len = arr.length; i<len; i++){
        if (uniqueChars[arr[i]]) uniqueChars[arr[i]] += 1; //if letter property exists, increment value up by one
        else { //if this is first time letter has been found, add property
            uniqueChars[arr[i]] = 1;
            letters.push(arr[i]);
        }
    }
    function factorial(n)
    {
        if (n <= 1) return 1;
        return n*factorial(n-1);
    }
    for (var j = 0; j < len; j++){ //iterate through each word, rank and calculate

    }


}
