const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;
 
// Creating the Cognitive Services credentials
// This requires a key corresponding to the service being used (i.e. text-analytics, etc)
let credentials = new CognitiveServicesCredentials("5422c9d769ac4fd8b14e2102771e3483");

const ComputerVisionClient = require('azure-cognitiveservices-computervision');
 
let client = new ComputerVisionClient(credentials, 'https://westcentralus.api.cognitive.microsoft.com');
let fileStream = require('fs').createReadStream('/Users/michaelkronovet/Desktop/IMG_9041.JPG');
client.analyzeImageInStreamWithHttpOperationResponse(fileStream, {
  visualFeatures: ['Categories', 'Tags', 'Description']
}).then((response) => {
  console.log(response.body.tags);
  console.log(response.body.description.captions[0]);
}).catch((err) => {
  throw err;
});
