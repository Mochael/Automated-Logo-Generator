/*


//ILLUSTRATOR PART
=======
#include "/Users/Tanishq/Documents/ALG/Automated-Logo-Generator/Azure.js"

var color1;
var color2;
var color3;
var color4;

var str = "";
var txtFile = new File("information.txt");
txtFile.open("r");
while (!txtFile.eof) {
	// read each line of text
  var imagePath = textfile.readln();
  var type = textfile.readln();
  if (type == "fancy"){
    color1 = textfile.readln();
  }
  else if (type == "friendly"){
    color1 = textfile.readln();
    color2 = textfile.readln();
  }
  else if (type == "kidly"){
    color = textfile.readln();
    color2 = textfile.readline();
    color3 = textfile.readln();
    color4 = textfile.readln();
  }
  var font = textfile.readln();
  var name = textfile.readln();
}


*/
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



// let outputTags = [{ name: 'wall', confidence: 0.9785731434822083 },
//   { name: 'indoor', confidence: 0.9387333989143372 },
//   { name: 'green', confidence: 0.7196652293205261 },
//   { name: 'vessel', confidence: 0.5777671337127686 },
//   { name: 'bottle', confidence: 0.570465624332428 } ];

let outputTags = ["wall","indoor","green","vessel","bottle"];


