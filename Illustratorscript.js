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
