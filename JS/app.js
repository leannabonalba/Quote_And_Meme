"use strict";

const myQuote = document.getElementById("myQuote");
const myMeme = document.getElementById("myMeme");
const myButton = document.getElementById("quoteBTN");

const myBear = document.getElementById("myBear");
const myBearBTN = document.getElementById("bearBTN");


//Event Listener
myBearBTN.addEventListener("click", DisplayBear);

//Create a f(x) to fecth api data and display image
function DisplayMeme() {

    // alert('This button works.'); //Testing the button - it works!

    //Fetch the data
    const base_URL = "https://api.imgflip.com/get_memes";
    //You can declare the url and CHANGE IT later on, rather than replacing every URL 

    fetch(base_URL)
    .then(response => response.json())
    .then(memes => {
        //You can use console.log to inspect the returning .json array
        //console.log(memes) //returns the .json object
        //console.log(memes.data) //returns/opens the array of objects)

        //We want to get the key-value of the .jpg link to make our generator.
        //console.log(memes.data.memes) //returns just the memes array
        // console.log(memes.data.memes[0].url) //returns the FIRST OBJECT's url key-value
        let randomizedNum = Math.floor(Math.random()*memes.data.memes.length);

        myMeme.src = memes.data.memes[randomizedNum].url;
        // console.log(memes.data.memes[randomizedNum].url); //This is to test
    })
}

function DisplayQuote() {

    // alert('This button works.'); //Testing the button - it works!

    //Fetch the data
    const baseURL = "https://programming-quotesapi.vercel.app/api/random";
    //You can declare the url and CHANGE IT later on, rather than replacing every URL 

    fetch(baseURL)
    .then(response => response.json())
    .then(quote => {
        //Write a conditional that checks API, and outputs that its busy 
        myQuote.innerHTML = `"${quote.quote}"\n - ${quote.author}`
    })

    DisplayMeme();    
}

function DisplayBear() {

   let randomBearNum = Math.floor(Math.random()*2000);
    
    myBear.src = `https://placebear.com/${randomBearNum}/${randomBearNum}`;
}