function vowelName(outputTags){
  let segments = [];
  for(let i=0; i<outputTags.length;i++){
    let tempString = "";
    if(outputTags[i]!="wall"&&outputTags[i]!="indoor"&&outputTags[i]!="white"){
      for(let j=0; j<outputTags[i].length;j++){
        tempString += outputTags[i].charAt(j);
        if(vowels.indexOf(outputTags[i].charAt(j))>=0){
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
  let word = outputTags[indexTwo];
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
    if(possibleColors.indexOf(outputTags[i])>=0){
      colors.push(outputTags[i]);
    }
    else{
      nouns.push(outputTags[i]);
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
    if(outputTags[i]!="wall"&&outputTags[i]!="indoor"&&outputTags[i]!="white"){
      let max = outputTags[i].length;
      let indexOne = Math.floor(Math.random() * Math.floor(max));
      let indexTwo = Math.floor(Math.random() * Math.floor(max));
      let large = Math.max(indexOne,indexTwo);
      let small = Math.min(indexOne,indexTwo);

      for(let j=small; j<large;j++){
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
  let max = 3;
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
}
  return brandname;
}



function pickStyle(){
  let style;
  let index = Math.floor(Math.random() * Math.floor(3));
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
  let font;
  if(style=="friendly"){
    let index = Math.floor(Math.random() * Math.floor(friendlyFonts.length));
    font = friendlyFonts[index];
  }
  else if(style=="fancy"){
    let index = Math.floor(Math.random() * Math.floor(fancyFonts.length));
    font = fancyFonts[index];
  }
  else if(style=="kidly"){
    let index = Math.floor(Math.random() * Math.floor(kidlyFonts.length));
    font = kidlyFonts[index];
  }
  else{
    let index = Math.floor(Math.random() * Math.floor(defaultFonts.length));
    font = defaultFonts[index];
  }
return font;
}

function pickColorFunc(style){
  let returnArr=[];
  if(style=="fancy"){
    let index = Math.floor(Math.random() * Math.floor(fancyHex.length));
    returnArr.push(fancyHex[index]);
  }
  else if(style=="friendly"){
    let indexOne = Math.floor(Math.random() * Math.floor(friendlyHex.length));
    returnArr.push(friendlyHex[indexOne]);
    let indexTwo = Math.floor(Math.random() * Math.floor(friendlyHex.length));
    returnArr.push(friendlyHex[indexTwo]);
  }
  else if(style=="kidly"){
    let indexOne = Math.floor(Math.random() * Math.floor(kidlyHex.length));
    returnArr.push(kidlyHex[indexOne]);
    let indexTwo = Math.floor(Math.random() * Math.floor(kidlyHex.length));
    returnArr.push(kidlyHex[indexTwo]);
    let indexThree = Math.floor(Math.random() * Math.floor(kidlyHex.length));
    returnArr.push(kidlyHex[indexThree]);
    let indexFour = Math.floor(Math.random() * Math.floor(kidlyHex.length));
    returnArr.push(kidlyHex[indexFour]);
  }
  return returnArr;
}


function userFeedback(userLst){
  let imageNumber = fileName.length-1;
  let lst = masterLst[imageNumber];
  let returnLst = [];
  for(let i=0; i<userLst.length;i++){
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
  let tempBrand;
  let tempStyle;
  let tempColors;
  let tempFont;
  let tempArr;
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



function createImage(fil, type, color, font, name){
  doc = app.activeDocument;
  var txt = doc.textFrames.add();
  //image comes in as image.png
  //var image = new File("image.jpeg");


  //SECTION 1: Export image into Illustrator, center it


  var imagenew = doc.placedItems.add();
  app.coordinateSystem = CoordinateSystem.ARTBOARDCOORDINATESYSTEM;
  imagenew.file = new File(fil)//"/Users/evannw/Documents/GitHub/Automated-Logo-Generator/image6.JPG");
  var ratio = doc.height/imagenew.height;
  imagenew.height = doc.height;
  imagenew.width = imagenew.width*ratio;
  var abIdx = doc.artboards.getActiveArtboardIndex();
  var actAbBds = doc.artboards[abIdx].artboardRect;
  imagenew.position = new Array ((actAbBds[2]-actAbBds[0])/2 - imagenew.width/2, (actAbBds[3]-actAbBds[1])/2  + imagenew.height/2);


  //SECTION 2: Live trace the image in black and white, with ignore white set to true
  var traceItem = imagenew.trace();
  //app.redraw();
  traceItem.tracing.tracingOptions.tracingMode = TracingModeType.TRACINGMODEBLACKANDWHITE;
  //traceItem.tracing.tracingOptions.ignoreWhite = true;
  traceItem.tracing.tracingOptions.pathFidelity = 78;
  traceItem.tracing.tracingOptions.noiseFidelity = 0;
  app.redraw();
  var GroupedItem = traceItem.tracing.expandTracing(true);
  //GroupedItem.selected = true;
  //doc.pathItems[doc.pathItems.length-2].selected = true;
  //doc.pathItems[doc.pathItems.length-3].selected = true;
  doc.groupItems[0].selected = false;
  var logoMark = doc.groupItems[0].groupItems[0];
  var LogoMarkItems = doc.groupItems[0].groupItems[0].pathItems;
  //doc.groupItems[0].groupItems[0].pathItems[7].selected=true;

  for(i = 0; i < LogoMarkItems.length; i++){
    if(LogoMarkItems[i].pathPoints.length < 20){
      LogoMarkItems[i].selected = true;
    }
  }
  app.cut();
  doc.pathItems[doc.pathItems.length-1].remove();
  var baseMark = doc.pathItems[doc.pathItems.length-1];
  baseMark.selected = true;
  //app.copy();
  //GroupedItem.remove();
  //app.paste();
  //var logoMark = doc.pathItems[0];
  //doc.pathItems[0].selected = true;
  //groupGroupedItem.selected = true;
  //pathItem totalShape = groupGroupedItem.pathItems[0];
  //totalShape.selected = true;
  var len = logoMark.position[0];
  var hei = logoMark.position[1] - logoMark.height;

  //var logoCenter = new Array(logoMark.position[0]-(11/10)*logoMark.height, logoMark.position[1] + (1/2)*logoMark.length);
  txt.contents = name;
  var textArtRange = doc.textFrames[0].textRange;
  textArtRange.characterAttributes.textFont = app.textFonts[0];
  for(j = 0; j < app.textFonts.length; j++) {
    if (app.textFonts[j] == font) {
      textArtRange.characterAttributes.textFont = app.textFonts[j];
    }
  }

  txt.top = hei; //logoCenter[0];
  txt.left = len; //logoCenter[1];
  txt.height = logoMark.width/txt.width * txt.height;
  txt.width = logoMark.width;
}

createImage(myOutput[0], myOutput[1], myOutput[2], myOutput[3], myOutput[4]);
//SECTION 3: Analyze the width and height of the image to correctly
// format it with the text.

//*** TEXT PROPERTIES ***
/*
var content = "GOAT";
var orient = TextOrientation.HORIZONTAL;
var center = new Array(logoMark.position[0]-(11/10)*logoMark.height, logoMark.position[1] + (1/2)*logoMark.length);
//var fontFamily = ;
//var fontName = ;
//var fontStyle = ;
//var fontTypename = ;

textFrame.properties =
{
    geometricBounds : [ 100,100,100,100 ],
    strokeWidth : 2,
    fillColor : "Black",
    contents : "GOAT",
    orientation : orient,
    anchor : center
};

//var size ;
// center variable is the anchor point of the text frame for creation, the we shift the position to center it.
*/
app.redraw();
//SECTION 4: Export the image out as logo.png
