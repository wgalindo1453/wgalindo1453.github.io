// Global function for handling project navigation
function myfunction(imgPath, projectName) {
    localStorage.setItem("imgPathName", imgPath);
    localStorage.setItem("ProjectName", projectName);
    
    // Debug logging
    console.log("Setting localStorage - ProjectName:", projectName, "imgPathName:", imgPath);
    
    // Navigate to project page after setting localStorage
    window.location.href = 'project-page.html';
}

// Debug: Log the current pathname
console.log("Current pathname:", window.location.pathname);
console.log("Current href:", window.location.href);

// Check if we're on the projects page (handle both relative and absolute paths)
if (window.location.pathname.includes('projects-grid-cards.html') || 
    window.location.href.includes('projects-grid-cards.html') ||
    window.location.pathname.endsWith('/') || 
    window.location.pathname === '') {
    
    console.log("Projects page detected, setting up event listeners...");
    
    // Add event listeners for project images when the page loads
    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM loaded, setting up click handlers...");
        
        // EventWithMe project
        const eventWithMeImg = document.getElementById('event-with-us');
        if (eventWithMeImg) {
            console.log("Found EventWithMe image, adding click handler");
            eventWithMeImg.addEventListener('click', function() {
                console.log("EventWithMe clicked!");
                myfunction('assets/img/ewmpics/event-with-me.png', 'event-with-us');
            });
        } else {
            console.log("EventWithMe image not found");
        }
        
        // Hotelverse project
        const hotelverseImg = document.getElementById('hotelverse');
        if (hotelverseImg) {
            console.log("Found Hotelverse image, adding click handler");
            hotelverseImg.addEventListener('click', function() {
                console.log("Hotelverse clicked!");
                myfunction('assets/img/ewmpics/hpms.gif', 'hotelverse');
            });
        } else {
            console.log("Hotelverse image not found");
        }
        
        // SimpleTweet project
        const simpleTweetImg = document.getElementById('SimpleTweet');
        if (simpleTweetImg) {
            console.log("Found SimpleTweet image, adding click handler");
            simpleTweetImg.addEventListener('click', function() {
                console.log("SimpleTweet clicked!");
                myfunction('assets/img/SimpleTweet.png', 'SimpleTweet');
            });
        } else {
            console.log("SimpleTweet image not found");
        }
        
        // Instagram-Parse project
        const instagramParseImg = document.getElementById('Instagram-Parse');
        if (instagramParseImg) {
            console.log("Found Instagram-Parse image, adding click handler");
            instagramParseImg.addEventListener('click', function() {
                console.log("Instagram-Parse clicked!");
                myfunction('assets/img/InstagramParse.png', 'Instagram-Parse');
            });
        } else {
            console.log("Instagram-Parse image not found");
        }
        
        // Flixter project
        const flixterImg = document.getElementById('Flixter');
        if (flixterImg) {
            console.log("Found Flixter image, adding click handler");
            flixterImg.addEventListener('click', function() {
                console.log("Flixter clicked!");
                myfunction('assets/img/flixter.png', 'Flixter');
            });
        } else {
            console.log("Flixter image not found");
        }
        
        // Persist project
        const persistImg = document.getElementById('Persist');
        if (persistImg) {
            console.log("Found Persist image, adding click handler");
            persistImg.addEventListener('click', function() {
                console.log("Persist clicked!");
                myfunction('assets/img/Persist.png', 'Persist');
            });
        } else {
            console.log("Persist image not found");
        }
        
        console.log("All event listeners set up");
    });
} else {
    console.log("Not on projects page, skipping event listener setup");
}



