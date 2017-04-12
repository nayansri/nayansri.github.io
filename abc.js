function test() {
 console.log("Running...");
 alert("TEST");
}
superT.push = function(data) {
    try {
        var testVar = JSON.stringify(data);
     console.log("pers");
        console.log("B Log: " + JSON.stringify(data));
        makePixel("https://dc.optimahub.com","SDK new event: " +testVar );
        ga('send', 'pageview', { hitCallBack: function() {console.log("tracked");} } );
        internetAvailable = false;
    }
    catch (e) {
        throw new sdkException(e.toString());
    }
}
test();
