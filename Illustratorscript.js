doc = app.activeDocument;
//image comes in as image.png
var image = require("image.png");


//SECTION 1: Export image into Illustrator, center it



//SECTION 2: Live trace the image in black and white, with ignore white set to true
var traceItem = image.trace()
traceItem.tracing.TracingOptions.tracingMode = TracingModeType.TRACINGMODEBLACKANDWHITE;
traceItem.tracing.TracingOptions.ignoreWhite = true;
traceItem.tracing.TracingOptions. = true;

//SECTION 3: Analyze the width and height of the image to correctly
// format it with the text.

//SECTION 4: Export the image out as logo.png
