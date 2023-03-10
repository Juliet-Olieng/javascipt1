// Extract the first four characters from the string below;
// "beautiful"
let comment="beautiful";
console.log(comment.slice(0,4));

// Insert the following string at the tenth index of the below variable:
// "eat"
const food = "I did not have appetite today"
console.log(food.replace(food[10],"eat"))

// Count how many times the following string appears in the string variable:
// 1. "the"
// 2."s"
const story= "She sells sea shells at the sea shore";
const char="the";
const count=story.split(char).length -1;
console.log(count);
const char1="s";
const count1=story.split(char1).length -1;
console.log(count1);

// Convert the following strings into the specified format:
// 1. UpperCase: "CONfidant"
// 2. LowerCase: "amazing", "beautiFUL"
// 3. Title case "A busy office"
const text="CONfidant"
const text2=("amazing","beautiFUL")
const text3="A busy office"
console.log(text.toUpperCase());
console.log(text2.toLowerCase());

//convertion to title case
function toTitleCase(text3){
    return text3.replace(
        /\w\s*/g,
        function (text3){
            return text3.charAt(0).toUpperCase() + substr(1).toLowerCase();
        }
    );
    console.log(text3.toTitleCase());
    
}
// console.log(text3.toTitleCase())
// Using JavaScript, find the following words from the following strings:
// 1. "market"
const string1 = "The lady went to the market with her sister";
console.log(string1.search("market"));
// 2. "season"
// const string2 = "My favorite season is spring"
console.log(string1.search("season"));



