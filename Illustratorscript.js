 //
 // Program for Adobe Illustrator created by Evann Wu, Michael Kronovet, Ka Chun Ceung, Tanishq Kancharla
 //
 // This program is designed to generate a logo for a user. As of 9/23/18,
 // it takes the file path to an image (assumed to be consisting of only the object of interest on a white background)
 // a logo style, referring to a fancy logo, friendly logo or kidly logo
 // a desired brand name, if it exists
 // and outputs a logo.

var possibleColors = ["red", "blue", "white", "green", "yellow", "black", "orange", "purple", "cyan", "grey", "indigo", "black", "brown","gold","brown"];
var vowels = ["a", "e", "i", "o", "u"];
var fancyFonts = [213,252,211,830,834,198,93,94,95];
var kidlyFonts = [224,287,255,289,297];
var friendlyFonts = [181,219,330,304,825,451,161];
//var defaultFonts = ["Times New Roman","Trebuchet MS","PT Serif","Palantino"];
//var fancyColors = ["black", "dark grey", "dark blue", "gold"];
//var friendyColors =["green", "orange", "red","brown"];
//var kidlyColors = ["purple", "yellow", "cyan", "indigo"];


var fancyHex = ["46ecc4","a7f0ff","07b5b2","ffffff","eeada4"];
var kidlyHex = ["00b89a","00c1ff","9d99ff","ff1493","a7f0ff","00c9af","64abff","fce6df","bcffd0"];
var friendlyHex = ["00c29e","00c1ff","9d99ff","ffb653","db4114","ff9baa"];




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
        if(vowels[(outputTags[i].charAt(j))]>=0){
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
  if(vowels[(word.charAt(0))]>=0){
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
    if(possibleColors[(outputTags[i])]>=0){
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
  var index = Math.floor(Math.random() * 3);
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
  if(style=="fancy"){
    var index = Math.floor(Math.random() * fancyFonts.length);
    font = fancyFonts[index];
  }
  else if(style=="kidly"){
    var index = Math.floor(Math.random() * kidlyFonts.length);
    font = kidlyFonts[index];
  }
  else{
    var index = Math.floor(Math.random() * friendlyFonts.length);
    font = friendlyFonts[index];
  }




return font;
}

function pickColorFunc(style){
  var returnArr=[];
  if(style=="fancy"){
    var index = Math.floor(Math.random() * fancyHex.length);
    returnArr.push(fancyHex[index]);
  }
  else if(style=="friendly"){
    var indexOne = Math.floor(Math.random() * friendlyHex.length);
    returnArr.push(friendlyHex[indexOne]);
    var indexTwo = Math.floor(Math.random() * friendlyHex.length);
    returnArr.push(friendlyHex[indexTwo]);
  }
  else if(style=="kidly"){
    var indexOne = Math.floor(Math.random() * kidlyHex.length);
    returnArr.push(kidlyHex[indexOne]);
    var indexTwo = Math.floor(Math.random() * kidlyHex.length);
    returnArr.push(kidlyHex[indexTwo]);
    var indexThree = Math.floor(Math.random() * kidlyHex.length);
    returnArr.push(kidlyHex[indexThree]);
    var indexFour = Math.floor(Math.random() * kidlyHex.length);
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

var myOutput = mainRun(outputTags, "GOAT", "fancy", "/Users/Tanishq/Documents/ALG/Automated-Logo-Generator/FieldNotes.JPG");

var abIdx = doc.artboards.getActiveArtboardIndex();
var actAbBds = doc.artboards[abIdx].artboardRect;

function center(width,height){
  return new Array ((actAbBds[2]-actAbBds[0])/2 - width/2, (actAbBds[3]-actAbBds[1])/2  + height/2);
}

function setStroke(selection, sWidth, colorRGB){
  for(k = 0; k < selection.length; k++){
    var subSel = selection[k];
    subSel.stroked = true;
    subSel.strokeColor = colorRGB;
    subSel.strokeWidth = sWidth;

  }
}
function setFill(selection, colorRGB){
  for(k = 0; k < selection.length; k++){
    var subSel = selection[k];
    subSel.filled = true;
    subSel.fillColor = colorRGB;

  }
}

function createImage(fil, type, color, fontNumber, name){
  doc = app.activeDocument;
  var txt = doc.textFrames.add();
  //image comes in as image.png
  //var image = new File("image.jpeg");


  //SECTION 1: Export image into Illustrator, center it


  var imagenew = doc.placedItems.add();
  app.coordinateSystem = CoordinateSystem.ARTBOARDCOORDINATESYSTEM;
  imagenew.file = new File(fil);
  var ratio = doc.height/imagenew.height;
  imagenew.height = doc.height;
  imagenew.width = imagenew.width*ratio;


  imagenew.position = center(imagenew.width, imagenew.height);
  //SECTION 2: Live trace the image in black and white, with ignore white set to true
  var traceItem = imagenew.trace();
  //app.redraw();
  traceItem.tracing.tracingOptions.tracingMode = TracingModeType.TRACINGMODEBLACKANDWHITE;
  traceItem.tracing.tracingOptions.ignoreWhite = true;
  traceItem.tracing.tracingOptions.threshold = 50;
  //traceItem.tracing.tracingOptions.pathFidelity = 78;
  //traceItem.tracing.tracingOptions.noiseFidelity = 0;
  app.redraw();
  var GroupedItem = traceItem.tracing.expandTracing(true);
  //GroupedItem.selected = true;
  //doc.pathItems[doc.pathItems.length-2].selected = true;
  //doc.pathItems[doc.pathItems.length-3].selected = true;

  var logoMark = GroupedItem.groupItems[0];
  var logoMarkItems = logoMark.pathItems;
  //doc.groupItems[0].groupItems[0].pathItems[7].selected=true;

  /*for(i = 0; i < LogoMarkItems.length; i++){
    if(LogoMarkItems[i].pathPoints.length < 10){
      LogoMarkItems[i].selected = true;
    }
  }*/
  //app.cut();
  //doc.pathItems[doc.pathItems.length-1].remove();
  //var baseMark = logoMarkItems[logoMarkItems.length-1];
  //logoMarkItems.selected = true;
  //app.copy();
  //GroupedItem.remove();
  //app.paste();
  //var logoMark = doc.pathItems[0];
  //doc.pathItems[0].selected = true;
  //groupGroupedItem.selected = true;
  //pathItem totalShape = groupGroupedItem.pathItems[0];
  //totalShape.selected = true;

  txt.contents = name;

  //Setting the right font
  var textArtRange = txt.textRange;
  //This returns the right textFont if variable font is valid.
  //var ourTextFont = app.textFonts.getByName(font);
  //if(ourTextFont != NULL){
  textArtRange.characterAttributes.textFont = app.textFonts[fontNumber];
  //ourTextFont[]
  //}
  //else{
  //textArtRange.characterAttributes.textFont = app.textFonts[0];
  //}
  //Some hardcoded designs based on some design principles for logos.
//switch (logoMark.width/logoMark.height)
//if(logoMark.width/logoMark.height < 1.2 && logoMark.width/logoMark.height > 0.8){
  logoMark.width = 200/logoMark.height * logoMark.width;
  logoMark.height = 200;
  logoMark.position = center(logoMark.width, logoMark.height);;

  var len = logoMark.position[0];
  var hei = logoMark.position[1] - logoMark.height;
  txt.top = hei; //logoCenter[0];
  txt.left = len; //logoCenter[1];
  txt.height = logoMark.width/txt.width * txt.height;
  txt.width = logoMark.width;

  if(type == "fancy"){
    var background = doc.pathItems.rectangle(-doc.width, 0, actAbBds[2], actAbBds[3]);
    background.fillColor = new RGBColor();
    background.fillColor.red = 15;
    background.fillColor.green = 15;
    background.fillColor.blue = 15;
    background.stroked = false;
    background.move(doc.layers[0], ElementPlacement.PLACEATEND);
    //logoMarkItems.selected = true;
    //Reading and setting the stroke of image to specified color.
    var fancyColor = new RGBColor();
    var hexColor = parseInt(color, 16);
    fancyColor.red = (hexColor & 0xFF0000)>>16;
    fancyColor.green = (hexColor & 0xFF00)>>8;
    fancyColor.blue = hexColor & 0xFF;
    setStroke(logoMarkItems, 6, fancyColor);
    setFill(logoMarkItems, new NoColor());
    txt.textRange.characterAttributes.fillColor = fancyColor;
  }

}

createImage(myOutput[0], "fancy", myOutput[2], myOutput[3], myOutput[4]);
//createImage("a", "a", "a", "Apple Chancery", "Vector");
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
