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



doc = app.activeDocument;
//image comes in as image.png
//var image = new File("image.jpeg");


//SECTION 1: Export image into Illustrator, center it


var imagenew = doc.placedItems.add();
app.coordinateSystem = CoordinateSystem.ARTBOARDCOORDINATESYSTEM;
imagenew.file = new File("/Users/Tanishq/Documents/ALG/Automated-Logo-Generator/image6.JPG");
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


//SECTION 3: Analyze the width and height of the image to correctly
// format it with the text.

//SECTION 4: Export the image out as logo.png
