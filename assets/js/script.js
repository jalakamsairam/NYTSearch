
var articlecounter = 0;
var startYear = 2016;
var endYear = 2017;
var searchWord = "";
var authKey = "3971666df2de47c280b8c0c1046c3144";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +authKey+ "&q=trump&begin_date="+(startYear).toString()+"0101&end_date="+parseInt(endYear).toString()+"0101&sort=newest";

// console.log(queryURL);


$( window ).on( "load", function() { 
$("#search").click(function(){

    $.ajax({
    url : queryURL,
    method : 'GET'
    }).done(function(NYdata){

      console.log(NYdata);
     


for (var i = 0 ; i < 5; i++) {


    var headlineResults = NYdata.response.docs[i].headline.main;

    var url = NYdata.response.docs[i].web_url;

    console.log(headlineResults);

    var publicationDate = NYdata.response.docs[i].pub_date;
    // console.log(publicationDate);
    // console.log(url);
    var divSection = $("<div>");
    divSection.addClass("well");
    
    var h2 = $('<h2>');
    h2.text(headlineResults);
    divSection.append(h2);

    var p = $('<p>');
    p.text(publicationDate);
    divSection.append(p);
    $("#main-div").append(divSection);



}
  });
  });
});