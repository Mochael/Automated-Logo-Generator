var edgeSpacing = 10;
var columnSpacing = 230;
var docPreset = new DocumentPreset;
docPreset.width = 1191.0;
docPreset.height = 842.0;

var docRef = documents.addDocument(DocumentColorSpace.CMYK, docPreset);
var sFontNames = "";
var x = edgeSpacing;
var y = (docRef.height - edgeSpacing);

var iCount = textFonts.length;
for (var i = 0; i < iCount; i++){
  sFontName = textFonts[i].name;
  sFontName += " ";
  sFontNames = sFontName + i;

  var textRef = docRef.textFrames.add();
  textRef.textRange.characterAttributes.size = 10;
  textRef.contents = sFontNames;
  textRef.top = y;
  textRef.left = x;
  textRef.textRange.characterAttributes.textFont =
  textFonts.getByName(textFonts[i].name);
  redraw();
  if((y -= (textRef.height)) <= 20){
    y = (docRef.height - edgeSpacing);
    x += columnSpacing;
  }
}
