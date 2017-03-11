var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  jsonfile = require('jsonfile'),
  fs = require('mz/fs');

console.log('find cats');

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
  extended: true
}));

app.get('/api/cats', function(req, res) {
  jsonfile.readFile('./src/assets/cats.json', function (err, data) {
    if(err) throw err;
    res.send(data);
  });
});

app.get('/api/update', async function(req, res) {
  try {
    const masters = await fs.readdir('./src/assets/gallery');
    const galleryPromises = masters.map(async master => {
      const gallery = await fs.readdir('./src/assets/gallery/' + master);
      return { master: master, gallery: gallery }
    });
    const response = await Promise.all(galleryPromises);
    res.json(response);
  } catch(ex) {
    if (process.env.NODE_ENV !== 'production') console.error(ex);
  }
});

app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 4001, function() {
    console.log('Example app listening on port 4001')
  });
