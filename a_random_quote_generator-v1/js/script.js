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
  year: 2009,
  medium: "TV"
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


//Prints the random quote to the screen, including all properties present.
function printQuote() {

  const randomQuote = getRandomQuote();
  let html = 
  `<p class = "quote">${randomQuote.quote}</p>
   <p class = "source">${randomQuote.source}`
   if (randomQuote.citation){
   html+=`<span class="citation">${randomQuote.citation}</span>`
   }
   if (randomQuote.year){
  html+=`<span class="year">${randomQuote.year}</span>`
   }
   if (randomQuote.medium){
    html+=`<span class="medium">${randomQuote.medium}</span></p>`
     }
   document.getElementById('quote-box').innerHTML = html;

     }  

// Runs the printQuote function every 3 seconds.
setInterval(printQuote,3000);
    
//Creates a random RGB color to apply to the quote container.
function randomColor(){
  const color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
  return (color);
  }
 
 //Applies random color to quote container. 
 
function applyColor(){
  const color = randomColor();
    document.body.style.backgroundColor=color;
}

document.getElementById('load-quote').addEventListener("click", applyColor, false);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


