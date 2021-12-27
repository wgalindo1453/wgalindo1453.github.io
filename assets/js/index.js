if (window.location.pathname == '/index.html') {
   
 
    
 
    
    
    
     document.getElementById("SimpleTweet").onclick = function() {
   var imgPath3 = document.getElementById("SimpleTweet").getAttribute("src");
          var element = document.getElementById("SimpleTweet");
      var name3 = element.id;
  myfunction(imgPath3, name3);
  };
    
   
    document.getElementById("hotelverse").onclick = function() {
   var imgPath2 = document.getElementById("hotelverse").getAttribute("src");
        var element = document.getElementById("hotelverse");
      var name2 = element.id;
  myfunction(imgPath2, name2);
  };
    
    
 
  document.getElementById("event-with-us").onclick = function() {
   var imgPath1 = document.getElementById("event-with-us").getAttribute("src");
    var element = document.getElementById("event-with-us");
      var name = element.id;
  myfunction(imgPath1, name);
  };
    
 function myfunction(imgPath, projectName) {
// var imgpath = document.getElementById("eventme").getAttribute("src");
    // alert(imgPath);
     localStorage.setItem("imgPathName",imgPath);
     localStorage.setItem("ProjectName",projectName);
     
};
}