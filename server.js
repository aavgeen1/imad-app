var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
//Here we are converting the path specifiied by //the url to get the page to a variable using : //(colon)
app.get('/:page', function(req, res){
    var page = req.params.page;
    res.send(createPageTemplate(pages[page]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var pages={
    'page1':{
        title: "Page One",
        date: "2 August 2017",
        heading: "Page One Heading",
        content: `<p>Portion where all the things will be container which includes images, links and all the html needed for the content.</p>`
    },
    'page2':{
        title: "Page Two",
        date: "2 August 2017",
        heading: "Page Two Heading",
        content: `<p>Portion where all the things will be container which includes images, links and all the html needed for the content.</p>`
    },
    'page3':{
        title: "Page Three",
        date: "2 August 2017",
        heading: "Page Three Heading",
        content: `<p>Portion where all the things will be container which includes images, links and all the html needed for the content.</p>`
    }    
};
function createPageTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate=`
        <!Doctype html>
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <link href="ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <h2>${heading}</h2>
                <div class="container">
                    ${date}  <br>
                    <hr>
                    <div>
                        ${content}
                    </div>
                </div>
            </body>
        </html>
        `;  //back quote
    return htmlTemplate;
    }


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
