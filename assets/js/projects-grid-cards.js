
if (window.location.pathname == '/projects-grid-cards.html') {
   

 
    
     document.getElementById("Persist").onclick = function() {
   var imgPath6 = document.getElementById("Persist").getAttribute("src");
          var element = document.getElementById("Persist");
      var name6 = element.id;
  myfunction(imgPath6, name6);
  };
    
     document.getElementById("Flixter").onclick = function() {
   var imgPath5 = document.getElementById("Flixter").getAttribute("src");
          var element = document.getElementById("Flixter");
      var name5 = element.id;
  myfunction(imgPath5, name5);
  };
    
     document.getElementById("Instagram-Parse").onclick = function() {
   var imgPath4 = document.getElementById("Instagram-Parse").getAttribute("src");
          var element = document.getElementById("Instagram-Parse");
      var name4 = element.id;
  myfunction(imgPath4, name4);
  };
    
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
     
}
    
    
    
 //  window.onload = function() {
     //   var imgPath= document.getElementsByTagName('a');
        
       // }
  //  }

   // window.onload = function() {  
        
   // var getInput = prompt("Hey type something here: ");
   //localStorage.setItem("storageName",getInput);
  
   
   
  
    
   
    
    
}



