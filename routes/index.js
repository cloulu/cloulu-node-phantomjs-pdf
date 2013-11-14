
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.pdf1 = function(req, res){
  console.log(process.env);
  var NodePDF = require('nodepdf');
  var path = require('path');
  var destpath = path.resolve(__dirname, '..', 'uploads', 'b.pdf');

  // last argument is optional, sets the width and height for the viewport to render the pdf from. (see additional options)
  var pdf = new NodePDF('http://media.daum.net', destpath, {width:1440, height:900, args:'--debug=false'});

  pdf.on('error', function(msg){
      console.log(msg);
  });

  pdf.on('done', function(pathToFile){
      console.log(pathToFile);
      res.json({result:'ok'});
  });
};
