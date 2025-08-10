if (window.location.pathname == '/connect.html') {
    
    // Discord functionality
    document.addEventListener('DOMContentLoaded', function() {
        // Replace 'YOUR_DISCORD_USERNAME' with your actual Discord username
        const discordUsername = 'YOUR_DISCORD_USERNAME'; // Update this!
        
        // Discord invite link (you can customize this)
        const discordInviteLink = `https://discord.com/users/${discordUsername}`;
        
        // Update Discord links
        const discordLink = document.getElementById('discordLink');
        const discordFooterLink = document.getElementById('discordFooterLink');
        
        if (discordLink) {
            discordLink.href = discordInviteLink;
            discordLink.addEventListener('click', function(e) {
                e.preventDefault();
                // Copy Discord username to clipboard
                navigator.clipboard.writeText(discordUsername).then(function() {
                    // Show success message
                    const originalText = discordLink.innerHTML;
                    discordLink.innerHTML = '<i class="fas fa-check me-2"></i>Username Copied!';
                    discordLink.classList.add('btn-success');
                    
                    setTimeout(() => {
                        discordLink.innerHTML = originalText;
                        discordLink.classList.remove('btn-success');
                    }, 2000);
                }).catch(function() {
                    // Fallback: open Discord link
                    window.open(discordInviteLink, '_blank');
                });
            });
        }
        
        if (discordFooterLink) {
            discordFooterLink.href = discordInviteLink;
        }
    });
    
   function validateContactForm() {
            var valid = true;

            $(".info").html("");
            $(".input-field").css('border', '#e0dfdf 1px solid');
            var userName = $("#userName").val();
            var userEmail = $("#userEmail").val();
            var subject = $("#subject").val();
            var content = $("#content").val();
            
            if (userName == "") {
                $("#userName-info").html("Required.");
                $("#userName").css('border', '#e66262 1px solid');
                valid = false;
            }
            if (userEmail == "") {
                $("#userEmail-info").html("Required.");
                $("#userEmail").css('border', '#e66262 1px solid');
                valid = false;
            }
            if (!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
            {
                $("#userEmail-info").html("Invalid Email Address.");
                $("#userEmail").css('border', '#e66262 1px solid');
                valid = false;
            }

            if (subject == "") {
                $("#subject-info").html("Required.");
                $("#subject").css('border', '#e66262 1px solid');
                valid = false;
            }
            if (content == "") {
                $("#userMessage-info").html("Required.");
                $("#content").css('border', '#e66262 1px solid');
                valid = false;
            }
            return valid;
        }  
}