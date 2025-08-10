if (window.location.pathname.includes('project-page.html') || window.location.href.includes('project-page.html')) {
    
    // Wait for DOM to be fully loaded before running the script
    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM loaded, running project page script...");
        
        const ewmURL = ["https://www.youtube.com/embed/IW5gozoPsDg", "https://www.youtube.com/embed/rntkXpl_Sq8", "https://www.youtube.com/embed/6qIBVW0j69o"];
    var imgPath = localStorage.getItem("imgPathName");
    var projectName = localStorage.getItem("ProjectName");
    
    // Debug logging
    console.log("=== PROJECT PAGE DEBUG ===");
    console.log("Project Name:", projectName);
    console.log("Image Path:", imgPath);
    console.log("All localStorage keys:", Object.keys(localStorage));
    console.log("All localStorage values:", Object.values(localStorage));
    
    // Check if project name is missing
    if (!projectName) {
        console.error("No project name found in localStorage!");
        console.log("Available localStorage keys:", Object.keys(localStorage));
        // Don't proceed with the rest of the code if no project name
        projectName = "default"; // Set a default value instead of returning
    }
    
    console.log("Final projectName to use:", projectName);
    console.log("About to enter switch statement...");
    
    var skillBar1 = document.getElementById("skillBar1");
    var skillBarSpan = document.getElementById("skillBarSpan");
    var skillBar2 = document.getElementById("skillBar2");
    var skillBarSpan2 = document.getElementById("skillBarSpan2");
    var skillBarLabel2 = document.getElementById("skillBarLabel2");
    document.getElementById("projectName").textContent=projectName;
    var contrImage1 = document.getElementById("contr1Image");
    var contrImage2 = document.getElementById("contr2Image");
    var contrImage3 = document.getElementById("contr3Image");
    var contr1Link = document.getElementById("contr1href");
    var contr2Link = document.getElementById("contr2href");
    var contr3Link = document.getElementById("contr3href");
    var contr1Name = document.getElementById("contr1Name");
    var contr2Name = document.getElementById("contr2Name");
    var contr3Name = document.getElementById("contr3Name");
    var mp1 = document.getElementById("moreProjects1");
    var mp2 = document.getElementById("moreProjects2");
    var mp3 = document.getElementById("moreProjects3");
    var mp4 = document.getElementById("moreProjects4");
    
    // Get video card elements for the new design
    var videoCard1 = document.querySelector('.video-card.featured');
    var videoCard2 = document.querySelector('.video-card:nth-child(2)');
    var videoCard3 = document.querySelector('.video-card:nth-child(3)');
    var imageCard = document.querySelector('.image-card');
  //  targetDiv.style.backgroundImage="url("+imgPath+")";
   
   // .style.backgroundImage="url("+imgPath+")";
    /**
    
    
    <img src="https://avatars.githubusercontent.com/u/76821317?v=4" alt="@thebeasknees" size="32" data-view-component="true" class="avatar circle" width="32" height="32">
    **/
    console.log("Entering switch statement with projectName:", projectName);
    switch (projectName) {
      case 'event-with-us':
            console.log("Executing case 'event-with-us'");
            mp1.src = "https://i.imgur.com/QWT7xem.png";//hpms
            mp2.src = "https://i.imgur.com/7WNRaev.png";
            mp3.src = "https://i.imgur.com/siqnps5.png";
            mp4.src = "https://i.imgur.com/iWu6ank.png";
            document.getElementById("videoPlayer").style.visibility="visible";
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
             document.getElementById("logo").src="https://i.imgur.com/vPoNznv.png";
  //   document.getElementById("award").textContent = " Third place Code Path Nationals"
             document.getElementById("videoPlayer").src = ewmURL[2];
             document.getElementById("videoPlayer2").src = ewmURL[1];
            document.getElementById("videoPlayer3").src = ewmURL[0];
            document.getElementById("dateText").textContent = "10-01-2021"
            document.getElementById("ts1image").src="https://i.imgur.com/yaihpYc.png";
            document.getElementById("ts2image").src="https://i.imgur.com/m6TCvqh.png";
             document.getElementById("ts3image").src="https://i.imgur.com/A1vKsNA.png";
            document.getElementById("ts4image").src="https://i.imgur.com/c8lpERG.png";
            document.getElementById("para1").textContent = "EventWithMe allows people to connect with each other over events. Users find events near them and favorite them to track them and then connect to their favorited event group chats. This app won us 3rd place in the CodePath Nationals competition fall 2021!";
   //  document.getElementById("techstack").textContent = ""       
     // Update image card for the new design
    if (imageCard) {
        imageCard.querySelector('.image-thumbnail').style.backgroundImage = "url(https://i.imgur.com/GES1TOv.png)";
    }
    break;

  case 'hotelverse':
            mp1.src = "https://i.imgur.com/nanxk5q.png";
            mp2.src = "https://i.imgur.com/7WNRaev.png";
            mp3.src = "https://i.imgur.com/siqnps5.png";
            mp4.src = "https://i.imgur.com/iWu6ank.png";
       // Update image card for the new design
       if (imageCard) {
           imageCard.querySelector('.image-thumbnail').style.backgroundImage = "url(https://i.imgur.com/QWT7xem.png)";
       }
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
       document.getElementById("logo").src="https://i.imgur.com/UqM8RwQ.png"
       document.getElementById("para1").textContent = "Hotelverse is a hotel management system that allows an organization’s userbase to make accounts to book and manage reservations at hotels that are listed and managed by the organization.";
                document.getElementById("ts1image").src="https://i.imgur.com/HuxphUE.png"
        document.getElementById("ts2image").src="https://i.imgur.com/SBUMGEx.png"
        document.getElementById("ts3image").src="https://i.imgur.com/iGJjSjb.png" 
        document.getElementById("ts4image").src="https://i.imgur.com/KXdLASe.png" 
            break;
    case 'hpms':
            mp1.src = "https://i.imgur.com/QWT7xem.png";
            mp2.src = "https://i.imgur.com/siqnps5.png";
            mp3.src = "https://i.imgur.com/siqnps5.png";
            mp4.src = "https://i.imgur.com/iWu6ank.png";
       // Update image card for the new design
       if (imageCard) {
           imageCard.querySelector('.image-thumbnail').style.backgroundImage = "url(https://i.imgur.com/QWT7xem.png)";
       }
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
       document.getElementById("logo").src="https://i.imgur.com/UqM8RwQ.png"
       document.getElementById("para1").textContent = "HPMS (Hotel Management System) is a hotel management system that allows an organization's userbase to make accounts to book and manage reservations at hotels that are listed and managed by the organization.";
        document.getElementById("ts1image").src="https://i.imgur.com/HuxphUE.png"
        document.getElementById("ts2image").src="https://i.imgur.com/SBUMGEx.png"
        document.getElementById("ts3image").src="https://i.imgur.com/iGJjSjb.png" 
        document.getElementById("ts4image").src="https://i.imgur.com/KXdLASe.png" 
            break;
   case 'SimpleTweet':
            mp1.src = "https://i.imgur.com/nanxk5q.png";
            mp2.src = "https://i.imgur.com/siqnps5.png";
            mp3.src = "https://i.imgur.com/siqnps5.png";
            mp4.src = "https://i.imgur.com/iWu6ank.png";
            // Update image card for the new design
            if (imageCard) {
                imageCard.querySelector('.image-thumbnail').style.backgroundImage = "url(https://i.imgur.com/nOM4i7z.png)";
            }
       
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
       document.getElementById("logo").src="https://i.imgur.com/bo84bve.png"
       document.getElementById("para1").textContent = "SimpleTweet is an android app that allows a user to view his Twitter timeline. The app utilizes Twitter REST API. User can sign in to Twitter using OAuth login, and User can refresh tweets timeline by pulling down to refresh";
        document.getElementById("ts1image").src="https://i.imgur.com/yaihpYc.png"
        document.getElementById("ts2image").src="https://i.imgur.com/bo84bve.png"
        document.getElementById("ts3image").style.visibility="hidden";
        document.getElementById("ts4image").style.visibility="hidden";
  
    
  

      
    break;
            
    case 'Instagram-Parse':
            mp1.src = "https://i.imgur.com/nanxk5q.png";
            mp2.src = "https://i.imgur.com/G2yUlDu.png";
            mp3.src = "https://i.imgur.com/7WNRaev.png";
            mp4.src = "https://i.imgur.com/iWu6ank.png";
             for(let i = 0; i < arrSlider.length; i++){
                arrSlider[i].style.backgroundSize = "250px 500px";
            }
            arrSlider[0].style.backgroundImage="url(https://i.imgur.com/Tuu2qlU.png)";
            arrSlider[1].style.backgroundImage="url(https://i.imgur.com/u83m9Tp.png)";
            
       
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
       document.getElementById("logo").src="https://i.imgur.com/vRMwiMb.png"
       document.getElementById("para1").textContent = "ParserInstagramClone is a photo sharing app similar to Instagram but using Parse as its backend.User can view the last 20 posts submitted to Instagram.";
        document.getElementById("ts1image").src="https://i.imgur.com/yaihpYc.png"
        document.getElementById("ts2image").src="https://i.imgur.com/m6TCvqh.png"
        document.getElementById("ts3image").style.visibility="hidden";
        document.getElementById("ts4image").style.visibility="hidden";
  
            
            
    break;
    case 'parse':
            mp1.src = "https://i.imgur.com/nanxk5q.png";
            mp2.src = "https://i.imgur.com/G2yUlDu.png";
            mp3.src = "https://i.imgur.com/7WNRaev.png";
            mp4.src = "https://i.imgur.com/iWu6ank.png";
             for(let i = 0; i < arrSlider.length; i++){
                arrSlider[i].style.backgroundSize = "250px 500px";
            }
            arrSlider[0].style.backgroundImage="url(https://i.imgur.com/parse.png)";
            arrSlider[1].style.backgroundImage="url(https://i.imgur.com/parse.png)";
            
       
       skillBar1.style.width= '1249.000px'
       skillBarSpan.textContent = "100.0%"
        skillBar2.style.visibility="hidden";
            skillBarSpan2.style.visibility="hidden";
            skillBarLabel2.style.visibility="hidden";
            document.getElementById("Bar2").style.visibility = "hidden";
            document.getElementById("contr3").style.visibility="hidden";
            document.getElementById("contr1").style.visibility="hidden";
            document.getElementById("contr2").style.visibility="hidden";
            
       document.getElementById("resourcelink").href="https://github.com/wgalindo1453/parse"
       document.getElementById("dateText").textContent = "10-16-2021"     
       document.getElementById("videoPlayer").style.visibility="hidden";
       document.getElementById("videoPlayer2").style.visibility="hidden";
       document.getElementById("videoPlayer3").style.visibility="hidden";   
       document.getElementById("logo").src="https://i.imgur.com/parse.png"
       document.getElementById("para1").textContent = "Parse is a backend-as-a-service platform that provides a complete backend solution for mobile and web applications. It includes user management, data storage, push notifications, and more.";
        document.getElementById("ts1image").src="https://i.imgur.com/yaihpYc.png"
        document.getElementById("ts2image").src="https://i.imgur.com/m6TCvqh.png"
        document.getElementById("ts3image").style.visibility="hidden";
        document.getElementById("ts4image").style.visibility="hidden";
  
            
            
    break;
    case 'javafx':
            mp1.src = "https://i.imgur.com/nanxk5q.png";
            mp2.src = "https://i.imgur.com/G2yUlDu.png";
            mp3.src = "https://i.imgur.com/7WNRaev.png";
            mp4.src = "https://i.imgur.com/iWu6ank.png";
             for(let i = 0; i < arrSlider.length; i++){
                arrSlider[i].style.backgroundSize = "250px 500px";
            }
            arrSlider[0].style.backgroundImage="url(https://i.imgur.com/javafx.png)";
            arrSlider[1].style.backgroundImage="url(https://i.imgur.com/javafx.png)";
            
       
       skillBar1.style.width= '1249.000px'
       skillBarSpan.textContent = "100.0%"
        skillBar2.style.visibility="hidden";
            skillBarSpan2.style.visibility="hidden";
            skillBarLabel2.style.visibility="hidden";
            document.getElementById("Bar2").style.visibility = "hidden";
            document.getElementById("contr3").style.visibility="hidden";
            document.getElementById("contr1").style.visibility="hidden";
            document.getElementById("contr2").style.visibility="hidden";
            
       document.getElementById("resourcelink").href="https://github.com/wgalindo1453/javafx"
       document.getElementById("dateText").textContent = "10-16-2021"     
       document.getElementById("videoPlayer").style.visibility="hidden";
       document.getElementById("videoPlayer2").style.visibility="hidden";
       document.getElementById("videoPlayer3").style.visibility="hidden";   
       document.getElementById("logo").src="https://i.imgur.com/javafx.png"
       document.getElementById("para1").textContent = "JavaFX is a software platform for creating and delivering desktop applications, as well as rich internet applications (RIAs) that can run across a wide variety of devices.";
        document.getElementById("ts1image").src="https://i.imgur.com/yaihpYc.png"
        document.getElementById("ts2image").src="https://i.imgur.com/m6TCvqh.png"
        document.getElementById("ts3image").style.visibility="hidden";
        document.getElementById("ts4image").style.visibility="hidden";
  
            
            
    break;
    case 'mysql':
            mp1.src = "https://i.imgur.com/nanxk5q.png";
            mp2.src = "https://i.imgur.com/G2yUlDu.png";
            mp3.src = "https://i.imgur.com/7WNRaev.png";
            mp4.src = "https://i.imgur.com/iWu6ank.png";
             for(let i = 0; i < arrSlider.length; i++){
                arrSlider[i].style.backgroundSize = "250px 500px";
            }
            arrSlider[0].style.backgroundImage="url(https://i.imgur.com/Mysql.png)";
            arrSlider[1].style.backgroundImage="url(https://i.imgur.com/Mysql.png)";
            
       
       skillBar1.style.width= '1249.000px'
       skillBarSpan.textContent = "100.0%"
        skillBar2.style.visibility="hidden";
            skillBarSpan2.style.visibility="hidden";
            skillBarLabel2.style.visibility="hidden";
            document.getElementById("Bar2").style.visibility = "hidden";
            document.getElementById("contr3").style.visibility="hidden";
            document.getElementById("contr1").style.visibility="hidden";
            document.getElementById("contr2").style.visibility="hidden";
            
       document.getElementById("resourcelink").href="https://github.com/wgalindo1453/mysql"
       document.getElementById("dateText").textContent = "10-16-2021"     
       document.getElementById("videoPlayer").style.visibility="hidden";
       document.getElementById("videoPlayer2").style.visibility="hidden";
       document.getElementById("videoPlayer3").style.visibility="hidden";   
       document.getElementById("logo").src="https://i.imgur.com/Mysql.png"
       document.getElementById("para1").textContent = "MySQL is an open-source relational database management system (RDBMS) that is widely used for web applications and is a key component of the LAMP stack.";
        document.getElementById("ts1image").src="https://i.imgur.com/yaihpYc.png"
        document.getElementById("ts2image").src="https://i.imgur.com/m6TCvqh.png"
        document.getElementById("ts3image").style.visibility="hidden";
        document.getElementById("ts4image").style.visibility="hidden";
  
            
            
    break;
    case 'aws':
            mp1.src = "https://i.imgur.com/nanxk5q.png";
            mp2.src = "https://i.imgur.com/G2yUlDu.png";
            mp3.src = "https://i.imgur.com/7WNRaev.png";
            mp4.src = "https://i.imgur.com/iWu6ank.png";
             for(let i = 0; i < arrSlider.length; i++){
                arrSlider[i].style.backgroundSize = "250px 500px";
            }
            arrSlider[0].style.backgroundImage="url(https://i.imgur.com/aws.png)";
            arrSlider[1].style.backgroundImage="url(https://i.imgur.com/aws.png)";
            
       
       skillBar1.style.width= '1249.000px'
       skillBarSpan.textContent = "100.0%"
        skillBar2.style.visibility="hidden";
            skillBarSpan2.style.visibility="hidden";
            skillBarLabel2.style.visibility="hidden";
            document.getElementById("Bar2").style.visibility = "hidden";
            document.getElementById("contr3").style.visibility="hidden";
            document.getElementById("contr1").style.visibility="hidden";
            document.getElementById("contr2").style.visibility="hidden";
            
       document.getElementById("resourcelink").href="https://github.com/wgalindo1453/aws"
       document.getElementById("dateText").textContent = "10-16-2021"     
       document.getElementById("videoPlayer").style.visibility="hidden";
       document.getElementById("videoPlayer2").style.visibility="hidden";
       document.getElementById("videoPlayer3").style.visibility="hidden";   
       document.getElementById("logo").src="https://i.imgur.com/aws.png"
       document.getElementById("para1").textContent = "Amazon Web Services (AWS) is a comprehensive cloud computing platform that provides a wide range of services including computing power, storage, databases, and more.";
        document.getElementById("ts1image").src="https://i.imgur.com/yaihpYc.png"
        document.getElementById("ts2image").src="https://i.imgur.com/m6TCvqh.png"
        document.getElementById("ts3image").style.visibility="hidden";
        document.getElementById("ts4image").style.visibility="hidden";
  
            
            
    break;
    case 'androidstudio':
            mp1.src = "https://i.imgur.com/nanxk5q.png";
            mp2.src = "https://i.imgur.com/G2yUlDu.png";
            mp3.src = "https://i.imgur.com/7WNRaev.png";
            mp4.src = "https://i.imgur.com/iWu6ank.png";
             for(let i = 0; i < arrSlider.length; i++){
                arrSlider[i].style.backgroundSize = "250px 500px";
            }
            arrSlider[0].style.backgroundImage="url(https://i.imgur.com/AndroidStudio.png)";
            arrSlider[1].style.backgroundImage="url(https://i.imgur.com/AndroidStudio.png)";
            
       
       skillBar1.style.width= '1249.000px'
       skillBarSpan.textContent = "100.0%"
        skillBar2.style.visibility="hidden";
            skillBarSpan2.style.visibility="hidden";
            skillBarLabel2.style.visibility="hidden";
            document.getElementById("Bar2").style.visibility = "hidden";
            document.getElementById("contr3").style.visibility="hidden";
            document.getElementById("contr1").style.visibility="hidden";
            document.getElementById("contr2").style.visibility="hidden";
            
       document.getElementById("resourcelink").href="https://github.com/wgalindo1453/androidstudio"
       document.getElementById("dateText").textContent = "10-16-2021"     
       document.getElementById("videoPlayer").style.visibility="hidden";
       document.getElementById("videoPlayer2").style.visibility="hidden";
       document.getElementById("videoPlayer3").style.visibility="hidden";   
       document.getElementById("logo").src="https://i.imgur.com/AndroidStudio.png"
       document.getElementById("para1").textContent = "Android Studio is the official integrated development environment (IDE) for Google's Android operating system, built on JetBrains' IntelliJ IDEA software and designed specifically for Android development.";
        document.getElementById("ts1image").src="https://i.imgur.com/yaihpYc.png"
        document.getElementById("ts2image").src="https://i.imgur.com/m6TCvqh.png"
        document.getElementById("ts3image").style.visibility="hidden";
        document.getElementById("ts4image").style.visibility="hidden";
  
            
            
    break;
    case 'intellij':
            mp1.src = "https://i.imgur.com/nanxk5q.png";
            mp2.src = "https://i.imgur.com/G2yUlDu.png";
            mp3.src = "https://i.imgur.com/7WNRaev.png";
            mp4.src = "https://i.imgur.com/iWu6ank.png";
             for(let i = 0; i < arrSlider.length; i++){
                arrSlider[i].style.backgroundSize = "250px 500px";
            }
            arrSlider[0].style.backgroundImage="url(https://i.imgur.com/Intellij.png)";
            arrSlider[1].style.backgroundImage="url(https://i.imgur.com/Intellij.png)";
            
       
       skillBar1.style.width= '1249.000px'
       skillBarSpan.textContent = "100.0%"
        skillBar2.style.visibility="hidden";
            skillBarSpan2.style.visibility="hidden";
            skillBarLabel2.style.visibility="hidden";
            document.getElementById("Bar2").style.visibility = "hidden";
            document.getElementById("contr3").style.visibility="hidden";
            document.getElementById("contr1").style.visibility="hidden";
            document.getElementById("contr2").style.visibility="hidden";
            
       document.getElementById("resourcelink").href="https://github.com/wgalindo1453/intellij"
       document.getElementById("dateText").textContent = "10-16-2021"     
       document.getElementById("videoPlayer").style.visibility="hidden";
       document.getElementById("videoPlayer2").style.visibility="hidden";
       document.getElementById("videoPlayer3").style.visibility="hidden";   
       document.getElementById("logo").src="https://i.imgur.com/Intellij.png"
       document.getElementById("para1").textContent = "IntelliJ IDEA is an integrated development environment (IDE) written in Java for developing computer software. It is developed by JetBrains and is available as an Apache 2 licensed community edition.";
        document.getElementById("ts1image").src="https://i.imgur.com/yaihpYc.png"
        document.getElementById("ts2image").src="https://i.imgur.com/m6TCvqh.png"
        document.getElementById("ts3image").style.visibility="hidden";
        document.getElementById("ts4image").style.visibility="hidden";
  
            
            
    break;
    case 'googlemaps':
            mp1.src = "https://i.imgur.com/nanxk5q.png";
            mp2.src = "https://i.imgur.com/G2yUlDu.png";
            mp3.src = "https://i.imgur.com/7WNRaev.png";
            mp4.src = "https://i.imgur.com/iWu6ank.png";
             for(let i = 0; i < arrSlider.length; i++){
                arrSlider[i].style.backgroundSize = "250px 500px";
            }
            arrSlider[0].style.backgroundImage="url(https://i.imgur.com/googlemaps.png)";
            arrSlider[1].style.backgroundImage="url(https://i.imgur.com/googlemaps.png)";
            
       
       skillBar1.style.width= '1249.000px'
       skillBarSpan.textContent = "100.0%"
        skillBar2.style.visibility="hidden";
            skillBarSpan2.style.visibility="hidden";
            skillBarLabel2.style.visibility="hidden";
            document.getElementById("Bar2").style.visibility = "hidden";
            document.getElementById("contr3").style.visibility="hidden";
            document.getElementById("contr1").style.visibility="hidden";
            document.getElementById("contr2").style.visibility="hidden";
            
       document.getElementById("resourcelink").href="https://github.com/wgalindo1453/googlemaps"
       document.getElementById("dateText").textContent = "10-16-2021"     
       document.getElementById("videoPlayer").style.visibility="hidden";
       document.getElementById("videoPlayer2").style.visibility="hidden";
       document.getElementById("videoPlayer3").style.visibility="hidden";   
       document.getElementById("logo").src="https://i.imgur.com/googlemaps.png"
       document.getElementById("para1").textContent = "Google Maps is a web mapping platform and consumer application offered by Google. It offers satellite imagery, aerial photography, street maps, 360° interactive panoramic views of streets, real-time traffic conditions, and route planning.";
        document.getElementById("ts1image").src="https://i.imgur.com/yaihpYc.png"
        document.getElementById("ts2image").src="https://i.imgur.com/m6TCvqh.png"
        document.getElementById("ts3image").style.visibility="hidden";
        document.getElementById("ts4image").style.visibility="hidden";
  
            
            
    break;
            
    case 'Flixter':
            mp1.src = "https://i.imgur.com/nanxk5q.png";
            mp2.src = "https://i.imgur.com/siqnps5.png";
            mp3.src = "https://i.imgur.com/7WNRaev.png";
            mp4.src = "https://i.imgur.com/iWu6ank.png";
              for(let i = 0; i < arrSlider.length; i++){
                arrSlider[i].style.backgroundSize = "600px 600px";
            }
            arrSlider[0].style.backgroundImage="url(https://i.imgur.com/B5zy586.png)";
            
       
       skillBar1.style.width= '1249.000px'
       skillBarSpan.textContent = "100.0%"
        skillBar2.style.visibility="hidden";
            skillBarSpan2.style.visibility="hidden";
            skillBarLabel2.style.visibility="hidden";
            document.getElementById("Bar2").style.visibility = "hidden";
            document.getElementById("contr3").style.visibility="hidden";
            document.getElementById("contr1").style.visibility="hidden";
            document.getElementById("contr2").style.visibility="hidden";
            
       document.getElementById("resourcelink").href="https://github.com/wgalindo1453/Flixter"
       document.getElementById("dateText").textContent = "10-16-2021"     
       document.getElementById("videoPlayer").style.visibility="hidden";
       document.getElementById("videoPlayer2").style.visibility="hidden";
       document.getElementById("videoPlayer3").style.visibility="hidden";   
       document.getElementById("logo").src="https://i.imgur.com/Wq7xxJv.png"
       document.getElementById("para1").textContent = "Flixter shows the latest movies currently playing in theaters. The app utilizes the Movie Database API to display images and basic information about these movies to the user.";
        document.getElementById("ts1image").src="https://i.imgur.com/yaihpYc.png"
        document.getElementById("ts2image").src="https://i.imgur.com/m6TCvqh.png"
        document.getElementById("ts3image").src="https://i.imgur.com/Wq7xxJv.png";
        document.getElementById("ts4image").style.visibility="hidden";
            
            
    break;
    case 'ticketmaster':
            mp1.src = "https://i.imgur.com/nanxk5q.png";
            mp2.src = "https://i.imgur.com/siqnps5.png";
            mp3.src = "https://i.imgur.com/7WNRaev.png";
            mp4.src = "https://i.imgur.com/iWu6ank.png";
              for(let i = 0; i < arrSlider.length; i++){
                arrSlider[i].style.backgroundSize = "600px 600px";
            }
            arrSlider[0].style.backgroundImage="url(https://i.imgur.com/ticketmaster.png)";
            
       
       skillBar1.style.width= '1249.000px'
       skillBarSpan.textContent = "100.0%"
        skillBar2.style.visibility="hidden";
            skillBarSpan2.style.visibility="hidden";
            skillBarLabel2.style.visibility="hidden";
            document.getElementById("Bar2").style.visibility = "hidden";
            document.getElementById("contr3").style.visibility="hidden";
            document.getElementById("contr1").style.visibility="hidden";
            document.getElementById("contr2").style.visibility="hidden";
            
       document.getElementById("resourcelink").href="https://github.com/wgalindo1453/ticketmaster"
       document.getElementById("dateText").textContent = "10-16-2021"     
       document.getElementById("videoPlayer").style.visibility="hidden";
       document.getElementById("videoPlayer2").style.visibility="hidden";
       document.getElementById("videoPlayer3").style.visibility="hidden";   
       document.getElementById("logo").src="https://i.imgur.com/ticketmaster.png"
       document.getElementById("para1").textContent = "Ticketmaster is a ticket booking application that allows users to search for and book tickets to various events. The app utilizes the Ticketmaster API to display event information and handle ticket purchases.";
        document.getElementById("ts1image").src="https://i.imgur.com/yaihpYc.png"
        document.getElementById("ts2image").src="https://i.imgur.com/m6TCvqh.png"
        document.getElementById("ts3image").src="https://i.imgur.com/ticketmaster.png";
        document.getElementById("ts4image").style.visibility="hidden";
            
            
    break;
    case 'Persist':
            mp1.src = "https://i.imgur.com/nanxk5q.png";
            mp2.src = "https://i.imgur.com/siqnps5.png";
            mp3.src = "https://i.imgur.com/7WNRaev.png";
            mp4.src = "https://i.imgur.com/G2yUlDu.png";
             for(let i = 0; i < arrSlider.length; i++){
                arrSlider[i].style.backgroundSize = "400px 600px";
            }
            arrSlider[1].style.backgroundImage="url(https://raw.githubusercontent.com/wgalindo1453/Motivate2/master/swipe1.PNG)";
            
       
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
       document.getElementById("videoPlayer").style.visibility="visible";
      document.getElementById("videoPlayer").src = "https://www.youtube.com/embed/vOHE3yScN1c";
       document.getElementById("videoPlayer2").style.visibility="hidden";
       document.getElementById("videoPlayer3").style.visibility="hidden";   
       document.getElementById("logo").src="https://i.imgur.com/XpivqdK.png"
       document.getElementById("para1").textContent = "Android app which motivates you to keep going when things feel hard, with the quick swipe feature you can quickly view images that inspire, motivate, and get you back on your feet to accomplish your goals. built with android studio using java , used stored png,jpeg data and simulator for androids lollipop and up versions";
        document.getElementById("ts1image").src="https://i.imgur.com/yaihpYc.png"
        document.getElementById("ts2image").style.visibility="hidden";
        document.getElementById("ts3image").style.visibility="hidden";
        document.getElementById("ts4image").style.visibility="hidden";
            
     break;
     
    case 'default':
        // Handle case when no project is selected
        console.log("Executing case 'default' - No project selected, showing default content");
        document.getElementById("projectName").textContent = "Select a Project";
        document.getElementById("para1").textContent = "Please select a project from the projects page to view its details.";
        // Hide videos and other elements
        document.getElementById("videoPlayer").style.visibility = "hidden";
        document.getElementById("videoPlayer2").style.visibility = "hidden";
        document.getElementById("videoPlayer3").style.visibility = "hidden";
        break;
  
  default:
    console.log('Executing default case - Sorry, we are out of ' + projectName + '.');
    console.log('This means the projectName "' + projectName + '" did not match any case statements');
}
    
    
    
  //  document.getElementById("projectImage").style.backgroundSize = "200px 400px";
   
    
    
    
    // Add interactive functionality for the new video card design
    function initializeVideoCards() {
        console.log('Initializing video cards...');
        
        const showcase = document.querySelector('.modern-video-showcase');
        const videoGrid = document.querySelector('.video-grid');
        
        if (!showcase) {
            console.error('Could not find .modern-video-showcase');
            return;
        }
        
        if (!videoGrid) {
            console.error('Could not find .video-grid');
            return;
        }
        
        console.log('Found showcase and video grid:', showcase, videoGrid);
        
        let currentlyExpanded = null;
        
        // Create overlay for expanded state
        const overlay = document.createElement('div');
        overlay.className = 'expanded-overlay';
        document.body.appendChild(overlay);
        console.log('Created overlay:', overlay);
        
        // Create exit button
        const exitBtn = document.createElement('button');
        exitBtn.className = 'exit-expanded';
        exitBtn.innerHTML = '<i class="fas fa-times"></i>';
        exitBtn.setAttribute('aria-label', 'Exit expanded view');
        showcase.appendChild(exitBtn);
        console.log('Created exit button:', exitBtn);
        
        // Function to expand a card
        function expandCard(card) {
            console.log('Attempting to expand card:', card);
            if (currentlyExpanded === card) return;
            
            // Collapse previous card if any
            if (currentlyExpanded) {
                console.log('Collapsing previous card');
                collapseCard();
            }
            
            // Expand the new card
            card.classList.add('expanded');
            showcase.classList.add('expanded');
            videoGrid.classList.add('expanded');
            overlay.classList.add('visible');
            exitBtn.classList.add('visible');
            
            console.log('Added expanded classes to card, showcase, and grid');
            
            // Hide other cards
            const allCards = document.querySelectorAll('.video-card, .image-card');
            allCards.forEach(c => {
                if (c !== card) {
                    c.classList.add('hidden');
                    console.log('Hidden card:', c);
                }
            });
            
            // Expand video container if it's a video card
            const videoContainer = card.querySelector('.video-container');
            if (videoContainer) {
                videoContainer.classList.add('expanded');
                console.log('Expanded video container');
            }
            
            // Expand info section
            const infoSection = card.querySelector('.video-info, .image-info');
            if (infoSection) {
                infoSection.classList.add('expanded');
                console.log('Expanded info section');
            }
            
            currentlyExpanded = card;
            
            // Smooth scroll to showcase
            showcase.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Add focus for accessibility
            card.focus();
            
            console.log('Card expanded successfully:', card.querySelector('h4')?.textContent || 'Unknown card');
        }
        
        // Function to collapse expanded card
        function collapseCard() {
            console.log('Attempting to collapse card');
            if (!currentlyExpanded) {
                console.log('No card currently expanded');
                return;
            }
            
            // Remove expanded classes
            currentlyExpanded.classList.remove('expanded');
            showcase.classList.remove('expanded');
            videoGrid.classList.remove('expanded');
            overlay.classList.remove('visible');
            exitBtn.classList.remove('visible');
            
            console.log('Removed expanded classes');
            
            // Show all cards
            const allCards = document.querySelectorAll('.video-card, .image-card');
            allCards.forEach(c => {
                c.classList.remove('hidden');
                console.log('Showed card:', c);
            });
            
            // Remove expanded classes from video container and info
            const videoContainer = currentlyExpanded.querySelector('.video-container');
            if (videoContainer) {
                videoContainer.classList.remove('expanded');
                console.log('Collapsed video container');
            }
            
            const infoSection = currentlyExpanded.querySelector('.video-info, .image-info');
            if (infoSection) {
                infoSection.classList.remove('expanded');
                console.log('Collapsed info section');
            }
            
            currentlyExpanded = null;
            
            console.log('Card collapsed successfully');
        }
        
        // Add click handlers for video cards
        const videoCards = document.querySelectorAll('.video-card');
        console.log('Found video cards:', videoCards.length);
        
        videoCards.forEach((card, index) => {
            console.log(`Setting up video card ${index + 1}:`, card);
            
            // Make the entire card clickable for better UX
            card.style.cursor = 'pointer';
            
            // Add click handler to the entire card
            card.addEventListener('click', function(e) {
                console.log(`Video card ${index + 1} clicked!`, e.target);
                
                // Don't trigger if clicking on the iframe directly
                if (e.target.tagName === 'IFRAME') {
                    console.log('Clicked on iframe, ignoring');
                    return;
                }
                
                // If already expanded, do nothing
                if (this.classList.contains('expanded')) {
                    console.log('Card already expanded, ignoring click');
                    return;
                }
                
                console.log('Expanding card...');
                // Expand the card
                expandCard(this);
            });
            
            // Add keyboard support for accessibility
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    console.log(`Video card ${index + 1} activated via keyboard`);
                    this.click();
                }
            });
            
            // Make cards focusable
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            const cardTitle = card.querySelector('h4');
            card.setAttribute('aria-label', `Expand ${cardTitle ? cardTitle.textContent : 'video'}`);
            
            console.log(`Video card ${index + 1} setup complete`);
        });
        
        // Add click handlers for image card
        const imageCard = document.querySelector('.image-card');
        if (imageCard) {
            console.log('Found image card:', imageCard);
            imageCard.style.cursor = 'pointer';
            imageCard.setAttribute('tabindex', '0');
            imageCard.setAttribute('role', 'button');
            imageCard.setAttribute('aria-label', 'Expand project screenshots');
            
            imageCard.addEventListener('click', function(e) {
                console.log('Image card clicked!', e.target);
                
                // If already expanded, do nothing
                if (this.classList.contains('expanded')) {
                    console.log('Image card already expanded, ignoring click');
                    return;
                }
                
                console.log('Expanding image card...');
                // Expand the card
                expandCard(this);
            });
            
            // Add keyboard support
            imageCard.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    console.log('Image card activated via keyboard');
                    this.click();
                }
            });
            
            console.log('Image card setup complete');
        } else {
            console.log('No image card found');
        }
        
        // Exit button functionality
        exitBtn.addEventListener('click', function() {
            console.log('Exit button clicked');
            collapseCard();
        });
        
        // Overlay click to exit
        overlay.addEventListener('click', function() {
            console.log('Overlay clicked');
            collapseCard();
        });
        
        // Escape key to exit
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && currentlyExpanded) {
                console.log('Escape key pressed, collapsing card');
                collapseCard();
            }
        });
        
        console.log('Exit functionality setup complete');
        
        // Enhanced iframe interaction
        const iframes = document.querySelectorAll('.video-iframe');
        iframes.forEach(iframe => {
            // Ensure iframes are properly interactive
            iframe.style.pointerEvents = 'auto';
            
            // Add loading state
            iframe.addEventListener('load', function() {
                this.style.opacity = '1';
                this.style.transition = 'opacity 0.3s ease';
            });
            
            // Set initial loading state
            iframe.style.opacity = '0.8';
        });
        
        // Add smooth scrolling for better UX
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        console.log('Video card initialization complete!');
    }
    
    // Initialize video card interactions
    initializeVideoCards();
    
    }); // Close DOMContentLoaded function
} // Close the main if statement