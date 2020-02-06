const https = require('https');
const fs = require('fs');
const cheerio = require('cheerio');

//get all html code from target website.
https.get('https://www.baidu.com',function (response) {
    let html = '';

    response.on('data', function(data){
       html = html +data;
    });

    response.on('end',function(){
        // console.log(html);
        // fs.writeFileSync('./html/baidu_copy.com',html);
        // //save the html into local file

        //GET all links from the website
        const $ = cheerio.load(html);
        let links = $('a');
        // let links = $('ing');
        console.log(links.length);
        //print all of status of the link
        //console.log(links[0]);

        console.log(links[0].attribs.href);
    });


});