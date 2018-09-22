// const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;

// // Creating the Cognitive Services credentials
// // This requires a key corresponding to the service being used (i.e. text-analytics, etc)
// var credentials = new CognitiveServicesCredentials("5422c9d769ac4fd8b14e2102771e3483");

// const ComputerVisionClient = require('azure-cognitiveservices-computervision');

// var client = new ComputerVisionClient(credentials, 'https://westcentralus.api.cognitive.microsoft.com');
// var fileStream = require('fs').createReadStream('/Users/michaelkronovet/Desktop/IMG_9041.JPG');
// client.analyzeImageInStreamWithHttpOperationResponse(fileStream, {
//   visualFeatures: ['Categories', 'Tags', 'Description']
// }).then((response) => {
//   console.log(response.body.tags);
//   console.log(response.body.description.captions[0]);
// }).catch((err) => {
//   throw err;
// });

var possibleColors = ["red", "blue", "white", "green", "yellow", "black", "orange", "purple", "cyan", "grey", "indigo", "black", "brown","gold","brown"];
var vowels = ["a", "e", "i", "o", "u"];
var fancyFonts = ["Athelas","Birch Std","Charlemagne Std Bold","Cooper Std","Trajan Pro", "Apple Chancery"];
var kidlyFonts = ["Bradley Hand Bold","Blackoak Std","Rosewood Std","Trattatello", "Mesquite Std Medium"];
var friendlyFonts = ["Sukhumvit Set", "Orator Std", "Verdana","Giddyup Std","Iowan Old Style"];
var defaultFonts = ["Times New Roman","Trebuchet MS","PT Serif","Palantino"];
var fancyColors = ["black", "dark grey", "dark blue", "gold"];
var friendyColors =["green", "orange", "red","brown"];
var kidlyColors = ["purple", "yellow", "cyan", "indigo"];

var fancyHex = ["#20265c","#042337","#000000","#ffffff","#ffb653"];
var kidlyHex = ["#00b89a","#00c1ff","#9d99ff","#ff1493","#a7f0ff","#00c9af","#64abff","#fce6df","#bcffd0"];
var friendlyHex = ["#00c29e","#00c1ff","#9d99ff","#ffb653","#db4114","ff9baa"];



// var outputTags = [{ name: 'wall', confidence: 0.9785731434822083 },
//   { name: 'indoor', confidence: 0.9387333989143372 },
//   { name: 'green', confidence: 0.7196652293205261 },
//   { name: 'vessel', confidence: 0.5777671337127686 },
//   { name: 'bottle', confidence: 0.570465624332428 } ];

var outputTags = ["wall","indoor","green","vessel","bottle"];


