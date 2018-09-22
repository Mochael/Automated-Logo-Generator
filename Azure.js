// const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;
 
// // Creating the Cognitive Services credentials
// // This requires a key corresponding to the service being used (i.e. text-analytics, etc)
// let credentials = new CognitiveServicesCredentials("5422c9d769ac4fd8b14e2102771e3483");

// const ComputerVisionClient = require('azure-cognitiveservices-computervision');
 
// let client = new ComputerVisionClient(credentials, 'https://westcentralus.api.cognitive.microsoft.com');
// let fileStream = require('fs').createReadStream('/Users/michaelkronovet/Desktop/IMG_9041.JPG');
// client.analyzeImageInStreamWithHttpOperationResponse(fileStream, {
//   visualFeatures: ['Categories', 'Tags', 'Description']
// }).then((response) => {
//   console.log(response.body.tags);
//   console.log(response.body.description.captions[0]);
// }).catch((err) => {
//   throw err;
// });


var Sentiment = require('sentiment');
var sentiment = new Sentiment();

var possibleColors = ["red", "blue", "white", "green", "yellow", "black", "orange", "purple", "cyan", "grey", "indigo", "black", "brown"];
var vowels = ["a", "e", "i", "o", "u"];

let outputTags = [{ name: 'wall', confidence: 0.9785731434822083 },
  { name: 'indoor', confidence: 0.9387333989143372 },
  { name: 'green', confidence: 0.7196652293205261 },
  { name: 'vessel', confidence: 0.5777671337127686 },
  { name: 'bottle', confidence: 0.570465624332428 } ];

let outputDes = { text: 'a close up of a bottle',
  confidence: 0.748919937727784 };


function vowelName(outputTags){
  let segments = [];
  for(let i=0; i<outputTags.length;i++){
    let tempString = "";
    if(outputTags[i]["name"]!="wall"&&outputTags[i]["name"]!="indoor"&&outputTags[i]["name"]!="white"){
      for(let j=0; j<outputTags[i]["name"].length;j++){
        tempString += outputTags[i]["name"].charAt(j);
        if(vowels.indexOf(outputTags[i]["name"].charAt(j))>=0){
          segments.push(tempString);
        }
      }
    }
  }
  let maxOne = segments.length;
  let maxTwo = outputTags.length;
  let indexOne = Math.floor(Math.random() * Math.floor(maxOne));
  let indexTwo = Math.floor(Math.random() * Math.floor(maxTwo));
  let segment = segments[indexOne];
  let word = outputTags[indexTwo]["name"];
  if(vowels.indexOf(word.charAt(0))>=0){
    word = word.slice(1, word.length);
  }
  if(Math.floor(Math.random() * Math.floor(2))==1){
    return segment+word;
  }
  else{
    return word+segment;
  }
}


function colorName(outputTags){
  let colors = [];
  let nouns = [];
  for(let i=0;i<outputTags.length;i++){
    if(possibleColors.indexOf(outputTags[i]["name"])>=0){
      colors.push(outputTags[i]["name"]);
    }
    else{
      nouns.push(outputTags[i]["name"]);
    }
  }
  if(colors.length>0 && nouns.length>0){
    let maxOne = colors.length;
    let maxTwo = nouns.length;
    let indexOne = Math.floor(Math.random() * Math.floor(maxOne));
    let indexTwo = Math.floor(Math.random() * Math.floor(maxTwo));

    if(Math.floor(Math.random() * Math.floor(2))==1){
      return colors[indexOne]+nouns[indexTwo];
    }
    else{
      return nouns[indexTwo]+colors[indexOne];
    }
  }
  return 0;
}

function randomJoin(outputTags){
  let name = "";
  for(let i=0; i<outputTags.length;i++){
    let tempString = "";
    if(outputTags[i]["name"]!="wall"&&outputTags[i]["name"]!="indoor"&&outputTags[i]["name"]!="white"){
      let max = outputTags[i]["name"].length;
      let indexOne = Math.floor(Math.random() * Math.floor(max));
      let indexTwo = Math.floor(Math.random() * Math.floor(max));
      let large = Math.max(indexOne,indexTwo);
      let small = Math.min(indexOne,indexTwo);

      for(let j=small; j<large;j++){
        tempString += outputTags[i]["name"].charAt(j);
      }
    }
    name+=tempString;
  }
  return name;
}



// Ignore wall, indoor, and white in the output
function getBrandName(outputTags){
  //If user inputs certain method or brandname choose that and Otherwise run random methods

  //Random int between 0-9
  let max = 3
  let index = Math.floor(Math.random() * Math.floor(max));
  //console.log(index);
  let brandname;
  switch(index) {
    case 0:
      brandname = colorName(outputTags);
      break;
    case 1:
      brandname = randomJoin(outputTags);
      break;
    case 2:
    brandname = vowelName(outputTags);
      break;
    case 3:
      brandname = 3;
      break;
    case 4:
      brandname = 4;
      break;
    case 5:
      brandname = 5;
      break;
    case 6:
      brandname = 6;
      break;
    case 7:
      brandname = 7;
      break;
    case 8:
      brandname = 8;
      break;
    case 9:
      brandname = 9;
      break;
}
  return brandname;
}

console.log(getBrandName(outputTags));


// var result = sentiment.analyze("Kids have aids.");
// console.log(result);

//console.log(outputTags);
//console.log(outputDes);
