/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Establishes an array of quote objects containing quote, source, citation, and year. Not all keys are present in each object. If this data set grows beyond 10 items, move to a separate data file.
const quotes = [
{
  quote: "No.",
  source: "William Shakespeare",
  citation: "Hamlet Act III, Scene III, Line 87"
},
{
  quote: "I knew exactly what to do; but in a much more real sense, I had no idea what to do.", 
  source: "Michael Scott",
  citation: "The Office",
  year: 2009
},
{
  quote: "Weeds are flowers, too, once you get to know them.",
  source: "A. A. Milne (Winnie-the-Pooh)"
},
{
  quote: "There's power in looking silly and not caring that you do.",
  source: "Amy Poehler"
},
{
  quote: "I have not failed. I've just found 10,000 ways that won't work.",
  source: "Thomas Edison"
}
];

//Returns a random number, then returns the quote object located at the index of that random number.
function getRandomQuote(){
  const randomNumber = Math.floor(Math.random()*5);
  return(quotes[randomNumber]);
}


//Should print the random quote to the screen but currently doesn't, probably because the if statements are inside a string. Currently returns syntax error - unexpected token: identifier
function printQuote() {
  const randomQuote = getRandomQuote();
  const html = 
  "<p class = "quote">randomQuote.quote</p>
   <p class = "source">randomQuote.source
   if (randomQuote.citation){
    html+=<span class="citation">randomQuote.citation</span>
   }
   if (randomQuote.year){
    html+=<span class="year">randomQuote.year</span> </p>
   }"
 

document.getElementById('quote-box').innerHTML = html; 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);