function vowelName(outputTags){
  var segments = [];
  for(var i=0; i<outputTags.length;i++){
    var tempString = "";
    if(outputTags[i]!="wall"&&outputTags[i]!="indoor"&&outputTags[i]!="white"){
      for(var j=0; j<outputTags[i].length;j++){
        tempString += outputTags[i].charAt(j);
        if(vowels.indexOf(outputTags[i].charAt(j))>=0){
          segments.push(tempString);
        }
      }
    }
  }
  var maxOne = segments.length;
  var maxTwo = outputTags.length;
  var indexOne = Math.floor(Math.random() * Math.floor(maxOne));
  var indexTwo = Math.floor(Math.random() * Math.floor(maxTwo));
  var segment = segments[indexOne];
  var word = outputTags[indexTwo];
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
  var colors = [];
  var nouns = [];
  for(var i=0;i<outputTags.length;i++){
    if(possibleColors.indexOf(outputTags[i])>=0){
      colors.push(outputTags[i]);
    }
    else{
      nouns.push(outputTags[i]);
    }
  }
  if(colors.length>0 && nouns.length>0){
    var maxOne = colors.length;
    var maxTwo = nouns.length;
    var indexOne = Math.floor(Math.random() * Math.floor(maxOne));
    var indexTwo = Math.floor(Math.random() * Math.floor(maxTwo));

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
  var name = "";
  for(var i=0; i<outputTags.length;i++){
    var tempString = "";
    if(outputTags[i]!="wall"&&outputTags[i]!="indoor"&&outputTags[i]!="white"){
      var max = outputTags[i].length;
      var indexOne = Math.floor(Math.random() * Math.floor(max));
      var indexTwo = Math.floor(Math.random() * Math.floor(max));
      var large = Math.max(indexOne,indexTwo);
      var small = Math.min(indexOne,indexTwo);

      for(var j=small; j<large;j++){
        tempString += outputTags[i].charAt(j);
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
  var max = 3;
  var index = Math.floor(Math.random() * Math.floor(max));
  //console.log(index);
  var brandname;
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
}
  return brandname;
}



function pickStyle(){
  var style;
  var index = Math.floor(Math.random() * Math.floor(3));
  switch(index) {
    case 0:
      style = "fancy";
      break;
    case 1:
      style = "friendly";
      break;
    case 2:
      style = "kidly";
      break;
  }
  return style;
}

function fontRandmizer(style){
  var font;
  if(style=="friendly"){
    var index = Math.floor(Math.random() * Math.floor(friendlyFonts.length));
    font = friendlyFonts[index];
  }
  else if(style=="fancy"){
    var index = Math.floor(Math.random() * Math.floor(fancyFonts.length));
    font = fancyFonts[index];
  }
  else if(style=="kidly"){
    var index = Math.floor(Math.random() * Math.floor(kidlyFonts.length));
    font = kidlyFonts[index];
  }
  else{
    var index = Math.floor(Math.random() * Math.floor(defaultFonts.length));
    font = defaultFonts[index];
  }
return font;
}

function pickColorFunc(style){
  var returnArr=[];
  if(style=="fancy"){
    var index = Math.floor(Math.random() * Math.floor(fancyHex.length));
    returnArr.push(fancyHex[index]);
  }
  else if(style=="friendly"){
    var indexOne = Math.floor(Math.random() * Math.floor(friendlyHex.length));
    returnArr.push(friendlyHex[indexOne]);
    var indexTwo = Math.floor(Math.random() * Math.floor(friendlyHex.length));
    returnArr.push(friendlyHex[indexTwo]);
  }
  else if(style=="kidly"){
    var indexOne = Math.floor(Math.random() * Math.floor(kidlyHex.length));
    returnArr.push(kidlyHex[indexOne]);
    var indexTwo = Math.floor(Math.random() * Math.floor(kidlyHex.length));
    returnArr.push(kidlyHex[indexTwo]);
    var indexThree = Math.floor(Math.random() * Math.floor(kidlyHex.length));
    returnArr.push(kidlyHex[indexThree]);
    var indexFour = Math.floor(Math.random() * Math.floor(kidlyHex.length));
    returnArr.push(kidlyHex[indexFour]);
  }
  return returnArr;
}


function userFeedback(userLst){
  var imageNumber = fileName.length-1;
  var lst = masterLst[imageNumber];
  var returnLst = [];
  for(var i=0; i<userLst.length;i++){
    if (userLst[i] == False){
      returnLst.push(userLst[i]);
    }
    else{
      returnLst.push(userLst[i]);
    }
  return returnLst;
  }
}

function mainRun(outputTags, brandName, logoStyle, filePath){
  var tempBrand;
  var tempStyle;
  var tempColors;
  var tempFont;
  var tempArr;
  if(brandName==false){
    tempBrand = getBrandName(outputTags);
  }
  else{
    tempBrand = brandName;
  }
  if(logoStyle==false){
    tempStyle = pickStyle();
  }
  else{
    tempStyle = logoStyle;
  }
  tempFont = fontRandmizer(tempStyle);
  tempColors = pickColorFunc(tempStyle);
  tempArr = [filePath,tempStyle,tempColors,tempFont,tempBrand];
  return tempArr;
}

var myOutput = mainRun(outputTags, false, false, "ok");
console.log(myOutput);


// var txtFile = "/Users/michaelkronovet/Desktop/Automated-Logo-Generator/testing.txt";

// var fs = require('fs');
// fs.writeFile(txtFile, myOutput, function(err) {
// });
// fs.writeFile(txtFile, myOutput[1], function(err) {
// });
// for(var i=0; i<myOutput[2].length;i++){
//   fs.writeFile(txtFile, myOutput[2], function(err) {
//   });
// }
// fs.writeFile(txtFile, myOutput[3], function(err) {
// });
// fs.writeFile(txtFile, myOutput[4], function(err) {
// });

// file.writeln(myOutput[0]);
// file.writeln(myOutput[1]);
// for(var i=0; i<myOutput[2].length;i++){
//   file.writeln(myOutput[2][i]);
// }
// file.writeln(myOutput[3]);
// file.writeln(myOutput[4]);
// file.close();
