doc = app.activeDocument;
//image comes in as image.png
//var image = new File("image.jpeg");


//SECTION 1: Export image into Illustrator, center it


var imagenew = doc.placedItems.add();
app.coordinateSystem = CoordinateSystem.ARTBOARDCOORDINATESYSTEM;
imagenew.file = new File("/Users/tkanchar/Documents/GitHub/Automated-Logo-Generator/image.jpeg");
var ratio = doc.height/imagenew.height;
imagenew.height = doc.height;
imagenew.width = imagenew.width*ratio;
var abIdx = doc.artboards.getActiveArtboardIndex();
var actAbBds = doc.artboards[abIdx].artboardRect;
imagenew.position = new Array ((actAbBds[2]-actAbBds[0])/2 - imagenew.width/2, (actAbBds[3]-actAbBds[1])/2  + imagenew.height/2);


//SECTION 2: Live trace the image in black and white, with ignore white set to true
var traceItem = imagenew.trace();
traceItem.tracing.TracingOptions.tracingMode = TracingModeType.TRACINGMODEBLACKANDWHITE;
traceItem.tracing.TracingOptions.ignoreWhite = true;
app.redraw();

//SECTION 3: Analyze the width and height of the image to correctly
// format it with the text.

//SECTION 4: Export the image out as logo.png
