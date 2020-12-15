/**
 * function that allows a user to input items they need at the store, separating each item with a comma.
 * The grocery list is sorted
 *//** 
function grocery() {
    var items = [];
    var item1 = items.push(prompt("Item 1:"));
    var item2 = items.push(prompt("Item 2:"));
    var item3 = items.push(prompt("Item 3:"));
    var item4 = items.push(prompt("Item 4:"));
    var item5 = items.push(prompt("Item 5:"));

    items.sort().forEach(function (item) {
        console.log(item);
    });    
}
*/

/**
 * Function takes a sentence turns it into an array and builds a new array
 * Looks for words which have 3 or more characters
 * reverses the array and joins it to form a string
*/
function arr() {
    var sentence = prompt("Write any sentence below:"); 
    var words = sentence.split(' ');
    var filteredArray = [];
    
    words.forEach(function (word) {
        if(word.length >= 3){
            filteredArray.push(word);
        }
        else {
            console.log("nothing");
        }
    });
    var reversedArray = filteredArray.reverse();
    var joinedString = reversedArray.join();
    console.log(joinedString);
}
arr();

/**
function multiple(number,multipleOf) {
    var array = [];

    for(var multipleOf = 0; multipleOf < number; multipleOf *= 2) {
        array += (multipleOf*2);
    }
    console.log("Array: " + array);
}
var number  = parseInt(prompt("Enter number:"));
var multipleOf = parseInt(prompt("Enter number to get there:"));
multiple(number,multipleOf);
*/

/**This a nested loop that prints a deck of cards 
 * A deck of cards are 52 consisting of 14 ranks each in 4 suits
*/
/**
var suits = ["spades","clubs","diamonds","hearts"];
var ranks = ["1","2","3","4","5","6","7","8","9","10","jack","queen","king"];
var deck = [];

suits.forEach(function (suit) {
    ranks.forEach(function (rank) {
        deck.push(suit + " of " + rank);
    });
});

console.log(deck);
*/