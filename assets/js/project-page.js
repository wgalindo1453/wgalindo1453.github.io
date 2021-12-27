if (window.location.pathname == '/project-page.html') {
    
    
    const ewmURL = ["https://www.youtube.com/embed/IW5gozoPsDg", "https://www.youtube.com/embed/rntkXpl_Sq8",                   "https://www.youtube.com/embed/6qIBVW0j69o"];
    var imgPath = localStorage.getItem("imgPathName");
    var projectName = localStorage.getItem("ProjectName");
    var skillBar1 = document.getElementById("skillBar1");
    var skillBarSpan = document.getElementById("skillBarSpan");
    var skillBar2 = document.getElementById("skillBar2");
    var skillBarSpan2 = document.getElementById("skillBarSpan2");
    var skillBarLabel2 = document.getElementById("skillBarLabel2");
    document.getElementById("projectName").textContent=projectName;
    var arr = document.getElementById("swiperImage");
    var contrImage1 = document.getElementById("contr1Image");
    var contrImage2 = document.getElementById("contr2Image");
    var contrImage3 = document.getElementById("contr3Image");
    var contr1Link = document.getElementById("contr1href");
    var contr2Link = document.getElementById("contr2href");
    var contr3Link = document.getElementById("contr3href");
    var contr1Name = document.getElementById("contr1Name");
    var contr2Name = document.getElementById("contr2Name");
    var contr3Name = document.getElementById("contr3Name");
    
    
  //  var targetDiv = document.getElementById("swiperImage").getElementsByClassName("swiper-slide")[0];
    var arrSlider = document.getElementById("swiperImage").getElementsByClassName("swiper-slide");
  //  targetDiv.style.backgroundImage="url("+imgPath+")";
   
   // .style.backgroundImage="url("+imgPath+")";
    /**
    
    
    <img src="https://avatars.githubusercontent.com/u/76821317?v=4" alt="@thebeasknees" size="32" data-view-component="true" class="avatar circle" width="32" height="32">
    **/
    switch (projectName) {
  case 'event-with-us':
            document.getElementById("videoPlayer").style.visibility="visibile";
            document.getElementById("videoPlayer2").style.visibility="visible";
            document.getElementById("videoPlayer3").style.visibility="visible"; 
            skillBar1.style.width= '1240.000px'
            skillBarSpan.textContent = "99.7%"
            skillBar2.style.width = '10px'
            skillBarSpan2.textContent = "0.3%"
            
            //contributors
            contrImage1.src = "https://avatars.githubusercontent.com/u/76821317?v=4"
            contr1Link.href = "https://github.com/thebeasknees"
            contr1Name.innerHTML = "Keven"
            contrImage2.src = "https://avatars.githubusercontent.com/u/60548867?v=4"
            contr2Link.href = "https://github.com/Commando-Brando"
            contr2Name.innerHTML  = "Brandon"
            contrImage3.src = "https://avatars.githubusercontent.com/u/71749453?v=4"
            contr3Link.href = "https://github.com/The-Yigit"
            contr3Name.innerHTML = "Yigit"
            document.getElementById("resourcelink").href="https://github.com/EventWithMe/EventWithMe"
             document.getElementById("logo").src="event-with-me-logo.png"
  //   document.getElementById("award").textContent = " Third place Code Path Nationals"
             document.getElementById("videoPlayer").src = ewmURL[2];
             document.getElementById("videoPlayer2").src = ewmURL[1];
            document.getElementById("videoPlayer3").src = ewmURL[0];
            document.getElementById("dateText").textContent = "10-01-2021"
            document.getElementById("ts1image").src="AndroidStudio.png"
            document.getElementById("ts2image").src="parse.png"
             document.getElementById("ts3image").src="ticketmaster.png" 
            document.getElementById("ts4image").src="googlemaps.png" 
            document.getElementById("para1").textContent = "EventWithMe allows people to connect with each other over events. Users find events near them and favorite them to track them and then connect to their favorited event group chats. This app won us 3rd place in the CodePath Nationals competition fall 2021!";
   //  document.getElementById("techstack").textContent = ""       
     arrSlider[3].style.backgroundImage="url(ewmpics/Final_Product.gif)";
    arrSlider[3].style.backgroundSize = "200px 400px";
    break;
  case 'hotelverse':
       arrSlider[0].style.backgroundImage="url(ewmpics/hpms.gif)";
       skillBar1.style.width= '1180.000px'
       skillBarSpan.textContent = "95.3%"
       skillBar2.style.width = '60px'
       skillBarSpan2.textContent = "4.6%"
       skillBarLabel2.textContent = "CSS"
            //contributors
            contrImage1.src = "https://avatars.githubusercontent.com/u/56402829?v=4"
            contr1Link.href = "https://github.com/thousandSun"
            contr1Name.innerHTML = "Filiberto"
            contrImage2.src = "https://avatars.githubusercontent.com/u/60548867?v=4"
            contr2Link.href = "https://github.com/Commando-Brando"
            contr2Name.innerHTML  = "Brandon"
            document.getElementById("contr3").style.visibility="hidden";
            
       document.getElementById("resourcelink").href="https://github.com/wgalindo1453/HotelManagementSystem"
       document.getElementById("dateText").textContent = "08-01-2021"     
       document.getElementById("videoPlayer").style.visibility="hidden";
       document.getElementById("videoPlayer2").style.visibility="hidden";
       document.getElementById("videoPlayer3").style.visibility="hidden";   
       document.getElementById("logo").src="hotelverse.png"
       document.getElementById("para1").textContent = "Hotelverse is a hotel management system that allows an organization’s userbase to make accounts to book and manage reservations at hotels that are listed and managed by the organization.";
        document.getElementById("ts1image").src="Intellij.png"
        document.getElementById("ts2image").src="Mysql.png"
        document.getElementById("ts3image").src="aws.png" 
        document.getElementById("ts4image").src="javafx.png" 
            break;
   case 'SimpleTweet':
            for(let i = 0; i < arrSlider.length; i++){
                arrSlider[i].style.backgroundSize = "200px 400px";
            }
            arrSlider[0].style.backgroundImage="url(twitterappwalkthrough.gif)";
            arrSlider[1].style.backgroundImage="url(twitterAppPart2.gif)";
       
       skillBar1.style.width= '1249.000px'
       skillBarSpan.textContent = "100.0%"
        skillBar2.style.visibility="hidden";
            skillBarSpan2.style.visibility="hidden";
            skillBarLabel2.style.visibility="hidden";
            document.getElementById("Bar2").style.visibility = "hidden";
            document.getElementById("contr3").style.visibility="hidden";
            document.getElementById("contr1").style.visibility="hidden";
            document.getElementById("contr2").style.visibility="hidden";
            
       document.getElementById("resourcelink").href="https://github.com/wgalindo1453/SimpleTweet"
       document.getElementById("dateText").textContent = "10-01-2021"     
       document.getElementById("videoPlayer").style.visibility="hidden";
       document.getElementById("videoPlayer2").style.visibility="hidden";
       document.getElementById("videoPlayer3").style.visibility="hidden";   
       document.getElementById("logo").src="simpletweetlogo.png"
       document.getElementById("para1").textContent = "SimpleTweet is an android app that allows a user to view his Twitter timeline. The app utilizes Twitter REST API. User can sign in to Twitter using OAuth login, and User can refresh tweets timeline by pulling down to refresh";
        document.getElementById("ts1image").src="AndroidStudio.png"
        document.getElementById("ts2image").src="simpletweetlogo.png"
        document.getElementById("ts3image").style.visibility="hidden";
        document.getElementById("ts4image").style.visibility="hidden";
  
    
  

      
    break;
            
    case 'Instagram-Parse':
             for(let i = 0; i < arrSlider.length; i++){
                arrSlider[i].style.backgroundSize = "200px 400px";
            }
            arrSlider[0].style.backgroundImage="url(InstagramParse.gif)";
            
       
       skillBar1.style.width= '1249.000px'
       skillBarSpan.textContent = "100.0%"
        skillBar2.style.visibility="hidden";
            skillBarSpan2.style.visibility="hidden";
            skillBarLabel2.style.visibility="hidden";
            document.getElementById("Bar2").style.visibility = "hidden";
            document.getElementById("contr3").style.visibility="hidden";
            document.getElementById("contr1").style.visibility="hidden";
            document.getElementById("contr2").style.visibility="hidden";
            
       document.getElementById("resourcelink").href="https://github.com/wgalindo1453/InstagramCloneParser"
       document.getElementById("dateText").textContent = "10-16-2021"     
       document.getElementById("videoPlayer").style.visibility="hidden";
       document.getElementById("videoPlayer2").style.visibility="hidden";
       document.getElementById("videoPlayer3").style.visibility="hidden";   
       document.getElementById("logo").src="InstagramParselogo.png"
       document.getElementById("para1").textContent = "ParserInstagramClone is a photo sharing app similar to Instagram but using Parse as its backend.User can view the last 20 posts submitted to Instagram.";
        document.getElementById("ts1image").src="AndroidStudio.png"
        document.getElementById("ts2image").src="parse.png"
        document.getElementById("ts3image").style.visibility="hidden";
        document.getElementById("ts4image").style.visibility="hidden";
  
            
            
    break;
            
    case 'Flixter':
              for(let i = 0; i < arrSlider.length; i++){
                arrSlider[i].style.backgroundSize = "400px 400px";
            }
            arrSlider[0].style.backgroundImage="url(Flixter.gif)";
            
       
       skillBar1.style.width= '1249.000px'
       skillBarSpan.textContent = "100.0%"
        skillBar2.style.visibility="hidden";
            skillBarSpan2.style.visibility="hidden";
            skillBarLabel2.style.visibility="hidden";
            document.getElementById("Bar2").style.visibility = "hidden";
            document.getElementById("contr3").style.visibility="hidden";
            document.getElementById("contr1").style.visibility="hidden";
            document.getElementById("contr2").style.visibility="hidden";
            
       document.getElementById("resourcelink").href="https://github.com/wgalindo1453/InstagramCloneParser"
       document.getElementById("dateText").textContent = "10-16-2021"     
       document.getElementById("videoPlayer").style.visibility="hidden";
       document.getElementById("videoPlayer2").style.visibility="hidden";
       document.getElementById("videoPlayer3").style.visibility="hidden";   
       document.getElementById("logo").src="Flixterlogo.png"
       document.getElementById("para1").textContent = "Flixter shows the latest movies currently playing in theaters. The app utilizes the Movie Database API to display images and basic information about these movies to the user.";
        document.getElementById("ts1image").src="AndroidStudio.png"
        document.getElementById("ts2image").src="parse.png"
        document.getElementById("ts3image").src="Flixterlogo.png";
        document.getElementById("ts4image").style.visibility="hidden";
            
            
    break;
    case 'Persist':
             for(let i = 0; i < arrSlider.length; i++){
                arrSlider[i].style.backgroundSize = "400px 600px";
            }
            arrSlider[1].style.backgroundImage="url(https://raw.githubusercontent.com/wgalindo1453/Motivate2/master/swipe1.PNG";
            
       
       skillBar1.style.width= '1249.000px'
       skillBarSpan.textContent = "100.0%"
        skillBar2.style.visibility="hidden";
            skillBarSpan2.style.visibility="hidden";
            skillBarLabel2.style.visibility="hidden";
            document.getElementById("Bar2").style.visibility = "hidden";
            document.getElementById("contr3").style.visibility="hidden";
            document.getElementById("contr1").style.visibility="hidden";
            document.getElementById("contr2").style.visibility="hidden";
            
       document.getElementById("resourcelink").href="https://github.com/wgalindo1453/Motivate2"
       document.getElementById("dateText").textContent = "03-27-2021"     
       document.getElementById("videoPlayer").style.visibility="visibile";
      document.getElementById("videoPlayer").src = "https://www.youtube.com/embed/vOHE3yScN1c";
       document.getElementById("videoPlayer2").style.visibility="hidden";
       document.getElementById("videoPlayer3").style.visibility="hidden";   
       document.getElementById("logo").src="Persistlogo.png"
       document.getElementById("para1").textContent = "Android app which motivates you to keep going when things feel hard, witch the quick swipe feature you can quickly view images that inspire, motivate, and get you back on your feet to accomplish your goals. built with android studio using java , used stored png,jpeg data and simulator for androids lollipop and up versions";
        document.getElementById("ts1image").src="AndroidStudio.png"
        document.getElementById("ts2image").style.visibility="hidden";
        document.getElementById("ts3image").style.visibility="hidden";
        document.getElementById("ts4image").style.visibility="hidden";
            
     break;
  
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}
    
    
    
  //  document.getElementById("projectImage").style.backgroundSize = "200px 400px";
   
    
    
    
}